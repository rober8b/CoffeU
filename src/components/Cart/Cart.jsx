import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0){
    return (
      <>
       <div className="container"  style={{ minHeight: '80vh' }}>
        <p>You have no items in the cart</p>
        <Link to='/'>Keep Buying</Link>
        </div>
      </>
    )
  }

  return (
    <> 
    <div className="container"  style={{ minHeight: '80vh' }}>
        {
          cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <h2 style={{margin:'1em', color: 'black', }}>
          <b> Total: <span style={{color: 'grey', fontSize:'20px'}}>u$s</span>{totalPrice()} </b>
        </h2>
        <Link to='/form' className='btn-primary' style={{ textDecoration: 'none' }}>Finish</Link>
    </div>
    </>
  )
}

export default Cart;
