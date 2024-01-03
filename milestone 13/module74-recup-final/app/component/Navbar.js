import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex space-x-5 justify-center mt-4">
          <li> <Link href="/">Home</Link> </li>
          <li> <Link href="/posts">Posts</Link> </li>
          <li> <Link href="/about">About</Link> </li>
          <li> <Link href="/blogs">Blogs</Link> </li>
          <li> <Link href="/contactMe">contactMe</Link> </li>
        </ul>
      </nav>
    </div>
  );
}
