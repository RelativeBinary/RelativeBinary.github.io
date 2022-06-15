import React from 'react'
import Fade from '@mui/material/Fade';

export default function FadeIn({children}) {
  return (
    <Fade in={true} timeout={5000}>{children}</Fade>
  )
}
