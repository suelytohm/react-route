import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";


// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
        <h1>React Router</h1>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<Product />} />


            <Route path="*" element={<NotFound />} />

          </Routes>
          <Footer />
        </BrowserRouter>



    </div>
  );
}

export default App;