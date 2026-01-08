import "./SearchBar.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Find your favourite images..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}
