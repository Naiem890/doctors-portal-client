import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      linkText: "Home",
      navLink: "/",
    },
    {
      linkText: "About",
      navLink: "/home/#about",
    },
    {
      linkText: "Appointment",
      navLink: "/appointment",
    },
    {
      linkText: "Reviews",
      navLink: "/review",
    },
    {
      linkText: "Contact Us",
      navLink: "/contact-us",
    },
    {
      linkText: "Login",
      navLink: "/login",
    },
  ];

  return (
    <div className="sticky top-0 z-10">
      <div className="navbar  bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </Link>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal p-0">
            {navLinks.map((link) => {
              return (
                <li>
                  <NavLink to={link.navLink}>{link.linkText}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
