import { useState, useEffect } from "react";

export function useIPData(query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const base = "https://geo.ipify.org/api/v2/country,city";
        const key = import.meta.env.VITE_API_KEY;

        const url = query
          ? `${base}?apiKey=${key}&ipAddress=${query}`
          : `${base}?apiKey=${key}`;

        const res = await fetch(url);

        if (!res.ok) throw new Error("API error");

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query]);

  return { data, loading, error };
}