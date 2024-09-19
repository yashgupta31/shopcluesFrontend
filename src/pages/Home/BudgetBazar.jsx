import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import image1 from '../../assets/BudgetBazar/image1.jpg'
import image2 from '../../assets/BudgetBazar/image2.jpg'
import image3 from '../../assets/BudgetBazar/image3.jpg'
import image4 from '../../assets/BudgetBazar/image4.jpg'
import image5 from '../../assets/BudgetBazar/image5.jpg'


const BudgetBazar = () => {
  return (
    <Box w={'100%'} p={'1.5rem 3rem'} display={'flex'} flexDirection={'column'}>
        <Text fontSize={'xl'} fontWeight={600}>Budget Bazaar</Text>
        <Box bg={'white'} mt={'1rem'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
            {/* <Image src='https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar1.jpg' /> */}
            <Image src={image1} bg={'white'} w={'20%'} borderRight={'3.5px solid white'} _hover={{opacity: '80%'}}/>
            <Image src={image2} bg={'white'} w={'20%'} borderRight={'3.5px solid white'} _hover={{opacity: '80%'}}/>
            <Image src={image3} bg={'white'} w={'20%'} borderRight={'3.5px solid white'} _hover={{opacity: '80%'}}/>
            <Image src={image4} bg={'white'} w={'20%'} borderRight={'3.5px solid white'} _hover={{opacity: '80%'}}/>
            <Image src={image5} bg={'white'} w={'20%'} borderRight={'3.5px solid white'} _hover={{opacity: '80%'}}/>
        </Box>
    </Box>
  )
}

export default BudgetBazar