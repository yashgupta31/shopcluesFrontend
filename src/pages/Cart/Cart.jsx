import { Box, Button, Icon, Image, Input, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { colors } from '../../colors/colors'
import EachItem from './EachItem'
import axios from 'axios'
import { json } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems } from '../../Redux/actions/cartActions'
import { GrLocation } from 'react-icons/gr'
// import AuthContext from '../../context/AuthContext'


const Cart = () => {
  const dispatch= useDispatch()
  // const {logout}= useContext(AuthContext)
  const cartProducts= useSelector(state=> state.cart.item || [])
  console.log(cartProducts)

  // const {userDetail, login, logout}= useContext(AuthContext)
  // console.log('cart items from redux store-', cartItems)

  useEffect(()=>{
    dispatch(fetchCartItems())
  },[])

 const totalAmount= cartProducts.reduce((acc, current)=> {
  return acc + current.productId.price * current.quantity;
 }, 0)

  // const [cartProducts, setCartProducts]= useState([])

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     const Token = JSON.parse(localStorage.getItem('shopcluestoken'));
  //     try {
  //       const response = await axios.get('http://localhost:3000/cart/getcart',{
  //         headers: {
  //             Token: `Bearer ${Token}`,
  //             'Content-Type': 'application/json',
  //         }
  //     })
  //     setCartProducts(response.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchCart()
  // }, [])

  return (
    <Box bg={colors.background} minH={'100vh'} pt={'11rem'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box bg={'white'} w={'88%'} p={'1rem'} >
        <Text fontSize={'1.6rem'} fontWeight={600} p={'1rem'} borderBottom={'1px solid gray'}>My Cart ( {cartProducts.length} Items )</Text>
        <Text m={'1.3rem 0rem'}>Congrats! You are eligible for an Extra 10 % Off on Prepaid orders with a minimum order value of Rs 149 and a Maximum discount of Rs 1000. Use coupon code MYSHOPCLUES. Limit one coupon at a time.</Text>

        {
          cartProducts.length > 0 &&
          cartProducts.map((elem, index)=>(
            <EachItem key={index} elem={elem} />
          ))
        }
        {
          !cartProducts.length > 0 && <Text fontSize={'xl'} fontWeight={600}>Cart is Empty</Text>
        }
        
        

        {/* <Box bg={'lightblue'}>

        </Box> */}
        
      </Box>
      <Box bg={'pink'} w={'88%'} h={'11rem'} display={'flex'} alignItems={'start'} justifyContent={'space-between'} p={'1rem'}>
           <Box display={'flex'} alignItems={'center'} w={'17rem'}>
              <Icon as={GrLocation} fontSize={'2rem'} />
              <Box ml={'0.5rem'} display={'flex'} flexDirection={'column'}>
                <Text mb={'0.5rem'}>Delivery pincode</Text>
                <Box display={'flex'}>
                  <Input placeholder='Enter your pincode' fontSize={'sm'} fontWeight={500} borderRadius={0} border={`1px solid ${colors.primary}`} />
                  <Button borderRadius={0} bg={colors.primary} color={'white'} p={'0rem 1.4rem'}>Submit</Button>
                </Box>
              </Box>
           </Box>

           <Box bg={'green'} h={'100%'} w={'13rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
            <Box display={'flex'} fontSize={'lg'} justifyContent={'space-between'}>
              <Text>Total</Text>
              <Text>₹{totalAmount}</Text>
            </Box>

            <Box display={'flex'} fontSize={'1.2rem'} fontWeight={500} justifyContent={'space-between'}>
              <Text>Grand Total</Text>
              <Text>₹{totalAmount}</Text>
            </Box>

            <Text fontSize={'xs'} mt={'-0.5rem'}>Inclusive of all the applicable taxes</Text>

            <Button bg={colors.secondary} color={'white'} w={'100%'} mt={'1rem'} p={'1.4rem 0rem'} borderRadius={'4px'}>Place Order</Button>
           </Box>
      </Box> 

    </Box>
  )
}

export default Cart