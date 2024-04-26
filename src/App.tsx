
import "./App.css";
import NavBar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductCard2 from "./components/ProductCard"


const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-auto flex-col items-center align-middle justify-center  h-full w-full">
        <ProductCard />
        <ProductCard2 />
       
      </div>
    </div>
  );
};

export default App;
