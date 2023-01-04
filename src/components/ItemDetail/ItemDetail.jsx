import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import React, {useState} from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'


const ItemDetail = ({ product }) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();


  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(product, quantity)
  }

    return (
      <>
        <div className="container-description">
        <img className="description-img" src={ product.image} alt={ product.title} />
           <div className="description-detail">
              <h2>{ product.title}</h2>
              <p>{ product.description}</p>
              <p className="ingredients">Ingridients:
                <br />
              { product.ingredients}
              </p>
              <h2><span>us</span>{ product.price}</h2>
              {
                goToCart
                     ? <Link to='/cart' className="btn-finish" style={{ textDecoration: 'none' }}>Go to cart</Link>
                     :  <ItemCount initial={1} stock={5} onAdd={onAdd} />
              }
           </div>
        </div>
      </>
    );
  };

export default ItemDetail;
