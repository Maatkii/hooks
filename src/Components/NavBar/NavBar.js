import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import ReactStars from "react-stars";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = ({ setRatingChange, setSearchInput, ratingChange }) => {
  const ratingChanged = (rating) => {
    setRatingChange(rating);
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div>
      <Navbar
        className="bg-body-tertiary justify-content-between"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          backgroundColor: "black",
          backgroundAttachment: "inherit",
        }}
      >
        <Link to="/">HOME</Link>
        <Link to="/movie-details">Movie Details</Link>
        <Form inline>
          <InputGroup style={{ height: "1000", width: "1000" }}>
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
            <Col xs="auto">
              <Button type="HOME">HOME</Button>
            </Col>
          </InputGroup>
        </Form>
        <Form inline>
          <Row
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Col xs="auto">
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="search">Search</Button>
            </Col>
          </Row>
        </Form>
        <ReactStars
          count={5}
          value={ratingChange}
          onChange={ratingChanged}
          size={24}
          activecolor="#ffd700"
          edit={false}
        />
      </Navbar>
    </div>
  );
};

export default NavBar;
