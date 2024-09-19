import { Box } from '@chakra-ui/react'
import React from 'react'
import NavTop from './NavTop'
import NavBottom from './NavBottom'
import NavMiddle from './NavMiddle'
import './Navbar.css'

const Navbar = () => {
  return (
    <Box  position={'fixed'} w={'100vw'} zIndex={99} >
        <NavTop />
        <NavMiddle />
        {/* <NavBottom /> */}
    </Box>
  )
}

export default Navbar