import React, { useReducer } from "react";

export const PlacesContext = React.createContext();

const today = new Date();
const tomorrow = new Date(new Date().setDate(today.getDate() + 1));

const DEFAULT_PRICE_NIGHT = 20;

const initialState = {
  loading: false,
  places: null,
  checkIn: today,
  checkOut: tomorrow,
  adults: 1,
  children: 0,
  priceOfSelectedStay: DEFAULT_PRICE_NIGHT,
  alert: { show: false,title: "", message: "", variant: "warning" },
};

const reducer = (placesState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...placesState,
        loading: !placesState.loading
      };
    case "CHANGE_PLACES":
      return {
        ...placesState,
        places: action.payload
      };
    case "CHANGE_CHECKIN":
      return {
        ...placesState,
        checkIn: action.payload,
      };
    case "CHANGE_CHECKOUT":
      return {
        ...placesState,
        checkOut: action.payload,
      };
    case "CHANGE_ADULTS":
      return {
        ...placesState,
        adults: action.payload,
      };
    case "CHANGE_CHILDREN":
      return {
        ...placesState,
        children: action.payload,
      };
    case "CHANGE_ALERT_MESSAGE":
      return {
        ...placesState,
        alert: { ...placesState.alert, message: action.payload.message, title: action.payload.title, variant: action.payload.variant ? action.payload.variant : "warning"},
      };
    case "CHANGE_PRICE":
      return {
        ...placesState,
        priceOfSelectedStay: action.payload ? action.payload : DEFAULT_PRICE_NIGHT,
      };
    case "SHOW_ALERT":
      return {
        ...placesState,
        alert: { ...placesState.alert, show: !placesState.alert.show },
      };
    default:
      return placesState;
  }
};

export const PlacesProvider = (props) => {
  const [placesState, placesDispatch] = useReducer(reducer, initialState);

  return (
    <PlacesContext.Provider value={{ placesState, placesDispatch }}>
      {props.children}
    </PlacesContext.Provider>
  );
};

export const PlacesConsumer = PlacesContext.Consumer;
