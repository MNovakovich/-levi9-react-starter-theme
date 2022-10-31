import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
interface IProps {
    id:number;
    title:string;
    image:string;
    description:string;
    category:string;
    price:string;
}
export default function MediaCard({
    id,
    title,
    image,
    description,
    category,
    price
}:IProps) {
  return (
    <Link to={'/products/1'}>
    <Card style={{height:'100%'}}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {description.slice(0,101)}
        </Typography>
        <p>Cat:{category}</p>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
        
        <span>${price}</span> 
      </CardActions>
    </Card>
    </Link>
  );
}