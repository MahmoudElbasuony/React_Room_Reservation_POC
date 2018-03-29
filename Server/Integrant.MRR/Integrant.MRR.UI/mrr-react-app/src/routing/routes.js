import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "../components/home/home.component";
import AboutComponent from "../components/about/about.component";
import MeetingRoomComponent from "../components/meeting-room/meetingroom.component";
import MeetingRoomsComponent from "../components/meeting-room-list/mettingrooms.component";
import NotFoundComponent from "../components/notfound/notfound.component";

export default () => (
    <Switch>
        <Route path="/about" component={AboutComponent} />
        <Route exact path="/meetingrooms/:id" component={MeetingRoomComponent} />
        <Route exact path="/meetingrooms" component={MeetingRoomsComponent} />
        <Route exact path="/" component={HomeComponent} />
        <Route component={NotFoundComponent} />
    </Switch>
)