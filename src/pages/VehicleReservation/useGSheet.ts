
import { useState, useEffect } from "react";

export function useGoogleSheet(deploymentUrl: string) {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Note: Apps Script redirects, so fetch handles that automatically
        const response = await fetch(deploymentUrl);
        
        if (!response.ok) throw new Error("Network response was not ok");
        
        const json = await response.json();
        setData(json);
      } catch (err: any) {
        setError(new Error(err.message || "Failed to connect to script"));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [deploymentUrl]);

  return { data, loading, error };
}
