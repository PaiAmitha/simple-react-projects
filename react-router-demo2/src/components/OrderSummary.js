import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='confirm'>
      Order Confirmed!!🥳
    </div>
    <button className='go-home' onClick={() => navigate(-1)}>Go to Home 🐾</button>
    </>
  )
}

export default OrderSummary
