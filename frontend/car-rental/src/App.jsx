import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import  Dashboard  from "./screens/dashboard/DashboardScreen";
import  PageNotFound  from "./screens/error/PageNotFound";
import Vehicles from "./screens/vehicles/VehiclesList";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Vehicles" element={<Vehicles/>} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === "light" ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;
