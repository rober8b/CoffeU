import { useLocation, useParams } from "react-router-dom";
import "./ItemDetail.css"

const ItemDetail = ({ data }) => {
    let { title } = useParams(); // name is the name of the movie or series
    const type = useLocation().pathname.split("/")[1]; // type is the type of the movie or series
    const items = data[type]; // items is the array of movies or series
    const item = items.find((item) => item.title === title); // item is the movie or series with the name
    return (
      <>
        <div className="container-description">
        <img className="description-img" src={item.image} />
           <div className="description-detail">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Ingridients:
                <br />
              {item.ingredients}
              </p>
              <h2>{item.price}</h2>
            <button className="add-cart_detail">Add to cart</button>
           </div>
        </div>
      </>
    );
  };

export default ItemDetail;
