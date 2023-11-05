import React, { useState } from 'react';
import {useDispatch}from 'react-redux';
import { AppDispatch} from '../redux/store';
import { removeSelectedFilterOption } from '../redux/features/dataSlice';
interface nameProps {
  name: string
}

const FilterCard: React.FC<nameProps> = ({name}) => {
  const dispatch:AppDispatch = useDispatch();
  const handleClose = (name: string) => {
    dispatch(removeSelectedFilterOption(name));  
  };

  return (
      <div className="relative rounded-md border-solid border-[#E1E1E1] mr-2 mt-2 bg-white p-2 ">
        <h2 className="text-[#858585] text-xl  font-normal leading-6">{name}</h2>
        <button
          onClick={()=>{
            handleClose(name);
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
      </div>
  );
};

export default FilterCard;