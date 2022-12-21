import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Functions/Functions";
import ItemDetail from "../ItemDetail/ItemDetail";
import ProgressBar from 'react-bootstrap/ProgressBar';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((product) => setProduct(product))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <div className="detail-container">
        {loading ? (
          <ProgressBar now={70} className="mb-5" />
        ) : product ? (
          <ItemDetail key={product.id} product={product} />
        ) : (
          <h1>Producto no encontrado</h1>
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;