import React, { useState } from 'react';
import Card from './Card';
import {useSelector} from "react-redux";
import { RootState} from '../redux/store';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
const itemsPerPage = 24; 

const CardGrid: React.FC = () => {
  const data = useSelector((state: RootState) => state.dataReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.filterData.slice(indexOfFirstItem, indexOfLastItem);
  const lastPage = Math.ceil(data.filterData.length / itemsPerPage); 
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='mb-4'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  border-2 border-solid p-4 border-gray-300 ">
        {currentItems.map((item, index) => (
          <Card key={item.uuid} data={item} color={(index + 1) % 3 !== 0 ? 'bg-[#D9E5E2]': 'bg-[#DE9C6D] bg-opacity-40'}/>
        ))}
      </div>
      <div className="mt-4 flex justify-center md:justify-between lg:justify-between">
        <div className='text-[#858585] hidden md:block lg:block text-base font-normal leading-6 '>
            Page {currentPage} of {lastPage}
        </div>
        <ul className="hidden md:hidden lg:flex">
          {Array.from({ length: lastPage }).map((_, index) => (
            <li key={index} className="cursor-pointer">
              <button onClick={() => paginate(index + 1)} className={"px-4 py-2 text-base font-normal leading-6 " + (currentPage === (index + 1) ? "bg-[#B57A50] text-white": "text-[#858585]")}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
        <div className="col-span-full flex justify-center ">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 mx-1 w-[100px] shrink-0 border flex items-center justify-center border-[#858585] opacity-[0.32] rounded-md border-solid"
        >
          <BsArrowLeft/> Previous 
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === lastPage}
          className="p-2 mx-1 w-[100px] shrink-0 border flex items-center justify-center border-[#858585] opacity-[0.32] rounded-md border-solid"
        >
          Next <BsArrowRight/>
        </button>
      </div>
      </div>
    </div>
  );
};

export default CardGrid;
