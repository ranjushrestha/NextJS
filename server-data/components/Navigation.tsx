import Link from "next/link";

const Navigation = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Link href="/">Home</Link>
      <Link href="/datafetch">server Fetch</Link>
     <Link href="/datafetch/clientdata">client Fetch</Link>

    </nav>
  );
};

export default Navigation;