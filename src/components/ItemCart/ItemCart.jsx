import React from 'react';
import '../../components/ItemCart/ItemCart.css';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className='itemCart'>
        <img src={product.image} alt={product.title}/>
        <div>
            <p>title: {product.title}</p>
            <p>cantidad: {product.quantity}</p>
            <p>precio c/u: {product.price}</p>
            <p>subtotal: {product.price * product.quantity}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart;