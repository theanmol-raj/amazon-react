import React from 'react'


function Products({imgURL , name , price ,showPrice ,showName ,slug} : any) {

    function truncate(description :string , n : number){
      return description?.length > n ? description.substr(0,n) +" . . ." : description ;
    }
    return (
      <div className=' bg-white justify-center flex flex-col pt-4  rounded-xl'>
        <Link  href={`/product/${slug}`}>
        <img className=' max-h-72 object-cover' src={imgURL} alt={name} />
          {showName && <p className=' text-xl font-bold px-4 border-t'>{truncate(name ,25)}</p>}
          {showPrice && <p className=' text-lg px-4 font-semibold text-gray-600'>Price : Rs. {price}</p>}
          
          
        </Link>
         
      </div>
    )
  }

export default Products