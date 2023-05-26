import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <nav className="relative px-20 py-4 flex mb-4 justify-between items-center bg-white shadow-md">
          <Link className="text-3xl font-bold leading-none" href="#">
            <Image
              src="/CompanyLogo.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Link>
          <div className="lg:hidden">
            <div className="rounded-full bg-gray-200  ">
              <button className="navbar-burger flex items-center text-black p-3">
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </div>

          <button
            className="hidden lg:inline-block items-center bg-#DAE0E6 text-black font-bold	 border-2 py-2 px-4 focus:outline-none 
            hover:bg-gray-200  rounded-full text-base mt-4 md:mt-0"
          >
            Save & Exit
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
