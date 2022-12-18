import "./Coffes.css"
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';


const Coffes = function ({ title, image, price }) {
  return (
    <Card style={{ width: '18rem'}}  className="card rounded mx-4 mb-4">
      
       <Link to={`${title}`}>
        <Card.Img className="card-img" src={image}/>
      </Link>

      <Card.Body>

      <Card.Title><h2 className="card-title">{title}</h2></Card.Title>

        <h3 className="card-price">{price}</h3>

        <Stack gap={3} className="col-md-6 mx-auto">
           <Link to={`${title}`}>
            <Button className="buy">Buy now</Button>
           </Link>

            <Button className="add-cart">Add to cart</Button>
        </Stack>

       </Card.Body>
    </Card>
    );
};


export default Coffes;

