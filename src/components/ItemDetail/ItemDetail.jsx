import { useParams } from "react-router-dom";
import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
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
            <button className="add-cart_detail">Add to cart</button>
           </div>
        </div>
      </>
    );
  };

export default ItemDetail;
