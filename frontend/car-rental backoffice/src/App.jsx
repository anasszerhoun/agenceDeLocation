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
import Login from "./screens/authentication/Login";
import { Navigate } from "react-router-dom";


function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token"); // Récupérer le token depuis le localStorage

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}


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
          <Route path="/" element={ localStorage.getItem("token") ? 
                        <Navigate to="/dashboard" /> : 
                        <Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
            <Route element={<BaseLayout />}>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vehicles"
              element={
                <ProtectedRoute>
                  <Vehicles />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vehicles/add"
              element={
                <ProtectedRoute>
                  <AddVehicule mode="add" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vehicles/edit"
              element={
                <ProtectedRoute>
                  <AddVehicule mode="edit" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admins"
              element={
                <ProtectedRoute>
                  <Admins />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admins/add"
              element={
                <ProtectedRoute>
                  <AddAdmin />
                </ProtectedRoute>
              }
            />
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