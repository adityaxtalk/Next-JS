"use client";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { GiPartyPopper } from "react-icons/gi";
import FilterCard from "./FilterCard";
import CardGrid from "./CardGrid";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPIData } from "../utils/api";
import { RootState, AppDispatch } from "../redux/store";
import Shimmermain from "./shimmer/Shimmermain";
import { filterData } from "../redux/features/dataSlice";

const Main = () => {
  const dispatch: AppDispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const data = useSelector((state: RootState) => state.dataReducer);
  useEffect(() => {
    fetchAPIData(dispatch);
  }, [dispatch]);
  const handleSearch= () => {
    dispatch(filterData(searchText));
  }
  return (
    <>
      { ((data.filterData.length === 0 || data.loading) && !data.error && !data.data.length) && <Shimmermain />}
      {!data.loading && data.data.length > 0 && !data.error && (
        <>
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchText}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none pl-10 "
                  onChange={(e)=> setSearchText(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <GoSearch className="text-gray-500" />
                </div>
              </div>
              <button onClick={handleSearch} className="px-4 py-2 hover:bg-[#9b6a47] text-white rounded-r bg-[#B57A50]">
                Search
              </button>
            </div>
            <div className="hidden md:hidden lg:flex items-center">
              <button className="rounded border text-[#B57A50] bg-none flex items-center uppercase border-[#B57A50] p-2">
                <GiPartyPopper className="text-[#B57A50]" /> Surprise Me
              </button>
            </div>
          </div>
          <div className="flex">Showing {data.filterData.length} items</div>
          <div className="md:grid grid-cols-2 lg:grid-cols-3 my-5 hidden">
            {data.selectedFilter.map((item, index) => {
              return <FilterCard key={index} name={item} />;
            })}
          </div>
          <CardGrid />
        </>
      )}
      {!data.loading && data.error?.length && (
       <div className=" flex items-center justify-center bg-gray-100 h-[500px]">
       <div className="text-center p-8">
         <h1 className="text-4xl text-red-500">Error: {data.error}</h1>
         <p className="text-lg text-gray-600">Please connect our support team for assistance</p>
       </div>
     </div>
      )}
    </>
  );
};

export default Main;
