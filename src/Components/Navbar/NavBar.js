import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
  <div className="bg-white fixed bottom-0 w-full border-t border-gray-200 flex">
    <NavLink
      activeClassName="text-indigo-500"
      className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      to={{ pathname: `/` }}
    >
      <div className="text-center">
        <span className="block h-8 text-3xl leading-8">
          <i className="mdi mdi-newspaper-variant-outline"></i>
        </span>
        <span className="block text-xs leading-none">Today</span>
      </div>
    </NavLink>
    <NavLink
      activeClassName="text-indigo-500"
      className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      to={{ pathname: `/search` }}
    >
      <div className="text-center">
        <span className="block h-8 text-3xl leading-8">
          <i className="mdi mdi-magnify"></i>
        </span>
        <span className="block text-xs leading-none">Search</span>
      </div>
    </NavLink>
    <NavLink
      activeClassName="text-indigo-500"
      className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      to={{ pathname: `/account` }}
    >
      <div className="text-center">
        <span className="block h-8 text-3xl leading-8">
          <i className="mdi mdi-account-outline"></i>
        </span>
        <span className="block text-xs leading-none">Account</span>
      </div>
    </NavLink>
  </div>
);
