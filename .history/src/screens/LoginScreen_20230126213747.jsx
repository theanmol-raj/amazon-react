import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function LoginScreen() {
  return (
    <div className='flex justify-center py-12 bg-black h-screen'>
   
                <div className='w-[29rem] border-black border-2 h-max py-4 space-y-2 bg-white rounded-lg'>
                  <img className='w-32 h-10 ml-44' src='https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png'/>
                <div className='border px-4 py-6 space-y-4 rounded-lg ml-12 border-black w-[22rem] h-max'>
                  <a className='flex justify-start font-semibold text-3xl'>Login</a>
                  <div className='mr-20'>
                  <a className='mr-2 font-semibold'>Email or Mobile phone Number</a>
                  <input className='border-2 rounded-sm hover:border-yellow-400 h-8 w-[20rem] border-black'/>
                  </div>
                  <div className='mr-'>
                  <a className='mr-2 font-semibold flex '><a>Password</a><a className='ml-32 text-sm text-blue-400'>Forget password</a></a>
                  <input className='border-2 rounded-sm h-8 hover:border-yellow-400 w-[20rem] border-black'/>
                  </div>
                  <button className='w-80 py-2 rounded-sm bg-gradient-to-t from-yellow-400 to-yellow-200'>Login</button>
                  <div className='mr-16 flex items-center'>
                   <div>
                   <CheckBoxOutlineBlankIcon/><a>Keep me signed In.<a className='text-blue-500'>  Details </a> <ArrowDropDownIcon/></a>
                   </div>
                  </div>
                  <a className='font-bold'>OR</a><br/>
                  <a className='font-semibold ml-4'> Login with Google</a><br/>
                     <button onClick={()=> props.login()} className="bg-gradient-to-t from-yellow-400 to-yellow-200 flex items-center ml-28 space-x-1 px-4 border py-[6px] rounded-md">
                    <img className=" h-5 w-5" src="//heathmont.imgix.net/bitcasino/images/google-oauth2.svg?auto=compress,format" loading="lazy" />
                        <span>Google</span>
                </button> 
                <a className='text-sm '>-----------------New to Amazon?-----------------</a><br/>
                <button className='bg-gradient-to-t from-gray-300 to-gray-100 border border-black py-1 px-12 rounded-sm'>Create your Amazon account</button>
                </div>
                </div>

    </div>
  )
}
  )
}

export default LoginScreen