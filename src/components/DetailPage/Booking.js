import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { PlacesContext } from "../../context/PlacesContext";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from "../../context/UserContext";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Booking = ({place}) => {
  const placesContext = useContext(PlacesContext);
  const userContext = useContext(UserContext);
  const { placesState, placesDispatch } = placesContext;
  const { userState } = userContext;
  const { checkIn, checkOut, adults, children, priceOfSelectedStay } = placesState;
  const { loggedInUser } = userState;

  const [totalPrice, setTotalPrice] = useState(place.price);

  const today = new Date();
  const tomorrow = new Date(new Date().setDate(today.getDate() + 1));

    let formatedCheckIn = checkIn.toISOString().slice(0, 10);
    let formatedCheckOut = checkOut.toISOString().slice(0, 10);

    const reserve = async (e) => {
      e.preventDefault();

      if(!loggedInUser){
        placesDispatch({
          type: "CHANGE_ALERT_MESSAGE",
          payload: {
            title: "Cannot reserve hotel",
            message: "Please log in."
          },
        });
        placesDispatch({ type: "SHOW_ALERT" });
        return;
      }

      const booking = {
        id: uuidv4(),
        hotelName: place.name,
        checkIn: formatedCheckIn,
        checkOut: formatedCheckOut,
        adults: adults,
        children: children,
        total: totalPrice
      }
      console.log(booking);

      try{
      const stripe = await stripePromise;
      
        const response = await axios.post(
        "https://booking-app-backend.herokuapp.com/payment",
        {
          booking: booking,
          customer: loggedInUser.email
        }
      );

      if(response.status === 500){
        placesDispatch({
          type: "CHANGE_ALERT_MESSAGE",
          payload: {
            title: "Issue with payment",
            message: "We're sorry, but currently it is not possible to reserve."
          },
        });
        placesDispatch({ type: "SHOW_ALERT" });
        return;
      }

      const session = response.data;
  
      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.error("Error",result.error.message);
      }
    }catch(error){
      console.error(error);
      placesDispatch({
        type: "CHANGE_ALERT_MESSAGE",
        payload: {
          title: "Issue with payment",
          message: "We're sorry, but currently it is not possible to reserve."
        },
      });
      placesDispatch({ type: "SHOW_ALERT" });
    }
    }

    useEffect(()=> {
      let one_day = 1000 * 60 * 60 * 24;
      let numberOfNights = Math.round(Math.round(checkOut.getTime() - checkIn.getTime()) / (one_day));
      console.log(priceOfSelectedStay);
      let price = priceOfSelectedStay * (parseInt(adults) + parseInt(children)) * numberOfNights;
      setTotalPrice(price);
    },[placesState])
  
  return (
    <>
      <Form onSubmit={reserve} className="sticky-top py-2 mt-5">
        <div className="bookingCard px-3 py-3 g-2 align-items-end">
          <p><b>${totalPrice} CAD/night</b></p>
          <Row>
          <Col md>
            <Form.Label>Check in</Form.Label>
            <DatePicker
              name="checkIn"
              selected={checkIn}
              onChange={(date) =>
                placesDispatch({ type: "CHANGE_CHECKIN", payload: date })
              }
              className="form-control"
              minDate={today}
              customInput={
                <input type="text" id="checkin" placeholder="Check Out" />
              }
            />
          </Col>
          <Col md>
            <Form.Label>Check out</Form.Label>
            <DatePicker
              name="checkOut"
              selected={checkOut}
              onChange={(date) =>
                placesDispatch({ type: "CHANGE_CHECKOUT", payload: date })
              }
              className="form-control"
              minDate={tomorrow}
              customInput={
                <input type="text" id="checkin" placeholder="Check Out" />
              }
            />
          </Col>
            </Row>
            <Row>
          <Col md>
            <Form.Label>Adults</Form.Label>
            <Form.Control
              name="adults"
              type="number"
              maxLength="10"
              value={adults}
              onChange={(e) =>
                placesDispatch({ type: "CHANGE_ADULTS", payload: e.target.value })
              }
            />
          </Col>{" "}
          <Col md>
            <Form.Label>Children</Form.Label>
            <Form.Control
              name="children"
              type="number"
              maxLength="10"
              value={children}
              onChange={(e) =>
                placesDispatch({ type: "CHANGE_CHILDREN", payload: e.target.value })
              }
            />
          </Col>
          </Row>
          <Row>
          <Col md className="align-items-end my-2">
            <Button type="submit" variant="info" style={{ width: "100%" }}>
              Reserve
            </Button>
          </Col>
          </Row>
        </div>
      </Form>
    </>
  );
};

export default Booking;
