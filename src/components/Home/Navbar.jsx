import React from "react";
import Navlink from "./Navlink";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between my-4">
      <div>
        <Navlink href="/">Home</Navlink>
        <Navlink href="/destinations">Destinations</Navlink>
        <Navlink href="/bookings">My Bookings</Navlink>
        <Navlink href="/admin">Admin</Navlink>
      </div>
      <Link href="/">
        <Image
          width={162}
          height={24}
          src="/assets/Wanderlast-navbar.png"
          alt="Logo"
        />
      </Link>
      <div>
        <Navlink href="/profile">Profile</Navlink>
        <Navlink href="/login">Login</Navlink>
        <Navlink href="/singup">Sign Up</Navlink>
      </div>
    </nav>
  );
};

export default Navbar;
