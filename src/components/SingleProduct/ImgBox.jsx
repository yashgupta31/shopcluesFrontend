import { Box, Image } from '@chakra-ui/react'
import React, { useState } from 'react'

const ImgBox = ({product}) => {
    const [index, setIndex]= useState(0)
  return (
    <Box h={'26rem'} w={'20rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'}>
    <Box bg={'black'} h={'78%'} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} overflow={'hidden'} >
        <Image h={'100%'}  src={product.image}  />
    </Box>

    <Box w={'100%'} h={'17%'} display={'flex'} justifyContent={'space-between'}>
       {
        product.moreImg && (
          product.moreImg.map((elem, ind)=>(
            <Box key={ind} onClick={()=> setIndex(ind)} border={ind==index? '1.5px solid orange': '1px solid lightgray'} bg={'white'} h={'100%'} w={'22%'} borderRadius={'3px'}  display={'flex'} justifyContent={'center'} alignItems={'center'} 
            _hover={{cursor: 'pointer'}}>
        <Image h={'85%'} src={elem} />
        </Box>
        ))
        )
        
       }
        
    </Box>
</Box>
  )
}

export default ImgBox