"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Store search input
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`); // Redirect with query
    } else {
      alert("Please enter a search term.");
    }
  };
 // border-b-2 border-b-siteColor
 // sticky top-0 z-20 
  return (
    <div className="bg-customNav">
      <nav className="bg-customNav border-gray-200 z-50 shadow-md font-roboto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Search Button */}
          <button
            type="button"
            onClick={toggleSearch}
            className="md:hidden dark:font-bold text-black text-gray-500 dark:text-siteColor active:bg-gray-100 dark:active:bg-gray-700 focus:outline-none active:ring-2 active:ring-gray-200 dark:active:rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M21 21l-4.35-4.35M10 18a8 8 0 110-16 8 8 0 010 16z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          <a href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
            <span className="self-center text-2xl whitespace-nowrap text-black dark:text-black font-bold">
              Jossysports
            </span>
          </a>

          <div className="flex md:order-2">
            {/* Hamburger Menu */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex text-black items-center p-2 w-10 h-10 justify-center text-gray-500 dark:text-siteColor active:bg-gray-100 dark:active:bg-gray-700 focus:outline-none md:hidden"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <span className="sr-only">Open main menu</span>
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-2 border-siteColor bg-customNav rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-customNav dark:bg-customNav md:dark:bg-customNav">
              {/* Menu Items */}
              <li>
                <a href="/" className="block py-2 text-black px-3 text-gray-900 dark:text-black dark:font-bold font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="/Premier-league" className="block py-2 text-black px-3 text-gray-900 dark:text-black dark:font-bold font-bold">
                  Premier League
                </a>
              </li>
              <li>
                <a href="/La-Liga" className="block py-2 text-black px-3 text-gray-900 dark:text-black dark:font-bold font-bold">
                  La Liga
                </a>
              </li>
              <li>
                <a href="/Serie-a" className="block py-2 text-black px-3 text-gray-900 dark:text-black dark:font-bold font-bold">
                  Serie A
                </a>
              </li>
              <li>
                <a href="/fanzone" className="block py-2 text-black px-3 text-gray-900 dark:text-black font-bold">
                  Fanzone
                </a>
              </li>
              <li>
                <a href="/others" className="block py-2 text-black px-3 text-gray-900 dark:text-black font-bold">
                  Others
                </a>
              </li>
              
           <button
            type="button"
            onClick={toggleSearch}
            className="hidden md:block dark:font-bold text-black text-gray-500 dark:text-black active:bg-gray-200 dark:active:bg-gray-200 focus:outline-none active:ring-2 active:ring-gray-200 dark:active:rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M21 21l-4.35-4.35M10 18a8 8 0 110-16 8 8 0 010 16z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
              
            </ul>
          </div>
        </div>

        {/* Search Box */}
        {isSearchOpen && (
          <div className="search-box bg-customNav flex p-4 dark:bg-customNav">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update state
              placeholder="Search..."
              className="w-full p-2 border rounded-lg dark:bg-white dark:text-black"
            />
            <button
              onClick={handleSearch} // Trigger search
              className="ml-2 p-2 bg-siteColor text-white rounded-lg ring-1 dark:ring-gray-200 font-bold"
            >
              Search
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;