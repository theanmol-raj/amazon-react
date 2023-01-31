import HomeScreen from "./screens/HomeScreen";
import { getAuth,GoogleAuthProvider ,onAuthStateChanged,signInWithPopup ,signOut } from "firebase/auth";
import app from  './lib/firebase'
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";
import { Routes ,Route } from "react-router-dom";
import ProductAdder from "./screens/ProductAdder";
import { doc, getDoc ,getFirestore } from "firebase/firestore";

function App() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const db= getFirestore(app)
  const [user,SetUser] = useState(()=> auth.currentUser) ;

  async function checkFirstTime(){
    const docRef = doc(db, "Users", user?.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      
    } 
  }






  useEffect(()=>{
    onAuthStateChanged(auth , (u)=>{
      SetUser(null)
      if (u) {
        SetUser(u);
        checkFirstTime();
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
      <Navbar user={user} signout={Signout} />
     <Routes>
      <Route path="/" element={user ? <HomeScreen /> : <LoginScreen login={Signin} />} />
      <Route path="/product/:slug" element={<ProductScreen />} />
      <Route path="/admin/add-product" element={<ProductAdder />} />

     </Routes>
      
    </div>
  );
}

export default App;
