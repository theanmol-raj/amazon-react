import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import app from '../lib/firebase'

function Procced({user}) {
  const db  = getFirestore(app)
    const [uinfo ,setUinfo] = useState(null) ;

    async function getUserInfo(){
    const docRef = doc(db, "Users", user?.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("working")
    } 
    else{
      await setDoc(doc(db, "Users", user?.uid), { name : user.displayName ,email : user?.email , cart : [] ,id  : user?.uid}).then(()=>{
        console.log("user made")
      }).catch((err)=> console.log(err))
    }
    }


    useEffect(()=>{
        getUserInfo()
    },[])
  
  
    return (
    <div>

    </div>
  )
}

export default Procced