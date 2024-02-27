import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
    <div>
      And I can still see it all.. 💕
    </div>
    <button className='order' onClick={() => navigate('order-summary', {replace :true})}>Place Order</button>
    </>
  )
}

export default Home
