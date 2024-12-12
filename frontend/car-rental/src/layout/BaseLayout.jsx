import { Outlet,useLocation } from "react-router-dom";
import  Sidebar  from "../components/sidebar/Sidebar";

const BaseLayout = () => {
  const location = useLocation();
  return (
    <main className="page-wrapper">
      <Sidebar currentPath={location.pathname} />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;
