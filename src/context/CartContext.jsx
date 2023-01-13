import React, {useState, useContext, useEffect} from 'react'

export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartLS = JSON.parse(localStorage.getItem('cart')) ?? [];
        setCart(cartLS);
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    console.log('cart: ', cart)

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
            }));
        } else{
            setCart([...cart, {...item, quantity}])
        }
    } 

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acum, productAct) => acum + productAct.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.some(product => product.id===id);

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id ));


  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;