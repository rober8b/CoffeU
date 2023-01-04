import Coffes from "../Coffes/Coffes"
import "./ItemList.css"
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';

const ItemList = function ({ list }) {

     return (
       <CardGroup className="card-group">    
       {list.map(({ title, image, price, category }) => (
        <Col key={title}>
          <Coffes  title={title} image={image} price={price} category={category} />
        </Col>
   ))}
    </CardGroup>
   ) 
}

export default ItemList;
