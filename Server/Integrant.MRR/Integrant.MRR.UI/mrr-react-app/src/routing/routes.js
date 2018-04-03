import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "../components/home/home.component";
import AboutComponent from "../components/about/about.component";
import MeetingRoomComponent from "../components/meeting-room/meetingroom.component";
import MeetingRoomsComponent from "../components/meeting-room-list/mettingrooms.component";
import NotFoundComponent from "../components/notfound/notfound.component";
import ReservationsComponent from "../components/reservations/reservation-list/reservations.component";
import ReservationComponent from "../components/reservations/reservation/reservation.component";

export default () => (
    <Switch>
        <Route path="/about" component={AboutComponent} />
        <Route exact path="/meetingrooms/:id" component={MeetingRoomComponent} />
        <Route exact path="/meetingrooms" component={MeetingRoomsComponent} />
        <Route exact path="/reservations/:meetingRoomCode/new" component={ReservationComponent} />
        <Route exact path="/reservations/:meetingRoomCode" component={ReservationsComponent} />
        <Route exact path="/" component={HomeComponent} />
        <Route component={NotFoundComponent} />
    </Switch>
)