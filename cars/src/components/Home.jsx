//import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ListCars from "./ListCars";
import NewCarsModal from "./NewCarsModal";
import  {useAppContext}  from "../context/AppContext";

const Home = () => {
  const { cars } = useAppContext();
  // console.log(cars, "cars in home")

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <ListCars cars={cars} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewCarsModal create={true} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
