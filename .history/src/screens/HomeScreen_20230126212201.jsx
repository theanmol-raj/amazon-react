import React from 'react'
import Navbar from '../components/Navbar'
import banner from '../assets/banner.jpg'

function HomeScreen() {
  return (
    <div>
        <Navbar />
        <div className="bg-slate-200 pb-56 h-screen">
      <div className=" max-w-[90rem]  mx-auto relative ">
        <img className="" src={banner} />
        <div className=" absolute bg-gradient-to-t from-slate-200 to-transparent via-slate-200/50  bottom-0 z-10 w-full h-1/3 " />
      </div>
      <div className=" relative z-50">
        <div className="max-w-[90rem] -mt-80 z-50 ab  mx-auto gap-6 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {/* {products.map((item :any , index :number) => (<div>
            <Product
              showName 
              showPrice 
              name={item.title}
              price={item.price}
              imgURL={urlFor(item.mainImage)}
              slug={item.slug.current}
            />
          </div>) )}
           */}
          
          
          
          
        </div>
      </div>
      <div className=" flex overflow-x-scroll max-w-[110rem] mx-auto overflow-y-hidden p-4 space-x-2 ">
            
      </div>
    </div>
    </div>
  )
}

export default HomeScreen