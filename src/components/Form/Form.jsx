import React, { useState }  from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../context/CartContext';
import swal from 'sweetalert';
import './Form.css'

const Form = () => {
  const { cart, totalPrice } = useCartContext();

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputAddress, setInputAddress] = useState("");

    const showAlert = () => {
     swal({
     title: "Thanks!",
     text: 'Check your email to see your order',
     icon: 'success'
     })}
  
  const createOrder = async (e) => {
     e.preventDefault();
     e.target.reset()
     const Order = {
        name: inputName,
        email: inputEmail,
        phone: inputPhone,
        adress: inputAddress,
        items: cart.map(product => ({ id:product.id, title:product.title, price:product.price, quantity:product.quantity })),
        total: totalPrice()
     }
     console.log(Order)
     const id = await handleClick(Order)
     console.log("ID ORDER:", id)
     showAlert()
   };

  const handleClick = async (Order) => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    const result = await addDoc(ordersCollection, Order);
    return result.id
  } 

  return (
    <section className='section-form'>
    <form onSubmit={createOrder}>
        <div className="title-order"><h2>Let's create your order!</h2></div>
        <input 
        type="text"
        placeholder='Name'
        onChange={(e) => setInputName(e.target.value)}
        value={inputName}
        />
        <input 
        type="text"
        placeholder='Email'
        onChange={(e) => setInputEmail(e.target.value)}
        value={inputEmail} 
        />
        <input 
        type="text"
        placeholder='Phone'
        onChange={(e) => setInputPhone(e.target.value)}
        value={inputPhone} 
        />
        <input 
        type="text"
        placeholder='Address'
        onChange={(e) => setInputAddress(e.target.value)}
        value={inputAddress} 
        />
         <input
                            type="submit"
                            value="Buy"
                            className="submit btn-primary"
                        />
        {/* <button onClick={handleClick} type="text" className='submit btn-primary'>submit</button> */}
    </form>
    </section>
  )
}

export default Form;