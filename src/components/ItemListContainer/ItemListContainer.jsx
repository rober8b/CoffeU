import Coffes from "../Pages/Coffes/Coffes"
import "./ItemListContainer.css"

const ItemListContainer = function ({ list }) {
    return list.map(({ title, image, price }) => (
        <div className="item-list">
            <div className="item">
           <Coffes key={title} title={title} image={image} price={price}/>
           </div>
        </div>
    ));
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
  