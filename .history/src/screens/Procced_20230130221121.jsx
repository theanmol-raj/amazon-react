import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import app from '../lib/firebase'

function Procced({user}) {
  const db  = getFirestore(app)
    const [uinfo ,setUinfo] = useState(null) ;

    async function getUserInfo(){
    const docRef = doc(db, "Users", user?.uid);
    const docSnap = await getDoc(docRef);
        console.log(docSnap.data())
    setUinfo(docSnap.data());
        
    }


    useEffect(()=>{
        getUserInfo()
    },[])
    return (
    <div className=' bg-black h-screen'>
      <div className=' max-w-7xl mx-auto  bg-red-500 h-screen'>
          <div className=' bg-yellow-500 hidden md:block h-52  w-52 border border-black' />
          <div className=' bg-white h-52 w-52 border border-black' />
          <div className=' bg-white h-52 w-52 border border-black' />

      </div>
    </div>
  )
}

export default Procced