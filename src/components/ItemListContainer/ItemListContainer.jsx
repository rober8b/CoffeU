
import { useEffect, useState } from "react";

function ItemListContainer ({coffes}){

    const [coffes, setCoffes] = useState([]);

    const initialUrl = "https://api.npoint.io/9ff57e61c9e61ec6a599"
    
    const fetchCoffes = (url) => {
      fetch(url)
      .then(response => response.json())
      .then(data => setCoffes(data))
      .catch(error => console.log(error))
    }
  
    useEffect(() => {
      fetchCoffes(initialUrl);
    }, [])
  
}

export default ItemListContainer