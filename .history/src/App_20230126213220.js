import HomeScreen from "./screens/HomeScreen";
import { getAuth } from "firebase/auth";
import app from  './lib/firebase'


function App() {
  const auth = getAuth(app);
  import { GoogleAuthProvider } from "firebase/auth";




  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
