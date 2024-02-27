import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <>
    <div>
      <input type='search' placeholder='🔍 Search Products' className='search'/>
    </div>
    <nav className='product-nav'>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Products
