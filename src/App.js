import "./App.css";
import {
  BrowserRouter as Router,
  useLocation,
  Routes,
  Route,
} from "react-router-dom";
import First from "./components/First";
import { useState } from "react";
import Second from "./components/Second";

function App() {
  let location = useLocation();
  const [name, setName] = useState();

  return (
    <div className="App">
      <div style={{ height: "100vh" }}>
        <Routes location={location} key={location.key}>
          <Route exact path="/second" element={<Second name={name} />} />
          <Route exact path="/" element={<First setName={setName} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
