import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Typography, AppBar, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import makeStyles from "./styles";
import memories from "./Images/memories.png";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = makeStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            className={classes.mainContainer}
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
