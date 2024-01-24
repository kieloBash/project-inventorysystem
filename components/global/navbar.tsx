import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-20 fixed bg-gradient-to-r from-brown-50 to-brown-200 shadow top-0 left-0 flex justify-between items-center px-8">
      <div className="flex gap-2 justify-center items-center">
        <h1 className="text-2xl font-extrabold mr-4 text-main-500">
          LizBoutique
        </h1>
      </div>

      <div className="flex gap-2">
        <Link href={"/sign-in"}>
          <Button variant={"outline"} className="">
            Log In
          </Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button className="">Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
