import { useState, useEffect, useRef } from "react";

export function useGoogleSheet<TParsers extends Record<string, (v: unknown) => any>>(
  spreadsheetId: string,
  sheetGid: string,
  parsers: TParsers
) {
  type Row = { [K in keyof TParsers]: ReturnType<TParsers[K]> };
  
  const [data, setData] = useState<Row[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Use a ref for parsers to avoid unnecessary effect triggers
  const parsersRef = useRef(parsers);

  useEffect(() => {
    let active = true;
    const columns = Object.keys(parsersRef.current) as (keyof Row)[];

    async function fetchData() {
      try {
        const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&gid=${sheetGid}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);

        const text = await res.text();
        const jsonStr = text.substring(text.indexOf("(") + 1, text.lastIndexOf(")"));
        const raw = JSON.parse(jsonStr);

        const records = raw.table.rows.map((row: any) => {
          const obj = {} as Row;
          columns.forEach((key, i) => {
            const rawVal = row.c[i]?.v;
            obj[key] = parsersRef.current[key](rawVal);
          });
          // Check if row has any data
          return Object.values(obj).some(v => v !== "" && v !== 0 && v !== null) ? obj : null;
        }).filter(Boolean) as Row[];

        if (active) {
          setData(records);
          setError(null);
        }
      } catch (err: any) {
        if (active) setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchData();
    return () => { active = false; };
  }, [spreadsheetId, sheetGid]);

  return { data, loading, error };
}
