import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';

export default function ProjectItem({number, name, body, image, link}) {
  return (
    <div className='ProjectItem'>
      <Card
        sx={{ midWidth: 475, maxWidth: 475, margin: 'auto' }}
        className='ProjectCard'
      >
        <CardContent>
          <Typography variant='body2' gutterBottom>
            {number < 10 ? "0"+number : number} : {name}
          </Typography>
          <Typography variant='p' component='div'>
            {body}
          </Typography>
          <br/>
          <CardMedia 
            className='ProjectItemImage'
            component="img"
            image={image} 
            height="194" 
            alt="project-image"
          />
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
