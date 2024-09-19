import { Box, Button, Input } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { colors } from '../../colors/colors'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'

const Login = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  const {login, setIsOpen}= useContext(AuthContext)

  const handleSubmit= async(e)=>{
    e.preventDefault()
    const payload= {email, password}

      try {
        const response= await axios.post('http://localhost:3000/user/login', payload, {
          headers:{
            "Content-Type": "application/json"
          }})
          console.log("login success", response.data)
          const token= response.data.token;
          login(token)
          localStorage.setItem('shopcluestoken', JSON.stringify(token))
          alert('login success', response.data)
          setTimeout(() => {
            setIsOpen(false)
          }, 500);
          

      } catch (error) {
        console.log(error)
        alert('login fail')
      }
  }

  

  return (
    <Box as='form' onSubmit={(e)=> handleSubmit(e)} h={'16rem'} w={'28rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
            <Input value={email} onChange={(e)=> setEmail(e.target.value)} variant='flushed' placeholder='Enter your email id' />
            <Input value={password} onChange={(e)=> setPassword(e.target.value)} variant='flushed' placeholder='Enter Your Password' />
            <Button type='submit' bg={colors.secondary} color={'white'} size='md' w={'14rem'}>Login</Button>
          </Box>
  )
}

export default Login