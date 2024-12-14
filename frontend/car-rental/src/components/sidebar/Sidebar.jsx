import { useContext, useEffect, useRef } from "react";
import {
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineSettings,
} from "react-icons/md";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { IoCarSport } from "react-icons/io5";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = ({currentPath}) => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
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
