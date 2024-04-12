import Navigation from "../features/navigation/Navigation";

function Header() {
  return (
    <div className="flex bg-secondary">
      <div>chaand | Suraj</div>
      <div>Search</div>
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
