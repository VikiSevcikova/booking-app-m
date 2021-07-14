import axios from "axios";
import React, { useState, useContext } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { PlacesContext } from "../../context/PlacesContext";
import "react-datepicker/dist/react-datepicker.css";

const SearchCard = () => {
  const placesContext = useContext(PlacesContext);
  const { placesState, placesDispatch } = placesContext;
  const { loading } = placesState;

  const today = new Date();
  const tomorrow = new Date(new Date().setDate(today.getDate() + 1));

  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const fetchData = async (e) => {
    e.preventDefault();
    if (!location || location === null || location === "") {
      placesDispatch({
        type: "CHANGE_ALERT_MESSAGE",
        payload: {title: "Wrong Input", message:"Please add location."},
      });
      placesDispatch({ type: "SHOW_ALERT" });
      return;
    }
    if (checkIn >= checkOut) {
      placesDispatch({
        type: "CHANGE_ALERT_MESSAGE",
        payload: {title: "Wrong Input", message: "Check out date has to be bigger than check in date."},
      });
      placesDispatch({ type: "SHOW_ALERT" });
      return;
    }

    setGlobalVariables();

    let formatedCheckIn = checkIn.toISOString().slice(0, 10);
    let formatedCheckOut = checkOut.toISOString().slice(0, 10);
    const locationUrl = `https://hotels4.p.rapidapi.com/locations/search?query=${location}`;
    try {
      placesDispatch({type: "LOADING"});
      //get the destinationID
      let locationData = await axios.get(locationUrl, {
        headers: { "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST
      }});
      let destinationId = locationData.data.suggestions[0].entities[0].destinationId;
      console.log(destinationId);

      //get the places/hotels
      const placesUrl = `https://hotels4.p.rapidapi.com/properties/list?adults1=${adults}&pageNumber=1&destinationId=${destinationId}&pageSize=25&checkOut=${formatedCheckOut}&checkIn=${formatedCheckIn}&sortOrder=PRICE&locale=en_US&currency=CAD`
      let data = await axios.get(placesUrl, {
        headers: { "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST
      }});
         let places = data.data.data.body;
      console.log(places);
      placesDispatch({type: 'CHANGE_PLACES', payload: places});
    } catch (error) {
      console.error(error);
    }
  };

  const setGlobalVariables = () => {
    placesDispatch({ type: "CHANGE_CHECKIN", payload: checkIn });
    placesDispatch({ type: "CHANGE_CHECKOUT", payload: checkOut });
    placesDispatch({ type: "CHANGE_ADULTS", payload: adults }); 
    placesDispatch({ type: "CHANGE_CHILDREN", payload: children }); 
  }

  return (
    <>
      <Form onSubmit={fetchData}>
        <Row className="glass px-3 py-3 mx-3 my-5 g-2 align-items-end">
          <Col lg className="mb-1">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="Anywhere"
              onChange={(e) => setLocation(e.target.value)}
            />
          </Col>
          <Col md className="mb-1">
            <Form.Label>Check in</Form.Label>
            <DatePicker
              name="checkIn"
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              className="form-control"
              minDate={today}
              customInput={
                <input type="text" id="checkin" placeholder="Check Out" />
              }
            />
          </Col>
          <Col md className="mb-1">
            <Form.Label>Check out</Form.Label>
            <DatePicker
              name="checkOut"
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              className="form-control"
              minDate={tomorrow}
              customInput={
                <input type="text" id="checkin" placeholder="Check Out" />
              }
            />
          </Col>
          <Col md className="mb-1">
            <Form.Label>Adults</Form.Label>
            <Form.Control
              name="adults"
              type="number"
              min="1"
              max="10"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
            />
          </Col>{" "}
          <Col md className="mb-1">
            <Form.Label>Children</Form.Label>
            <Form.Control
              name="children"
              type="number"
              min="0"
              max="10"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            />
          </Col>
          <Col lg className="align-items-end mt-2">
            <Button type="submit" variant="info" style={{ width: "100%" }}>
              {loading ? 'Loading…' : 'Search'}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SearchCard;
