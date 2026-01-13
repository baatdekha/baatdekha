import { useState, useEffect, useRef } from "react";

type ParserMap = Record<string, (v: unknown) => unknown>;

export function useGoogleSheet<TParsers extends ParserMap>(
  spreadsheetId: string,
  sheetGid: string,
  parsers: TParsers
) {
  type Row = {
    [K in keyof TParsers]: ReturnType<TParsers[K]>;
  };

  const [data, setData] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Parsers are assumed immutable
  const parsersRef = useRef(parsers);

  useEffect(() => {
    let active = true;

    const columns = Object.keys(parsersRef.current) as Array<keyof TParsers>;

    function isNonEmptyRow(row: Row): boolean {
      return Object.values(row).some(
        v => v !== "" && v !== 0 && v !== null
      );
    }

    function isRow(value: Row | null): value is Row {
      return value !== null;
    }

    async function fetchData() {
      try {
        setLoading(true);

        const url =
          `https://docs.google.com/spreadsheets/d/${spreadsheetId}` +
          `/gviz/tq?tqx=out:json&gid=${sheetGid}`;

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const text = await res.text();
        const jsonStr = text.slice(
          text.indexOf("(") + 1,
          text.lastIndexOf(")")
        );

        const raw = JSON.parse(jsonStr);

        const records = raw.table.rows
          .map((row: any) => {
            const obj = {} as Row;

            columns.forEach((key, i) => {
              const rawVal = row.c[i]?.v;
              obj[key] = parsersRef.current[key](rawVal) as Row[typeof key];
            });

            return isNonEmptyRow(obj) ? obj : null;
          })
          .filter(isRow);

        if (!active) return;

        setData(records);
        setError(null);
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchData();

    return () => {
      active = false;
    };
  }, [spreadsheetId, sheetGid]);

  return { data, loading, error };
}
