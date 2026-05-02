type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const DataFetchServer = async ({ searchParams }: Props) => {
  const params = await searchParams;

  const rawName = params.name;

  const name = Array.isArray(rawName)
    ? rawName[0]
    : rawName;

  if (!name ) {
    return (
      <div>
        <h1>No name provided</h1>
      </div>
    );
  }

  const res = await fetch(`https://api.genderize.io?name=${name}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const probability = Math.trunc(data.probability * 100)
  console.log(data)
  const isFemale = data.gender === "female"

  return (
    <div>
      <h1>Data Fetching</h1>
      <div className={` ${isFemale || data.name === "anuj"  ? "bg-pink-400" : "bg-blue-500"} `}>
 {data.name} {data.count} {probability}%

 <div>{data.gender.charAt(0).toUpperCase()+data.gender.slice(1)}</div>
      </div>
     
    </div>
  );
};

export default DataFetchServer;