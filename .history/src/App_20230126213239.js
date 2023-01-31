import HomeScreen from "./screens/HomeScreen";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import app from  './lib/firebase'


function App() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  




  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
