import React from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'
export default function Projects() {
  return (
    <div>
      <h3>Projects.</h3>
      These are my projects

    <Card sx={{ minWidth: 275, maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}
