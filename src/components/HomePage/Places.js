import React, { useContext } from "react";
import { PlacesContext } from "../../context/PlacesContext";
import { Container } from "react-bootstrap";
import PlaceCard from "./PlaceCard";
import { RiArrowUpSLine } from 'react-icons/ri';

const Places = () => {
  const placesContext = useContext(PlacesContext);
  const { placesState } = placesContext;
  const { places, checkIn, checkOut, adults, children } = placesState;

  let options = { month: 'short', day: 'numeric' };
  let formatedCheckIn = new Intl.DateTimeFormat('en-US', options).format(checkIn);
  let formatedCheckOut = new Intl.DateTimeFormat('en-US', options).format(checkOut);
  return (
    <Container className="my-2">
      {places ? 
       <>
          <p>{formatedCheckIn} - {formatedCheckOut} · {parseInt(adults) + parseInt(children)} {(parseInt(adults) + parseInt(children) > 1) ? "guests" : "guest"}</p>
          <h1>Stays in {places.header}</h1>
          {places.searchResults.results && places.searchResults.results.map((place) => <PlaceCard key={place.id} place={place} />)}
      </>
      :
      <div className="d-flex flex-column align-items-center text-center">
        <h3><RiArrowUpSLine className="bounce"/></h3>
        <h5>Please fill out and submit the form to see the results</h5>
      </div>
      }
    </Container>
  );
};

export default Places;
