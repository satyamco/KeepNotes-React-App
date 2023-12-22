import React from 'react'
import { MdDelete } from "react-icons/md";

const Card = ({title, desc,onDelete,id}) => {

    const handleClick = () => {
         onDelete(id)
    }


  return (
    <div className='border  px-6 py-4 bg-white dark:bg-slate-800 shadow-md rounded-xl  m-3 max-sm:m-2'>
        <h2 className='text-xl font-semibold dark:text-white'>{title}</h2>
        <p className='py-4 font-medium text-lg dark:text-white'>{desc}</p>
        <div className='flex justify-end'>
          <button 
          className=' rounded-full pl-4 text-sky-600 mt-2'
          onClick={handleClick}
          ><MdDelete className='text-2xl'/></button></div>
    </div>
  )
}

export default Card