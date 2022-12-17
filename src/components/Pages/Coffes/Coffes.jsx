import "./Coffes.css"
import { Link } from 'react-router-dom';


const Coffes = function ({ title, image, price }) {
  return (
       <div className="card">
       <Link to={`${title}`}>
        <img className="card-img" src={image}/>
      </Link>
       <div className="card-info">
        <p>{title}</p>
        <h2>{price}</h2>

        <Link to={`${title}`}>
        <button className="buy">Buy now</button>
        </Link>
        <button className="add-cart">Add to cart</button>

       </div>
       </div>
    );
};


export default Coffes;

