import { Box, Button, Icon, Input, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { colors } from '../../colors/colors'
import Login from './Login'
import Register from './Register'
import AuthContext from '../../context/AuthContext'

const Auth = () => {
  const [clicked, setClicked]= useState('register')
  const {logout, userDetail, isOpen, setIsOpen}= useContext(AuthContext)
  return (
    <Box bg="rgba(0, 0, 0, 0.5)" w={'100vw'} h={'100vh'} position={'absolute'} top={0} display={'flex'} alignItems={'center'} justifyContent={'center'}>

      <Box bg={'white'} w={'44%'} h={'34rem'} p={'1rem 2rem'} borderRadius={'md'}>
        <Icon as={RxCross2} onClick={() => setIsOpen(false)} position={'absolute'} right={'29rem'} fontSize={'1.3rem'} />

        <Box w={'15rem'} h={'3rem'} display={'flex'} justifyContent={'space-evenly'}>
          <Text onClick={()=> setClicked('register')} color={(clicked== 'register') ? colors.primary: 'grey'} borderBottom={(clicked== 'register') && '3px solid #24A3B5'} fontSize={'lg'} w={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>Register</Text>
          <Text onClick={()=> setClicked('login')} fontSize={'lg'} w={'50%'} color={(clicked== 'login') ? colors.primary: 'grey'} borderBottom={(clicked== 'login') && '3px solid #24A3B5'} display={'flex'} justifyContent={'center'} alignItems={'center'}>Login</Text>
        </Box>

        {clicked== 'register' && (<Register setClicked={setClicked} />)}
        { clicked== 'login' && (<Login  setClicked={setClicked} />)}
        
      </Box>
    </Box>
  )
}

export default Auth