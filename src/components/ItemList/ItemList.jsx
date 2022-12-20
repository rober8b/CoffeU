import Coffes from "../Coffes/Coffes"
import "./ItemList.css"
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';

const ItemList = function ({ list }) {
  console.log({list})
   return (
       <CardGroup className="card-group">
       {list.map(({ title, image, price }) => (
        <Col>
          <Coffes key={title} title={title} image={image} price={price}/>
        </Col>
   ))};
    </CardGroup>
   ) 
}

export default ItemList;


    // const [coffes, setCoffes] = useState([]);

    // const initialUrl = "https://api.npoint.io/9ff57e61c9e61ec6a599"
  
    // const fetchCoffes = (url) => {
    //   fetch(url)
    //   .then(response => response.json())
    //   .then(data => setCoffes(data))
    //   .catch(error => console.log(error))
    // }
  
    // useEffect(() => {
    //   fetchCoffes(initialUrl);
    // }, [])
  