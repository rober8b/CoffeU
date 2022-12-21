import { useParams } from "react-router-dom";
import "./ItemDetail.css"

const ItemDetail = ({ data }) => {
    let { id } = useParams(); 
    // const type = useLocation().pathname.split("/")[1]; 
    // const items = data[type]; 
    const item = data.Coffes.find((item) => item.id === id); 
    return (
      <>
        <div className="container-description">
        <img className="description-img" src={item.image} alt={item.title} />
           <div className="description-detail">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p className="ingredients">Ingridients:
                <br />
              {item.ingredients}
              </p>
              <h2><span>us</span>{item.price}</h2>
            <button className="add-cart_detail">Add to cart</button>
           </div>
        </div>
      </>
    );
  };

export default ItemDetail;
