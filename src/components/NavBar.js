import React from "react";
import { BsHouseFill } from "react-icons/bs";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar className="justify-content-center">
        <Navbar.Brand className="d-flex align-items-center">
          <h2><BsHouseFill className="mx-1" /></h2>
          BOOKING
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default NavBar;
