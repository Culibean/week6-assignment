import "./App.css";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <Header />
      <NavBar />
      <SearchBar />
      <Gallery />
    </>
  );
}
