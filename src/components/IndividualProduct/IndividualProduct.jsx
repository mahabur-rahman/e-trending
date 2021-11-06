import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Modal, Button, Image } from "react-bootstrap";

const IndividualProduct = ({
  id,
  title,
  img,
  price,
  inCart,
  info,
  company,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card>
        <NavLink to={`/details/${id}`}>
          <Card.Img variant="top" src={`/${img}`} alt={title} />
        </NavLink>
        <Card.Body>
          <div className="d-flex align-items-center justify-between">
            <Card.Title
              style={{
                fontSize: ".9rem",
                color: "#000",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              {title}
            </Card.Title>
            <Card.Title
              style={{
                color: "#115147",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >{`${price}`}</Card.Title>
          </div>
        </Card.Body>
        {/* cart button */}
        <div className="cartBtn">
          <button
            disabled={inCart ? true : false}
            onClick={() => {
              console.log("product added to cart");
            }}
          >
            {inCart ? (
              <p disabled className="text-xl">
                In Cart
              </p>
            ) : (
              <FaCartPlus onClick={handleShow} />
            )}
          </button>
        </div>
      </Card>

      {/* modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={img}
            fluid
            style={{ height: "200px", width: "80%", margin: "1rem auto" }}
          />
          {info}
          <br />
          <br />
          <span className="text-4xl font-bold capitalize"> {price}</span>
          <br />
          <span className="text-3xl">{` Made By ${company}`}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

IndividualProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default IndividualProduct;
