import HomeScreen from "./screens/HomeScreen";
import { getAuth } from "firebase/auth";
import app from  './lib/firebase'
import { GoogleAuthProvider } from "firebase/auth";


function App() {
  const auth = getAuth(app);
  




  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
