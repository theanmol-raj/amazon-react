import HomeScreen from "./screens/HomeScreen";
import { getAuth,GoogleAuthProvider ,onAuthStateChanged,signInWithPopup ,signOut } from "firebase/auth";
import app from  './lib/firebase'
import { useEffect, useState } from "react";


function App() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user,SetUser] = useState(()=> auth.currentUser) ;

  useEffect(()=>{
    onAuthStateChanged(auth , (u)=>{
      SetUser(null)
      if (u) {
        SetUser(u)
      }
    })
  } ,[])

  async function Signin(){
    await signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
  }).catch((error) => {
   
  });
  }


  async function Signout(){
    await signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }



  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
