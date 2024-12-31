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
import Admins from "./screens/admins/AdminsList";
import AddVehicule from "./screens/vehicles/AddVehicule";
import AddAdmin from "./screens/admins/addAdmin";

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vehicles" element={<Vehicles/>} />
            <Route path="/vehicles/add" element={<AddVehicule mode="add"/>} />
            <Route path="/vehicles/edit" element={<AddVehicule mode="edit"/>} />
            <Route path="/admins" element={<Admins/>} />
            <Route path="/admins/add" element={<AddAdmin/>} />
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
            alt=""
          />
        </button>
      </Router>
    </>
  );
}
export default App;
