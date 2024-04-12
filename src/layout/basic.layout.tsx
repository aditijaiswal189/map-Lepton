import { Outlet } from "react-router-dom";

function BasicLayout() {
  return (
    <div>
      <header>header here</header>
      <Outlet />
    </div>
  );
}

export default BasicLayout;
