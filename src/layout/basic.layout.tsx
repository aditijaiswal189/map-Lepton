import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

function BasicLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>footer here</footer>
    </div>
  );
}

export default BasicLayout;
