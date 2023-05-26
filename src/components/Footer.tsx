import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="md:hidden relative px-4 py-2 my-5 content-center flex justify-between sm:bg-white ">
        <button
          className="lg:inline-block items-center border-2  py-2  px-6 focus:outline-none 
            hover:bg-gray-200 rounded-full text-base mt-2 md:mt-0 text-black font-medium"
        >
          Back
        </button>

        <button
          className="lg:inline-block items-center bg-[#574EFA] border-2 py-2 text-white px-6 focus:outline-none 
            hover:bg-gray-200 rounded-full text-base mt-2  md:mt-0 font-medium text-center"
        >
          Next
        </button>
      </footer>
    </>
  );
};

export default Footer;
