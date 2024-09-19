import { Box, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../../colors/colors'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { fetchCartItems, removeCartItem, updateCartQuantity } from '../../Redux/actions/cartActions';

const EachItem = ({elem}) => {
    // console.log(elem)
    const dispatch= useDispatch()
    const handleRemove=()=>{
        dispatch(removeCartItem(elem.productId._id))
    }

    const handleQuantityAdd=()=>{
        dispatch(updateCartQuantity(elem.productId._id, elem.quantity+1))
    }

    const handleQuantityMinus=()=>{
        if(elem.quantity > 1){
            dispatch(updateCartQuantity(elem.productId._id, elem.quantity-1))
        }
        
    }
  return (
    <Box w={'100%'} h={'9.5rem'} p={'1rem'} display={'flex'} alignItems={'start'} justifyContent={'space-between'} borderTop={'1px solid lightgrey'}>
            <Box bg={'white'} h={'6.5rem'} w={'6rem'} borderRadius={'2px'} display={'flex'} alignItems={'center'} justifyContent={'center'} border={'1px solid lightgrey'}>
                <Image src={elem.productId.image} h={'90%'} />
            </Box>
            {/* ------- */}
            <Box  w={'37%'} ml={'-4.5rem'}>
                <Text color={'gray'}>{elem.productId.name}</Text>
                <Text>Color : Light blue</Text>
            </Box>
            {/* -------- */}
        <Box  h={'3.3rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} w={'6rem'}>
                <Box onClick={handleQuantityMinus} bg={'lightgrey'} w={'1.4rem'} h={'1.4rem'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'}><Icon as={FaMinus} fontSize={'sm'} /></Box>
                <Text fontSize={'1.2rem'}>{elem.quantity}</Text>
                <Box onClick={handleQuantityAdd} bg={'lightgrey'} w={'1.4rem'} h={'1.4rem'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'}><Icon as={FaPlus } fontSize={'sm'}/></Box>
            </Box>
            <Text color={colors.primary} fontSize={'sm'} onClick={handleRemove}>Remove</Text>
        </Box>
        {/* ----------------- */}
        <Box display={'flex'} flexDirection={'column'} alignItems={'end'}>
            <Text display={'flex'}>
                Price: <Text fontWeight={700} ml={'0.4rem'}>₹{elem.productId.price * elem.quantity}</Text>
            </Text>
            <Text display={'flex'}>
            Shipping Fee : <Text fontWeight={700} ml={'0.4rem'}>FREE</Text>
            </Text>
        </Box>
        {/* --------------------- */}
        <Box w={'11rem'} display={'flex'} flexDirection={'column'} alignItems={'end'}>
            <Text fontSize={'1.1rem'} fontWeight={700}>₹{elem.productId.price * elem.quantity}</Text>
            <Text fontSize={'xs'} textAlign={'end'} fontWeight={600}>Inclusive of all the applicable taxes</Text>
        </Box>

        </Box>
  )
}

export default EachItem