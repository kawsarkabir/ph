import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Products", path: "/products" },
  ];
  return (
    <nav>
      <div onClick={() => setOpen(!open)}>
        {open === true ? (
          <XMarkIcon className="h-6 w-6 text-blue-500 md:hidden" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-blue-500 md:hidden" />
        )}
      </div>
      <ul
        className={`absolute duration-1000 bg-black text-blue-200 w-10/12 md:flex
      ${open ? "top-10" : "top-50"}
       justify-center`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
