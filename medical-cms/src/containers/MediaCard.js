import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
  root: {
    /*maxWidth: 345,*/
    margin:8,
    width:350,
    height:450,
    fontsize:10,
    textAlign: 'center',
  },
  media: {
    height: 350,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  let url = `/topic${props.number+1}`
  let image = require(`../asset/icon/Report${props.number+1}.png`)//`../asset/icon/Report${props.number+1}.png`
  if(props.topicnumber){
    url = `/topic${props.topicnumber}_${props.number+1}`
    image = require(`../asset/icon/topic${props.topicnumber}_${props.number+1}.png`)
  }

  

  return (
    
    <Link underline='none' component={RouterLink} to={url}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom style={{color: "#4e73df"}} >
              {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Link>
  );
}
