import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AgeVerif from "./components/verification/AgeVerif";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import TopMenu from "./components/Header/TopMenu";
import HomePage from "./components/Home/HomePage";
import Profile from "./components/Profile/Profile";
import { isAdminTrue, isLogin } from "./utils";

import GroupContainer from "./components/Groups/GroupContainer";
import MessengerContainer from "./components/Messenger/MessengerContainer";
import GroupPage from "./components/Groups/GroupPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UsersDashboard from "./components/Admin-dashboard/UsersDashboard";
import NotFound from "./components/404/NotFound";
import Play from "./components/Game/Play";
import EventPage from "./components/Events/EventPage";
import Index from "./components/landing/Index";
import HealthContainer from "./components/healthcare/HealthContainer";
import Posts from "./components/Admin-dashboard/Posts";
import EventsA from "./components/Admin-dashboard/EventsA";
import PrivateAdminRoute from "./components/PrivateRoute/PrivateAdminRoute";
import { io } from "socket.io-client";
import { useEffect } from "react";

function App() {
 
  const isAdmin = isAdminTrue();
  const [socket, setSocket] = useState(null);
  const auth = isLogin();
  useEffect(() => {
    setSocket(io("ws://localhost:8900"));
  }, []);



 
  return (
    <Router>
 <TopMenu  socket={socket} />
    

      <Routes>
        <Route exact path="/landing" element={<Index />} ></Route>
        <Route exact path="/admin/events" element={<EventsA />} />
        <Route exact path="/admin/posts" element={<Posts   socket={socket}/>} />
        <Route
          exact
          path="/admin"
          element={
            <PrivateAdminRoute>
              <UsersDashboard />
            </PrivateAdminRoute>
          }
        />

        <Route exact path="/404" element={<NotFound />} />
        <Route
          exact
          path="/profile/:id"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="events"
          element={
            <PrivateRoute>
              <EventPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage  socket={socket}/>
            </PrivateRoute>
          }
        />

        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/verif" element={<AgeVerif />} />

        <Route
          exact
          path="/messenger"
          element={
            <PrivateRoute>
              <MessengerContainer />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/messenger/:id"
          element={
            <PrivateRoute>
              <MessengerContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/groups"
          element={
            <PrivateRoute>
              <GroupContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/group/:id/:userId"
          element={
            <PrivateRoute>
              <GroupPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/play-chess"
          element={
            <PrivateRoute>
              <Play />
            </PrivateRoute>
          }
        />
        <Route
          path="/health-care"
          element={
            <PrivateRoute>
              <HealthContainer />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
