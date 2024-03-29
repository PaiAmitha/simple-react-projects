import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
//import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Products from './components/Products';
import NoMatch from './components/NoMatch';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<React.Suspense fallback='Loading...'><LazyAbout/></React.Suspense>}/>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
          </Route>
          <Route path='users' element={<Users/>}>
          <Route path=':userID' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
          </Route>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </>
  );
}

export default App;
