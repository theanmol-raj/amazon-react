import { getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import app from '../lib/firebase'

function Procced({user}) {
  const db  = getFirestore(app)
    const [uinfo ,setUinfo] = useState(null) ;

    async function getUserInfo(){
        
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