import React from 'react';
import Image from 'next/image';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsEye} from 'react-icons/bs'
interface CardProps {
    data: {
        ID: number,
    museum: string,
    thumb: string,
    period: number,
    name: string,
    description: string,
    uuid: string
    },
    color: string
    
};

const Card: React.FC<CardProps> = ({data, color}) => {
    const {name, thumb, period, description} = data;
    return (
    <div className="shrink-0  bg-white shadow-md rounded-lg mb-3">
        <div className={`relative ` + color}>
            <Image src={thumb} alt={name} priority width={200}  className="mx-auto" height={200}/>
            <div className='flex items-center text-gray-400 text-xs absolute top-1 right-1'>
                <span className='items-center flex mr-2 '>
                    <AiOutlineHeart className="mr-1"/> 88
                </span>
                <span className='items-center flex mr-2'>
                    <BsEye className="mr-1"/> 22k
                </span>
                
            </div>
        </div>
       <div className='bg-white px-1'>
       <div className='flex justify-between '>
            <h2 className="text-xl font-normal border-b border-gray-300 leading-8">{name.split(' ')[0]}</h2>
            <h2 className='text-xl font-normal leading-8'>{period} CE</h2>
       </div>  
      
      <p className="text-gray-600 line-clamp-2 ">{description}</p>
       </div>
       
    </div>
  );
};

export default Card;
