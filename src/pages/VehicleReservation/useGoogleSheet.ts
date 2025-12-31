import { useState, useEffect } from "react";

export interface SheetRecord {
  [key: string]: any;
}

function normalizeKey(str: string, index: number) {
  if (!str || str.trim() === "") return `column_${index}`;
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
}

export function useGoogleSheet(
  spreadsheetId: string,
  sheetGid: string
) {
  const [data, setData] = useState<SheetRecord[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&gid=${sheetGid}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Google Sheets HTTP error: ${response.status}`);
        }

        const text = await response.text();
        const prefix = "google.visualization.Query.setResponse(";
        const startIndex = text.indexOf(prefix);

        if (startIndex === -1) {
          throw new Error("Unexpected Google Sheets format.");
        }

        const jsonString = text
          .substring(startIndex + prefix.length)
          .replace(/\);\s*$/, "");

        const raw = JSON.parse(jsonString);
        const table = raw.table;

        const headers = table.cols.map((col: any, i: number) =>
          normalizeKey(col.label || col.id, i)
        );

        const records = table.rows
          .map((row: any) => {
            const obj: SheetRecord = {};
            headers.forEach((header: string, i: number) => {
              const cell = row.c[i];
              obj[header] = cell?.v ?? null;
            });

            if (Object.values(obj).every((v) => v === null)) return null;
            return obj;
          })
          .filter(Boolean) as SheetRecord[];

        if (!cancelled) setData(records);
      } catch (err: any) {
        if (!cancelled) {
          setError(new Error(err?.message || "Failed to load Google Sheet"));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [spreadsheetId, sheetGid]);

  return { data, loading, error };
}
