import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../../colors/colors'
import { NavLink } from 'react-router-dom'

const EachBox = ({elem}) => {
  return (
    <NavLink to={`/products/${elem._id}`}>
    <Box bg={'white'} w={'15rem'} h={'100%'} display={'flex'} flexDirection={'column'} p={'1rem'} _hover={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;', border: `1px solid ${colors.primary}`, zIndex: '1', cursor: 'pointer'}}>
                    <Box bg={'white'} h={'65%'} display={'flex'} justifyContent={'center'} alignItems={'end'} pb={'0.4rem'}>
                        <Image src={elem.image} h={'80%'} transition={'0.5s'} _hover={{height: '88%'}}/>
                    </Box>
                    <Text mb={'0.2rem'} mt={'0.2rem'} whiteSpace="nowrap" overflow="hidden" 
      textOverflow="ellipsis">{elem.name}</Text>
                    <Box display={'flex'}>
                        <Text fontSize={'md'} fontWeight={600} mr={'0.3rem'}>₹{elem.price}</Text>
                        <Text mr={'0.3rem'} textDecoration={'line-through'} color={'grey'}>₹{elem.oldPrice}</Text>
                        <Text color={colors.primary} fontSize={'md'} fontWeight={600}mr={'0.3rem'}>{elem.discount}% off </Text>
                        </Box>
                </Box>
                </NavLink>
  )
}

export default EachBox