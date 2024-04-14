import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

function BasicLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      
    </div>
  );
}

export default BasicLayout;
