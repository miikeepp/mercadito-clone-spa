import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative flex items-center w-full">
      <input
        type="text"
        placeholder="Buscar productos, marcas y más..."
        className={`w-full h-10 pl-4 pr-12 rounded-sm text-base bg-card text-foreground placeholder:text-muted-foreground outline-none transition-shadow duration-200 ${
          focused ? "shadow-meli-md ring-2 ring-accent ring-offset-1" : "shadow-meli-sm"
        }`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <button
        className="absolute right-0 top-0 h-10 w-10 grid place-items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
        aria-label="Buscar"
      >
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchBar;
