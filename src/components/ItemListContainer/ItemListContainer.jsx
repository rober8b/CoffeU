
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import  { getProducts } from "../Functions/Functions";
import ProgressBar from 'react-bootstrap/ProgressBar';


const ItemListContainer = () => {
    
    const [coffes, setCoffes] = useState([]);

    const [loading, setLoading] = useState(true);

    let { category } = useParams();

    useEffect(() => {
      getProducts(category)
          .then((data) => setCoffes(data))
          .catch((err) => console.log("ERR", err))
          .finally(() => setLoading(false));
      }, [category]);
  
    return (
      <>
        <div className="ItemListcontainer">
        {loading ? (
          <ProgressBar now={50} className="mb-5" />
        ) : coffes.length > 0 ? (
          <ItemList list={coffes} />
        ) : (
          <h1>Productos no encontrados</h1>
        )}
        </div>

      </>
      );
}

export default ItemListContainer
