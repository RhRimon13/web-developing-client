import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/HomePage/Home/Home";
import AddServices from "./Components/AdminPage/AddServices/AddServices";
import Login from "./Components/LoginPage/Login/Login";
import AppointMent from "./Components/AppointmentPage/Appointment/AppointMent";
import PrivateRoute from "./Components/LoginPage/PrivateRoute/PrivateRoute";
import ServiceManager from "./Components/AdminPage/ServiceManager/ServiceManager";
import GiveReview from "./Components/AppointmentPage/GiveReview/GiveReview";
import AddAdmin from "./Components/AdminPage/AddAdmin/AddAdmin";
import AppointmentForm from "./Components/AppointmentPage/AppointmentForm/AppointmentForm";
import MyBookingList from "./Components/OrderPage/MyBookingList/MyBookingList";
import AllAppointmentList from "./Components/OrderPage/AllAppointmentList/AllAppointmentList";


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home"> <Home /> </Route>
          <PrivateRoute path="/appointment"> <AppointMent /> </PrivateRoute>
          <Route path="/addService"> <AddServices /> </Route>
          <Route path="/addAdmin"> <AddAdmin /> </Route>
          <Route path="/addReview"> <GiveReview /> </Route>
          <PrivateRoute path="/manageService"> <ServiceManager /> </PrivateRoute>
          <Route path="/login"> <Login /> </Route>
          <Route path="/appointmentForm/:serviceId"> <AppointmentForm /> </Route>
          <PrivateRoute path="/myBookingList"> <MyBookingList /> </PrivateRoute>
          <PrivateRoute path="/allAppointmentList"> <AllAppointmentList /> </PrivateRoute>
          <Route exact path="/"> <Home /> </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
