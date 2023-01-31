import React, { useState } from 'react'
import { getFirestore ,collection, addDoc  } from "firebase/firestore";
import app from '../lib/firebase'

function ProductAdder() {
  const db = getFirestore(app)
    const schema = {
        name : "" ,
        title : "" ,
        seller : "",
        price : "",
        desc: ""

    }


    const [prod ,setProd] = useState(schema)


    function Handler(e){
        const {name ,value} = e.target ;
        setProd(prev => ({...prev , [name] : value}))
    }

    

     async function AddProduct(){
      await addDoc(collection(db, "cities"), prod).then(()=>{

      }).catch(()=>{
        
      }).finally(()=>{
        setProd(schema)
      })
    }



  return (
    <section class="text-gray-600 body-font relative bg-[#131921]">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-300">
              Product Form
            </h1>
            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Product Name
                  </label>
                  <input
                    onChange={Handler}
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Title
                  </label>
                  <input
                    type="email"
                    onChange={Handler}
                    id="title"
                    name="title"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Price
                  </label>
                  <input
                    type="email"
                    onChange={Handler}
                    id="price"
                    name="price"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Seller
                  </label>
                  <input
                  onChange={Handler}
                    type="email"
                    id="seller"
                    name="seller"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Discription
                  </label>
                  <textarea
                  onChange={Handler}
                    id="desc"
                    name="desc"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              <div class="p-2 w-full">
                <button onClick={()=>AddProduct()} class="flex mx-auto text-white  bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProductAdder