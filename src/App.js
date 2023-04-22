import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Typography, AppBar, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import makeStyles from "./styles";
import memories from "./Images/memories.png";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
