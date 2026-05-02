"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DataFetchServer = () => {
  const [data, setData] = useState<any>(null);

  const param = useSearchParams();
  const name = param.get("name");

  useEffect(() => {
    if (!name || name.trim() === "") return;

    const getData = async () => {
      const res = await fetch(`https://api.genderize.io?name=${name}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await res.json();
      setData(result);
    };

    getData();
  }, [name]);

  if (!name || name.trim() === "") {
    return <h1>No name provided</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  const probability = Math.trunc(data.probability * 100);
  const isFemale = data.gender === "female";

  return (
    <div>
      <h1>Data Fetching</h1>

      <div className={isFemale ? "bg-pink-400" : "bg-blue-500"}>
        {data.name} {data.count} {probability}%

        <div>
          {data.gender
            ? data.gender.charAt(0).toUpperCase() + data.gender.slice(1)
            : "Unknown"}
        </div>
      </div>
    </div>
  );
};

export default DataFetchServer;