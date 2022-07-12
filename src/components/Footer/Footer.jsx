import { Typography } from '@mui/material'
import React from 'react'
import { FooterBox } from './footerComponents'

export const Footer = () => {
  return (
    <FooterBox>
      <Typography variant='body1' color='text.secondary'>Movie App</Typography>
      <Typography variant='body1' color='text.primary'>@2022 , Movie, Inc. or its affilation</Typography>
    </FooterBox>
  )
}
