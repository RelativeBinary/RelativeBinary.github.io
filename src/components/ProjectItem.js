import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import ThemeContextWrapper from '../contexts/ThemeContextWrapper';

export default function ProjectItem(props) {
  return (
      <Card sx={{ minWidth: 275, maxWidth: 275 }} className='ProjectItem'>
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
  );
}
