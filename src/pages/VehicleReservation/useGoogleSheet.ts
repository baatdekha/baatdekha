import { useState, useEffect } from "react";

export function useGoogleSheet<
  TParsers extends Record<string, (v: unknown) => any>
>(
  spreadsheetId: string,
  sheetGid: string,
  parsers: TParsers
) {
  type Row = {
    [K in keyof TParsers]: ReturnType<TParsers[K]>
  };

  const columns = Object.keys(parsers) as readonly (keyof Row)[];

  const [data, setData] = useState<Row[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&gid=${sheetGid}`;
        const res = await fetch(url);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const text = await res.text();
        const prefix = "google.visualization.Query.setResponse(";
        const start = text.indexOf(prefix);
        if (start === -1) throw new Error("Bad format");

        const json = text
          .substring(start + prefix.length)
          .replace(/\);\s*$/, "");

        const raw = JSON.parse(json);
        const table = raw.table;

        const records = table.rows
          .map((row: any) => {
            const obj = {} as Row;

            columns.forEach((key, i) => {
              const rawVal = row.c[i]?.v;
              obj[key] = parsers[key](rawVal);
            });

            if (Object.values(obj).every(v => v == null)) return null;
            return obj;
          })
          .filter(Boolean) as Row[];

        if (!cancelled) setData(records);
      } catch (err: any) {
        if (!cancelled) {
          setError(new Error(err?.message || "Failed to load"));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [spreadsheetId, sheetGid, parsers]);

  return { data, loading, error };
}
