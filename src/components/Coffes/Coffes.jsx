import "./Coffes.css"
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import React from "react";

const Coffes = function ({ id, title, image, price }) {

  return (
    <Card style={{ width: '15rem'}}  className="card rounded mx-2 mb-4">
        <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
        <Card.Img className="card-img" src={image}/>
     

      <Card.Body>

      <Card.Title><h2 className="card-title">{title}</h2></Card.Title>

        <h3 className="card-price"><span>U$S</span>{price}</h3>

       </Card.Body>
       </Link>
    </Card>
    );
};


export default Coffes;

