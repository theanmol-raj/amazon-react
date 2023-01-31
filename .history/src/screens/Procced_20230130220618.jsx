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
      <div className=' max-w-7xl mx-auto bg-red-500 h-full'>

      </div>
    </div>
  )
}

export default Procced