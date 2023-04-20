import React from "react";
import makeStyles from "./styles";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { ThumbUpAlt, Delete, MoreHoriz } from "@material-ui/icons";
import moment from "moment";
import { deletePost,likePost } from "../../../actions/posts";
import { useDispatch } from "react-redux";
const Post = ({ post, setCurrentId }) => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  console.log(post,'post.createdAt')
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          size="small"
          style={{ color: "white" }}
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHoriz fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags?.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {dispatch(likePost(post._id))}}>
          <ThumbUpAlt fontSize="small" />
          &nbsp; Like  &nbsp;
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
          <Delete fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
