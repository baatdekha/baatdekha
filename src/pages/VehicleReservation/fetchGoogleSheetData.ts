// src/hooks/useGoogleSheet.ts
import { useState, useEffect } from "react";

interface SheetRecord {
  [key: string]: any;
}

export function useGoogleSheet(
  spreadsheetId: string,
  sheetGid: string
): { data: SheetRecord[] | null; loading: boolean; error: Error | null } {
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
          throw new Error(`HTTP error: ${response.status}`);
        }
        const text = await response.text();
        const prefix = "google.visualization.Query.setResponse(";
        const startIndex = text.indexOf(prefix);
        if (startIndex === -1) {
          throw new Error("Invalid response format from Google Sheets");
        }
        const jsonString = text
          .substring(startIndex + prefix.length)
          .replace(/\);\s*$/, "");
        const raw = JSON.parse(jsonString);
        const table = raw.table;
        const headers = table.cols.map((col: any) => col.label || col.id);

        const records = table.rows.map((row: any) => {
          const obj: SheetRecord = {};
          headers.forEach((header: string, i: number) => {
            const cell = row.c[i];
            obj[header] = cell && cell.v !== undefined ? cell.v : null;
          });
          return obj;
        });

        if (!cancelled) {
          setData(records);
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [spreadsheetId, sheetGid]);

  return { data, loading, error };
}
