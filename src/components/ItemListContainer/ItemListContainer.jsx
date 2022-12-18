import Coffes from "../Pages/Coffes/Coffes"
import "./ItemListContainer.css"
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';

const ItemListContainer = function ({ list }) {
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

export default ItemListContainer;


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
  