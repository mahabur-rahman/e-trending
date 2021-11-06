import React from "react";
import "./navbar.scss";
import { FaSellcast } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <>
      <div id="navbar" className="py-3">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="sm:w-full w-full">
              <div className="flex justify-between">
                {/* brand logo */}
                <div className="brandName">
                  <NavLink
                    to="/"
                    className="icon flex items-center align-middle"
                  >
                    <FaSellcast className="text-4xl text-red-500 hover:text-red-400 mx-3" />
                    <span className="text-4xl text-gray-300">e-Trending</span>
                  </NavLink>
                </div>
                {/* cart button */}
                <div className="bg-black rounded-full py-2 px-10">
                  <Button title={"My Cart"} link={"/cart"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
