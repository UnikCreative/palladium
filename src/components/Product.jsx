import axios from "axios";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

//uselocation

const Product = () => {
  // api call with axios
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


    // add to cart
    // const addToCart = (product) => {
    //     dispatch(add(product))

  //map throw card

  const card = products.map(product => (
    
    <div className="col-md-3" style={{marginBottom : "10px"}}>
    
    <Link to={`/product/${product.id} `}>
    <Card key={product.id} style={{ width: '18rem', height : "25rem", overflow : "hidden" }}>
        <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width : '100px', height : '130px' }}  />
        </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         N {product.description}

        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    <br />
      <Card.Footer>
       

    </Card.Footer>
    </div>
    
  ))

  return (
    <div className="row">
    <h1>Dashboard</h1>
      {card} 
    </div>
  );
};

export default Product;
