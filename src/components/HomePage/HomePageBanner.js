import React from "react";
import { Row } from "react-bootstrap";
import SearchCard from "./SearchCard";

const HomePageBanner = () => {

  return (
    <Row className="banner justify-content-center align-items-end position-relative">
      <h1 className="text-light text-center fw-bold text-uppercase p-2 mt-1">
          Book your dream place
      </h1>
      <SearchCard />    
    </Row>

  );
};

export default HomePageBanner;
