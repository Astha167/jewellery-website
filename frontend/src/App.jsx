import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart"; // Import Cart component
import bannerrings from "./assets/bannerrings.png"
import bannerearrings from "./assets/bannerearrings.png"
import bannerbangles from "./assets/bannerbangles.png"
import bannernecklace from "./assets/bannernecklace.png"


export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rings" element={<Category category="rings" banner={bannerrings} />} />  
          <Route path="/Earrings" element={<Category category="earrings" banner={bannerearrings}/>} />  
          <Route path="/Bangles" element={<Category category="bangles" banner={bannerbangles}/>} />  
          <Route path="/Necklace" element={<Category category="necklace" banner={bannernecklace}/>} />  
          <Route path="/product" element={<Product />}>  {/* Parent route for Product */}
            <Route path=":productID" element={<Product />} />  {/* Nested route for individual product */}
          </Route>
          <Route path="/cart-page" element={<Cart />} />  {/* Unique path for Cart */}
          <Route path="/login" element={<Login />} />  {/* Unique path for Login */}
        </Routes>

      </BrowserRouter>
    </main>
  );
}