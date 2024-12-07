import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Style/global.scss';
import './index.css';
import Home from "./Components/Home/Home";
import Login from "./Components/authentication/Login";
import Register from "./Components/authentication/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
