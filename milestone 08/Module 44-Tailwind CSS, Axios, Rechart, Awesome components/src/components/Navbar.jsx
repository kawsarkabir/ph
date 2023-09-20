import React, { useState } from "react";
import Link from "./Link";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
  ];

  return (
    <div>
      <nav>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-blue-400" />
          ) : (
            <Bars4Icon className="h-6 w-6 text-blue-500 " />
          )}
        </div>

        <ul className={`md:flex gap-5 justify-center absolute md:static bg-sky-300 py-6 px-10 w-full duration-500 ${open ? 'top-6': '-top-36'}`}>
          {routes.map((route) => (
            <Link key={route.id} route={route} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
