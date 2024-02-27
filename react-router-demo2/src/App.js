import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Products from './components/Products';
import NoMatch from './components/NoMatch';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='products' element={<Products/>}>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
          </Route>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </>
  );
}

export default App;