import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
  return (
    <div className=' bg-[#131921] fixed top-0 w-screen z-50 p-2 flex text-white'>
       <div className="flex mx-4 items-center space-x-6 justify-between w-full">
            <img className=' h-10  ' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <div className=' font-medium whitespace-nowrap '>
                <p className=' text-gray-400'>Delivery to Anmol</p>
                <p className=' text-lg leading-3'>Hyderabad 500048</p>
            </div>
            <div className='flex w-full'>
                <button className=' flex items-center bg-gray-200 border border-[#131921] outline-1  p-4 text-black rounded-l-lg'>All <ArrowDropDownIcon fontSize='inherit' /> </button>
                <input className='border-y border-[#131921] w-full' />
                <button className=' bg-yellow-500 border-y border-[#131921] border-r text-black text-3xl rounded-r-lg px-2 flex items-center'><SearchIcon fontSize='inherit' /></button>
            </div>
            <div className=' flex items-end pt-5'>
                <img src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg' className=' h-5 ' />
                <p className=' font-bold pl-1 uppercase -mb-1'>EN</p>
                <ArrowDropDownIcon fontSize='inherit' />
            </div>
            <div className=' font-medium whitespace-nowrap '>
                <p className=' text-gray-400'>Hello Anmol</p>
                <div className=' flex'>
                <p className=' text-xl leading-4'>Account & List</p>
                <ArrowDropDownIcon fontSize='inherit' />
                </div>
                
            </div>
            <div className=' font-medium '>
                <p className=' text-gray-400'>Return</p>
                <div className=' flex'>
                <p className=' text-xl leading-4 whitespace-nowrap'>& Order</p>
                
                </div>
                
            </div>
            <div className=' font-medium flex flex-col items-end '>
                <div className=' flex flex-col text-3xl text-center scale-75 '>
                <p className=' leading-3 text-orange-400'>0</p>
                <span className=' text-white text-5xl'><ShoppingCartOutlinedIcon fontSize='inherit' /></span>
                </div>
                
            </div>


        </div>
    </div>
  )
}

export default Navbar