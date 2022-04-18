import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

export default function ProjectItem(props) {
  return (
    <div className='ProjectItem'>
      <Card
        sx={{ midWidth: 475, maxWidth: 475, margin: 'auto' }}
        className='ProjectCard'
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant='h5' component='div'>
            benevolent
          </Typography>
          <Typography sx={{ mb: 1.5 }}>adjective</Typography>
          <Typography variant='body2'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
