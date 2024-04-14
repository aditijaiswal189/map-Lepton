// import Navigation from "../features/navigation/Navigation";
import { useThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { isDarkMode, setIsDarkMode } = useThemeContext();

  // const [searchMovies, setSearchMovies] = useState("");
  function handleThemeIcon() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className="flex  justify-end bg-primary p-4 border-solid border-b-[1px] border-secondary ">
      <div className="flex gap-5">
        <div>
          <button
            onClick={handleThemeIcon}
            className="w-10 h-10 bg-secondary rounded-2xl"
          >
            {isDarkMode ? "🌞" : "🌛"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
