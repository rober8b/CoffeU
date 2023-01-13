import React from 'react';
import '../../components/ItemCart/ItemCart.css';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className='itemCart'>
        <img src={product.image} alt={product.title}/>
        <div>
            <h3 style={{color: 'black'}}><b>{product.title}</b></h3>
            <p>quantity: <b>{product.quantity}</b></p>
            <p>price per unit: <b>u$s{product.price}</b></p>
            <p>subtotal: <b>u$s{product.price * product.quantity}</b></p>
            <button onClick={() => removeProduct(product.id)} className='btn-primary'>Delete</button>
        </div>
    </div>
  )
}

export default ItemCart;