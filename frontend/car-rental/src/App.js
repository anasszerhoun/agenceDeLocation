import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Style/global.scss';
import './index.css';
import Home from "./Components/Home/Home";
import Login from "./Components/authentication/Login";
import Register from "./Components/authentication/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CarPreview from "./Components/Home/CarPreview";
import CheckoutPage from "./Components/Pay/CheckoutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carpreview" element={<CarPreview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pay" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
