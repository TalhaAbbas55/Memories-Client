import React from 'react'
import makeStyles from './styles';
import { Card, CardActions, CardMedia, CardContent, Typography, Button } from "@material-ui/core";
import { ThumbUpAlt, Delete, MoreHoriz } from "@material-ui/icons"
import moment from 'moment';
const Post = ({post}) => {
    const classes = makeStyles();
    console.log(post,'post here singl');
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
                <div className={classes.overlay2}>
                    <Button size='small' style={{color: "white"}} onClick={()=>{}}>
                        <MoreHoriz fontSize="medium" />
                    </Button>
                </div>
                <div className={classes.details}> 
                    <Typography variant='body2' color='textSecondary'>{post.tags.map((tag)=> `#${tag} `)}</Typography>
                </div>
                <CardContent>
<Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size='small' color='primary' onClick={()=>{}}>
                        <ThumbUpAlt fontSize='small'/>
                        Like
                        {post.likeCount}
                    </Button>
                    <Button size='small' color='primary' onClick={()=>{}}>
                        <Delete fontSize='small'/>
                        Delete
                        </Button>
                    
                </CardActions>
        </Card>
    )
}

export default Post;