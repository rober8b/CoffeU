
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {  
    const [coffes, setCoffes] = useState([]);

    let { category } = useParams();
    
    useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'Coffes');
      if (category){
        const queryFillter = query(queryCollection, where('category', '==', category))
        getDocs(queryFillter)
        .then(res => setCoffes( res.docs.map(product => ({id: product.id, ...product.data() }))))
      } else {
        getDocs(queryCollection)
        .then(res => setCoffes( res.docs.map(product => ({id: product.id, ...product.data() }))))
      }
    }, [category])

    return (
      <>
        <div className="ItemListcontainer">
        <ItemList list={coffes} />
        </div>

      </>
      );
}

export default ItemListContainer


    // useEffect(() => {
    //   getProducts(category)
    //       .then((data) => setCoffes(data))
    //       .catch((err) => console.log("ERR", err))
    //       .finally(() => setLoading(false));
    //   }, [category]);
  
     /* {loading ? (
          <ProgressBar now={50} className="mb-5" />
        ) : coffes.length > 0 ? (
          <ItemList list={coffes} />
        ) : (
          <h1>Productos no encontrados</h1>
        )} */