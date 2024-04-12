import { useState } from "react";
import Navigation from "../features/navigation/Navigation";

function Header() {
  const [themeIcon, setThemeIcon] = useState(true);
  const [searchMovies, setSearchMovies] = useState("");
  function handleThemeIcon() {
    setThemeIcon(!themeIcon);
  }
  return (
    <div className="flex justify-between bg-primary p-4">
      <div className="flex gap-5">
        <div>
          <button
            onClick={handleThemeIcon}
            className="w-10 h-10 bg-secondary rounded-2xl"
          >
            {themeIcon ? "🌞" : "🌛"}
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchMovies}
            onChange={(e) => setSearchMovies(e.target.value)}
            className="rounded-lg text-stone-900"
          />
        </div>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
