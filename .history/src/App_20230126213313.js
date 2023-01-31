import HomeScreen from "./screens/HomeScreen";
import { getAuth,GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
import app from  './lib/firebase'


function App() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  



  async function Signin(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }




  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
