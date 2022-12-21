import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [coffes, setCoffes] = useState([]);

    useEffect(() => {
        fetch('./data.json')
          .then((res) => res.json())
          .then((data) => setCoffes(data))
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