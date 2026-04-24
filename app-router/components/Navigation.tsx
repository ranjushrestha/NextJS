import Link from "next/link";
const Navigation = () => {
  return (
    <header className="flex items-center justify-between border-b-2 mb-10">
      <div className="font-bold">Routes</div>
      <ul className="flex gap-6 p-4">
        <li><Link href="/">Home</Link></li>
        <li>
          <Link href="/ssr">SSR</Link>
        </li>
        <li>
          <Link href="/ssg">SSG</Link>
        </li>
        <li>
          <Link href="/isr">ISR</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
