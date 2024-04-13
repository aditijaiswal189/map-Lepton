import { useState } from "react";

function Navigation() {
  const [listOpen, setListOpen] = useState(true);
  function handleHamburger() {
    setListOpen(!listOpen);
  }
  return (
    <button onClick={handleHamburger}>
      {listOpen ? (
        <div>Menu</div>
      ) : (
        <div className="relative ">
          Menu
          <ul className="absolute right-0 top-14">
            <li>movies</li>
            <li>login</li>
            <li>map</li>
          </ul>
        </div>
      )}
    </button>
  );
}

export default Navigation;
