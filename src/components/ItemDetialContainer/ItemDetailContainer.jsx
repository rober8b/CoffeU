import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
       const querydb = getFirestore();
       const queryDoc = doc(querydb, 'Coffes', id);
       getDoc(queryDoc)
       .then(res => setProduct({id: res.id, ...res.data()}))
    }, [id])

 

  return (
    <>
      <div className="detail-container">
      <ItemDetail product={product} />
      </div>
    </>
  );
};

export default ItemDetailContainer;



 // useEffect(() => {
  //   getProductById(id)
  //     .then((product) => setProduct(product))
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // }, [id]);


   /* {loading ? (
          <ProgressBar now={70} className="mb-5" />
        ) : product ? (
          <ItemDetail key={product.id} product={product} />
        ) : (
          <h1>Producto no encontrado</h1>
        )} */