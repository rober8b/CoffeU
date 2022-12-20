import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemDetailContainer.css'

const ItemListContainer = () => {

    const [coffes, setCoffes] = useState([]);

    useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(data => setCoffes(data))
      .catch(error => console.log(error))
    } , []);
}

export default ItemDetailContainer