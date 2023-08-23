import axios from "axios";
import { useState, useEffect } from "react";
import { Card, CardBody, CardTitle } from "react-bootstrap";

const ProductID = () => {
  const [ProductID, setProductID] = useState();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${Id}`);
  }, []);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Product ID</CardTitle>
          <h1>{ProductID}</h1>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductID;
