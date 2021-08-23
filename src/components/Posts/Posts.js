import { Grid, CircularProgress } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import postsStyles from "./styles";

function Posts({ setCurrentId }) {
  const classes = postsStyles;
  //we know it's state.posts because we set it in combined reducers
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
