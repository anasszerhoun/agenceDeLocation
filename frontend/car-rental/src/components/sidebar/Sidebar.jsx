import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
// import { LIGHT_THEME } from "../../constants/themeConstants";
// import Logo from "../../assets/images/logo.svg";
import {
  MdCarRental,
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineElectricCar,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";
import { IoCarSport } from "react-icons/io5";

const Sidebar = ({currentPath}) => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          {/* <img src={theme === LIGHT_THEME ? Logo : Logo} alt="" /> */}
          <span className="sidebar-brand-text">CARSRENTAL</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/Dashboard" className={currentPath === '/Dashboard' ? 'menu-link active' : 'menu-link'}>
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/Vehicles" className={currentPath === '/Vehicles' ? 'menu-link active' : 'menu-link'}>
                <span className="menu-link-icon">
                  <IoCarSport size={20} />
                </span>
                <span className="menu-link-text">Vehicles</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/Statistics" className={currentPath === '/Satistics' ? 'menu-link active' : 'menu-link'}>
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Statistics</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className={currentPath === '/settings' ? 'menu-link active' : 'menu-link'}>
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className={currentPath === '/logout' ? 'menu-link active' : 'menu-link'}>
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
