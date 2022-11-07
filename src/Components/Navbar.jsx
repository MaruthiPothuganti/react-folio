import React from "react";
import {
  BiHome,
  BsLightningCharge,
  BsPen,
  RiGhostSmileLine,
  BiMessage,
} from "./Icons";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const menu = [
    {
      name: "Home",
      icon: BiHome,
      path: "/home",
    },
    {
      name: "Projects",
      icon: BsLightningCharge,
      path: "/projects",
    },
    {
      name: "Blogs",
      icon: BsPen,
      path: "/blogs",
    },
    {
      name: "About",
      icon: RiGhostSmileLine,
      path: "/about",
    },
    {
      name: "Contact",
      icon: BiMessage,
      path: "/contact",
    },
  ];

  return (
    <header className="grid place-items-center ml-4 sticky top-0">
      <nav className="flex flex-row bg-[#1e1e1e] border-[#28282852] p-1 rounded-2xl md:flex-col ">
        {menu.map((menuItem) => (
          <NavLink
            to={menuItem.path}
            key={menuItem.name}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-slate-600"
            }
          >
            <div className="m-2 bg-[#0d0d0d] p-1 md:p-2 rounded-xl">
              <menuItem.icon size={28} title={menuItem.name} />
            </div>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
