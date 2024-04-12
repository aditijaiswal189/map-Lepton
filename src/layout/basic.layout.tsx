import { Outlet } from "react-router-dom";

function BasicLayout() {
  return (
    <div>
      <header className="bg-primary">header here</header>
      <Outlet />
      <footer>footer here</footer>
    </div>
  );
}

export default BasicLayout;
