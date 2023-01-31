import React from 'react'


function Products({imgURL,id , name , price ,showPrice ,showName ,slug , ...props}){

    function truncate(description  , n ){
      return description?.length > n ? description.substr(0,n) +" . . ." : description ;
    }
    return (
      <div className=' bg-white justify-center flex flex-col pt-4  rounded-xl'>
        <a href={`/product/${id}`}>
        <img className=' max-h-72 object-cover' src={imgURL} alt={name} />
          {showName && <p className=' text-xl font-bold px-4 border-t'>{truncate(name ,25)}</p>}
          {showPrice && <p className=' text-lg px-4 font-semibold text-gray-600'>Price : Rs. {price}</p>}
          
          
        </a>
         
      </div>
    )
  }

export default Products