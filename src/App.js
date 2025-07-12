import logo from './logo.svg';
import './App.css';
import MarcineFishNavbar from './components/navbar';
import ImageSlider from "./components/ImageSlider";
import ProductCards from './components/ProductSection';
function App() {
  return (
    <div className="App">
      <MarcineFishNavbar />  {/* La navbar est maintenant intégrée ici */}
      <main>
         <ImageSlider />
         <ProductCards />
      </main>
    </div>
  );
}

export default App;
