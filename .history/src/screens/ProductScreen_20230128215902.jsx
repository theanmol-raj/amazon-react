import React from 'react'
import { useParams } from 'react-router-dom';
import { doc, updateDoc, arrayUnion, arrayRemove ,getFirestore } from "firebase/firestore";
import app from '../lib/firebase';


function ProductScreen({user}) {
  const db = getFirestore(app)



  const {slug} = useParams();
    const product = {
        price : 600 ,
        title : "Shampoo" ,
        seller: "Anmol"

    }
    const disper = Math.round(Math.random() * 20) ;

    const newPrice = product.price * (1 - (disper *0.01))

    async function AddtoCart(){
      const user = doc(db, "Users", user?.uid);
      await updateDoc(washingtonRef, {
        regions: arrayUnion("greater_virginia")
    });
    }


    
  return (
    <div className=' pt-32'>
      <div className=''>
          <div className='max-w-[90rem] mx-auto grid  lg:grid-cols-2  md:grid-cols-1'>
            {/* 1st img div */}
            <div className='ml-[60px] mr-10'>
              <img className='h-[650px] w-[500px]' src='https://www.kerastase.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-kerastase-master-catalog/default/dw8b13821b/2022/densifique/KER_00029/Densifique%20Bain%20Densite%CC%81%20Shampoo-2.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=80'/>
            </div>
            {/* midddle div content */}
            <div className='flex ml-0 pb-4'>
              {/* share icon */}
              <div className='absolute top-50 left-[600px] text-center 
                border-2 border-solid border-grey-600 rounded-full bg-white text-xl '>
               {/* <IosShareIcon className='' fontSize='inherit'/> */}
              </div>
              {/* product details  */}
              <div >
                {/* product details div 1 */}
               <div className='border-b-[1px] border-gray-400 ' >
                <a>
                 <h2 className='text-2xl font-medium'>
                  {product.title}
                 </h2>
                </a>
                <a className='text-sm text-teal-600 hover:cursor-pointer hover:underline'>
                  Visit the {product.seller} Store
                </a>
                {/* ratings div */}
                <div className='flex space-x-4 mb-0'>
                 <div>
                  {/* <StarRateIcon fontSize='inherit'/>
                  <StarRateIcon fontSize='inherit'/>
                  <StarRateIcon fontSize='inherit'/>
                  <StarRateIcon fontSize='inherit'/>
                  <StarHalfIcon fontSize='inherit'/>
                  <KeyboardArrowDownIcon fontSize='inherit'/> */}
                 </div>
                 <div className='text-sm text-teal-600'>
                  <a className='space-x-1 -mt-2'>
                   <span className='text-grey-600 text-sm hover:cursor-pointer hover:underline'>2,499 ratings</span>
                   <span className='text-grey-600 text-sm '>|</span>
                   <span className='text-grey-600 text-sm hover:cursor-pointer hover:underline'>220 answered questions </span>
                  </a>
                 </div>
                </div>
                </div>
                
              
              {/* product details div 2 */}
              <div className='mt-5 space-x-1 border-b-[1px] border-gray-400 pb-2'>
                <p className='text-red-600 font-semibold'>Republic Day Sale</p>
                <p className='text-2xl text-red-600 '>{disper}% <span className='text-3xl text-black -mt-4'>₹ {newPrice}</span></p>
                <p className='text-slate-600 text-sm'>M.R.P.:₹ {product.price}</p>
                <p className='text-sm'>Inclusive of all taxes</p>
                <p><span className='font-bold text-sm'>EMI</span> starts at ₹1,576. No Cost EMI available </p>
              </div>

              {/*product details div 3  */}
              <div className='border-b-[1px] border-gray-400 pb-2 mt-3'>
                <p className='font-bold text-sm'>Eligible for Free Open Box Inspection </p>
                <table className='mt-2 text-sm'>
                  <tbody>
                    {/* row1 */}
                    <tr>
                      <td className='font-bold text-sm'> Brand</td>
                      <td>LG</td>
                    </tr>
                    {/* row2 */}
                    <tr>
                      <td className='font-bold text-sm'> Product Dimensions</td>
                      <td>55D x 60W x 85H Centimeters</td>
                    </tr>
                    {/* row3 */}
                    <tr>
                      <td className='font-bold text-sm'>Capacity</td>
                      <td>8 Kilograms</td>
                    </tr>
                    {/* row4 */}
                    <tr>
                      <td className='font-bold text-sm'>  Special Feature</td>
                      <td>Inverter, Child Lock, Hygiene Steam, 6 Motion DD, Tub Clean, Inbuilt Heater</td>
                    </tr>
                    {/* row5 */}
                    <tr>
                      <td className='font-bold text-sm'> Access Location</td>
                      <td>Front Load</td>
                    </tr>
                  </tbody>
                </table>
              </div>


              {/* about the items details div */}
              <div className='text-sm mt-4 space-y-2 border-b-[1px] border-gray-400 pb-2'>
                <p className='font-bold text-base'>About this item</p>
                <ul className='space-y-1'>
                  <li>Fully-automatic front load washing machine: best wash quality, energy and water efficient</li>
                  <li>Capacity 8 kg: Suitable for large families</li>
                  <li>Energy Rating 5 Star: Best in class efficiency</li>
                  <li>Manufacturer Warranty: 2 years on product, 10 years on motor (T&C)</li>
                  <li>1400 RPM: higher spin speeds helps in faster drying</li>
                  <li>10 washing programs: Cotton, Cotton Large, Mix, Easy Care, Baby Care, Sports Wear, Delicate, Wool, Quick 30, Rinse+Spin</li>
                  <li>LG Inverter Direct Drive Technology- The drum and motor are connected directly which leads to less noise & vibration and, more durability</li>
                </ul>
              </div>

              </div>

              {/* 3rd div */}
            <div className='w-[1000px] h-max mx-4 border-slate-300 border-[1px] border-solid rounded-t-lg '>
              {/* 1st div */}
                <div className='bg-slate-100  border-slate-300 border-b-[1px] border-solid rounded-t-lg px-8 py-2'>
                  <div className='flex space-x-2 text-sm font-bold'>
                  <input type={'radio'} value='With Exchange' name='exchange'/>
                  <p>With Exchange</p>
                  </div>
                <p className='pl-6 text-sm  text-red-700'>Upto ₹ 2,000 off</p>
                </div>
                     
                     {/* 2nd div */}
                <div className=' px-8 py-2 text-sm' >
                 
                  <div className='flex space-x-2 text-sm font-bold'>
                  <input type={'radio'} value='With Exchange' name='exchange'/>
                  <p>Without  Exchange</p>
                  </div>
                 <p className='pl-6 text-sm  text-red-700'>Upto ₹ 32,000 off 
                   <span>₹ 42,999</span>
                 </p>
                 <p className='pt-2 font-semibold'>
                   FREE scheduled delivery as soon as <span className='font-bold'>Tuesday, 24 January,7 AM - 3 PM</span>. Order within 1 hr 6 mins.
                 </p>

                 <div className='mt-4 '>
                   <a className='text-xl text-teal-800'>
                    {/* <LocationOnIcon className='-mt-1 text-black' fontSize='inherit' /> */}
                   <span className='hover:cursor-pointer hover:underline text-xs'> Select delivery location </span>
                   </a>
                 </div>
                 
                 <div className='mt-4 space-y-3' >
                   <p className='text-green-800 font-semibold text-xl'>In Stock.</p>
                   <p>Sold by 
                     <a className='text-cyan-700 hover:underline'>  DAWNTECH ELECTRONICS PRIVATE LIMITED  </a>  
                       and 
                     <a className='text-cyan-700 hover:underline'> Fulfilled by Amazon. </a> 
                    </p>
                 </div>

                 <div className='mt-4 flex-col space-y-4 items-center'>
                   <div>
                   <button className='bg-yellow-400 rounded-lg px-10 py-2'>Add to Cart</button>
                   </div>
                   <div>
                   <button className='bg-yellow-400 rounded-lg px-12 py-2'> Buy Now</button>
                   </div>
                 </div>

                </div>
                
               
              </div>
            </div>

            
            
           
            
            
              
            
         
        </div>
        </div>
    </div>
  )
}

export default ProductScreen