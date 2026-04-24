import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white">
      
      <div className="font-bold">Ranju logo</div>

      <ul className="flex gap-6 list-none">
        <li>
          <Link href="/" className="text-black no-underline hover:text-blue-500">
            Home
          </Link>
        </li>

        <li>
          <Link href="/about" className="text-black no-underline hover:text-blue-500">
            About
          </Link>
        </li>

        <li>
          <Link href="/blog" className="text-black no-underline hover:text-blue-500">
            Blog
          </Link>
        </li>

        <li>
          <Link href="/contact" className="text-black no-underline hover:text-blue-500">
            Contact
          </Link>
        </li>

        <li>
          <Link href="/service" className="text-black no-underline hover:text-blue-500">
            Services
          </Link>
        </li>
      </ul>

    </header>
  );
};

export default Navigation;