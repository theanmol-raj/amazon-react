import React from 'react'
import banner from '../assets/banner.jpg'
import Products from '../components/Products'

function HomeScreen() {
  return (
    <div>
        <div className="bg-slate-200 pt-24  pb-56 h-screen">
      <div className=" max-w-[90rem]  mx-auto relative ">
        <img className="" src={banner} />
        <div className=" absolute bg-gradient-to-t from-slate-200 to-transparent via-slate-200/50  bottom-0 z-10 w-full h-1/3 " />
      </div>
      <div className=" relative z-50">
        <div className="max-w-[90rem] -mt-80 z-50 ab  mx-auto gap-6 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <Products
              showName 
              showPrice 
              name="Shampoo"
              price={600}
              imgURL='https://www.kerastase.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-kerastase-master-catalog/default/dw8b13821b/2022/densifique/KER_00029/Densifique%20Bain%20Densite%CC%81%20Shampoo-2.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=80'
            />
          
          
          
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomeScreen