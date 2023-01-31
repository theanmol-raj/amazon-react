import HomeScreen from "./screens/HomeScreen";
import { getAuth,GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
import app from  './lib/firebase'


function App() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  



  async function Signin(){
    await signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
  }).catch((error) => {
   
  });
  }




  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
