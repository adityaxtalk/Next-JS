import React from 'react'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

const Shimmermain = () => {
  return (
    <div className="mb-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  border-2 border-solid p-4 border-gray-300 ">
      {Array.from({ length: 24 }).map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded p-4">
          <div className="animate-pulse flex flex-col">
            <div className="w-full h-20 bg-gray-300 rounded"></div>
            <div className="w-full my-2">
              <div className="h-4 mt-2 bg-gray-300 rounded"></div>
              <div className="h-8 mt-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 flex justify-center md:justify-between lg:justify-between">
      <div className="text-[#858585] hidden md:block lg:block text-base font-normal leading-6 ">
        Page {1} of X
      </div>
      <ul className="hidden md:hidden lg:flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className="cursor-pointer">
            <button
              className={"px-4 py-2 text-base font-normal leading-6 "}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <div className="col-span-full flex justify-center ">
        <button
          disabled
          className="p-2 mx-1 w-[100px] shrink-0 border flex items-center justify-center border-[#858585] opacity-[0.32] rounded-md border-solid"
        >
          <BsArrowLeft /> Previous
        </button>
        <button
          disabled
          className="p-2 mx-1 w-[100px] shrink-0 border flex items-center justify-center border-[#858585] opacity-[0.32] rounded-md border-solid"
        >
          Next <BsArrowRight />
        </button>
      </div>
    </div>
  </div>
  )
}

export default Shimmermain