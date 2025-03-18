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
  return (
    <div className="sticky top-0 z-20 bg-customNav">
      <nav className="bg-customNav border-gray-200 z-50 shadow-md font-roboto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Search Button */}
          <button
            type="button"
            onClick={toggleSearch}
            className="md:hidden dark:font-bold text-black text-gray-500 dark:text-black active:bg-gray-100 dark:active:bg-gray-700 focus:outline-none active:ring-2 active:ring-gray-200 dark:active:rounded-lg text-sm p-2.5 me-1"
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
              className="inline-flex text-black items-center p-2 w-10 h-10 justify-center text-gray-500 dark:text-black active:bg-gray-100 dark:active:bg-gray-700 focus:outline-none md:hidden"
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
                <a href="/highlight" className="block py-2 text-black px-3 text-gray-900 dark:text-black font-bold">
                  Highlights
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
            className="dark:font-bold text-black text-gray-500 dark:text-black active:bg-siteColor dark:active:bg-siteColor focus:outline-none active:ring-2 active:ring-gray-200 dark:active:rounded-lg text-sm p-2.5 me-1"
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



import client from '../contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { MdOutlineDateRange } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import '../css/Post.css';
import RelatedPost from "../components/RelatedPost"


export default async function Post({ params }) {
  const { slug } = await params;

  const res = await client.getEntries({
    content_type: 'jossysports',
    'fields.slug': slug,
  });

  if (!res.items.length) {
    return <div className="container">Post not found</div>;
  } 

  const data = res.items[0]?.fields || {};
const youtubeURL = data.youtube || null
  console.log(youtubeURL)

  // Custom rendering options for rich text
  const renderOptions = {
    renderNode: {
      // Render paragraphs
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="post-paragraph">{children}</p>,

      // Render images
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = node.data.target.fields;
        return (
          <img
            src={`https:${asset.file.url}`}
            alt={asset.title || 'Content image'}
            className="post-image"
          />
        );
      },

      // Render videos (if stored as embedded assets)
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const entry = node.data.target.fields;
        if (entry.file?.contentType.includes('video')) {
          return (
            <video controls className="post-video">
              <source src={`https:${entry.file.url}`} type={entry.file.contentType} />
              Your browser does not support the video tag.
            </video>
          );
        }
        return null;
      },

      // Render hyperlinks
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="post-link">
          {children}
        </a>
      ),
    },
  };

  return (
    
    <>
    <div className="container"> 
     <div className="section-1">
       
      <h1 className="post-title">{data?.title}</h1>
       {data.thumbnail?.fields?.file?.url && (
      <img
       src={`https:${data.thumbnail.fields.file.url}`}
       alt={data.title || "Post Image"}
       className="post-thumbnail"
     />
     )}
     <div className="meta">
       <BiSolidCategory color="#ff3d00"/><span  className="date">{data?.category }</span> 
       <MdOutlineDateRange color="#ff3d00"/><span className="date">{data?.date}</span>
       <IoPersonCircleSharp color="#ff3d00"/><span className="date">Admin</span> 
     </div>
     <hr />
      <div className="post-content">
        {documentToReactComponents(data?.content, renderOptions)}
      </div>
      {youtubeURL && (
    <div className="youtube-container">
    <iframe
      width="100%"
      height="400"
      src={youtubeURL}
      title="YouTube Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
)}
<RelatedPost />
 </div>
 <div className="section-2">
   section 2
 </div>
    </div>
        </>

  );
}
