import "./CartNav.css"
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { totalProducts } = useCartContext();

    return(
    <div className="cart-container">
        <img  className="cart-img" src="https://res.cloudinary.com/dx719oxg1/image/upload/v1671291982/shopping-cart_mgb5kq.png" />
        <b className="cart-number">
            {totalProducts() || ''}
        </b>
    </div>
    );
};

export default CartWidget;