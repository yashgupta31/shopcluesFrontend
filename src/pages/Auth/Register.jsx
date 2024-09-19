import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { colors } from '../../colors/colors'
import axios from 'axios'

const Register = ({ setClicked }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = { name, email, password }
    try {
      const response = await axios.post('http://localhost:3000/user/register', payload, {
        headers: {
          "Content-Type": "application/json"
        }
      })

      console.log("registration success", response.data);
      alert("Registration Successful");
      setTimeout(()=>{
        setClicked('login')
      }, 1000)
      

      //   const response = await fetch('https://shopcluesbackend.onrender.com/user/register', {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify(payload)
      // });

      // if (!response.ok) { 
      //     throw new Error('Network response was not ok');
      // }

      // const data = await response.json();
      // console.log("registration success", data);
      // alert("Registration Successful");

    } catch (error) {
      console.error('Registration failed:', error);
      alert("Registration Failed");
    }
  }



  return (
    <Box as='form' onSubmit={(e) => handleSubmit(e)} h={'16rem'} w={'28rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
      <Input value={name} onChange={(e) => setName(e.target.value)} variant='flushed' placeholder='Enter your Name' />
      <Input value={email} onChange={(e) => setEmail(e.target.value)} variant='flushed' placeholder='Enter Your Email Address' />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} variant='flushed' placeholder='Enter Your Password' />
      <Button type='submit' bg={colors.secondary} color={'white'} size='md' w={'14rem'}>Register</Button>
    </Box>
  )
}

export default Register