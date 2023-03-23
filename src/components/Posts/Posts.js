import React from 'react'
import makeStyles from './styles';
import { useSelector } from 'react-redux';
const Posts = () => {
    const classes = makeStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts, 'posts are here')
    return (
        <div>Posts</div>
    )
}

export default Posts;