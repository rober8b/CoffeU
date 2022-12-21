import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    
    const [coffes, setCoffes] = useState([]);

    // const [category] = useParams();

    useEffect(() => {
        fetch('https://api.npoint.io/f40275807b998402dbd2 ')
          .then((res) => res.json())
          .then((data) => setCoffes(data))
          .then()
          .catch((err) => console.log("ERR", err));
      }, []);
  
    return (
      <>
        <div className="container">
          <h1 style={{ textAlign: "center" }}> ItemListContainer </h1>
          <ItemList
            list={coffes}
          />
        </div>
      </>
      );
}

export default ItemListContainer

    // const fetchCoffes = (url) => {
    //       fetch(url)
    //       .then(response => response.json())
    //       .then(data => setCoffes(data))
    //       .catch(error => console.log(error))
    //     }