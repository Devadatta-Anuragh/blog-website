import React from "react";
import { Link } from "react-router-dom";
import { searchByKeyword } from "../store/blogpost/search/actions";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { useCategoryFilterContext } from "./CategoryFilterProvider";
import deleteSvg from "../assets/delete.svg";

export default function Navigation() {
  const dispatch = useDispatch();

  const { categoryFilterInfo, clearAuthorFilterHandler } =
    useCategoryFilterContext();

  function onSearch(keyword) {
    dispatch(searchByKeyword(keyword));
  }

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-300 px-4 lg:px-6 py-2">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <a href="" className="flex items-center mr-16 max-sm:mr-6">
            <img
              src="./blogLogo.png"
              className="mr-3 max-sm:mr-2 h-10 w-10 sm:h-9"
              alt="Flowbite Logo"
            />
          </a>
          <div className="sm:inline-flex flex-1 sm:flex-row flex-wrap flex-col items-center">
            <div className="flex-1 sm:w-1/2">
              <Search onSearch={onSearch} />
            </div>
            <div className="flex max-sm:mt-3 w-1/2 justify-start items-center gap-2">
              {categoryFilterInfo.show && (
                <p className="bg-slate-200 px-2 py-1 rounded-full">
                  {categoryFilterInfo.keyword}
                </p>
              )}
              {categoryFilterInfo.show && (
                <button
                  onClick={clearAuthorFilterHandler}
                  className="flex justify-center items-center gap-1 cursor-pointer bg-red-200 hover:bg-red-300 px-2 max-sm:px-3 py-1 rounded-full"
                >
                  <img className="inline-block" src={deleteSvg} alt="clear" />
                  Clear
                </button>
              )}
            </div>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/finance"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  to="/health"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Contact
                </Link>
              </li>{" "} */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
