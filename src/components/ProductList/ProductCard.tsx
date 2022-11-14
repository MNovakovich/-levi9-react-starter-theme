import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
export default function ProductCard({
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
      </CardContent>
      <CardActions>

        <p>Cat:{category}</p>
        <span>${price}</span> 
      </CardActions>
    </Card>
    </Link>
  );
}