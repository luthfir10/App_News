import React from "react";
import { Col } from "react-bootstrap";

function Detail() {
  const title = localStorage.getItem("title");
  const description = localStorage.getItem("description");
  const content = localStorage.getItem("content");
  const urlToImage = localStorage.getItem("urlToImage");
  return (
    <>
      <Col md="auto">
        <img className="d-block w-100" src={urlToImage} alt="First slide" />
        <h3>{title}</h3>
        <br />
        <h4>{description}</h4>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Col>
    </>
  );
}

export default Detail;
