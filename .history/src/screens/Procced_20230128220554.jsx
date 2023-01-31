import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import app from '../lib/firebase'

function Procced({user}) {
  const db  = getFirestore(app)
    const [uinfo ,setUinfo] = useState(null) ;

    async function getUserInfo(){
    const docRef = doc(db, "Users", user?.uid);
    const docSnap = await getDoc(docRef);

    setUinfo(docSnap.data());
        
    }


    useEffect(()=>{
        getUserInfo()
    },[])
  
    console.log(uinfo)
    return (
    <div>

    </div>
  )
}

export default Procced