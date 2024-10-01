import { Box, Button, Image, Input, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../colors/colors'
import axios from 'axios';

const AddProduct = () => {

    const [name, setName]= useState('');
    const [type, setType]= useState('mobile');
    const [brand, setBrand]= useState('');
    const [price, setPrice]= useState('');
    const [oldPrice, setOldPrice]= useState('');
    const [image, setImage]= useState('');   

    const handleSubmit= async(e)=>{
        e.preventDefault()
        const newProduct= {name, type, brand, price, oldPrice, image};
        const Token = JSON.parse(localStorage.getItem('shopcluestoken'));
        try {
            // console.log(newProduct)
            if(Token){
                const response= await axios.post('http://localhost:3000/product/create', newProduct, {
                    headers:{
                        Token: `Bearer ${Token}`,
                        'Content-Type': 'application/json'
                    } 
                })
                // console.log(response.data)
                alert(`${response.data.message}`)
                // alert("Product listed successfully done!");
            }else{
                alert('please login first..')
            }
            
        } catch (error) {
            alert(`Product listing failure: ${error}`);
        }
    }

    // ----------focus input --------

    const inputRef= useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    }),[brand]
    
    
  return (
    <Box  bg={colors.background} h={'100vh'} pt={'8rem'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box w={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>

        <Image src='https://transparentpixels.ie/wp-content/uploads/2019/07/online-shop-section-2-png-min.png'  w={'25rem'}/>
            {/* -------form----------- */}
        <Box as='form' onSubmit={handleSubmit} bg={'white'} boxShadow={'xl'}  w={'34rem'} h={'37rem'} borderRadius={'5px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} p={'1rem'}>
            <Text fontSize={'xl'} fontWeight={400} mb={'1rem'}>Add New Product</Text>

        <Box  display={'flex'} flexDirection={'column'} alignItems={'start'}>
            <Text mb={'0.4rem'} fontSize={'1.1rem'}>Product name:</Text>
            <Input placeholder='Enter product name' onChange={(e)=> setName(e.target.value)} ref={inputRef} />
        </Box> 

        <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
            <Text mb={'0.4rem'} fontSize={'1.1rem'}>Product type:</Text>
            <Select value={type} onChange={(e)=> setType(e.target.value)}>
            <option value='mobile'>Mobile</option>
                <option value='men'>Men</option>
                <option value='women'>Women</option>
                <option value='appliance'>appliance</option>
                
            </Select>
        </Box>

        <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
            <Text mb={'0.4rem'} fontSize={'1.1rem'}>Product Brand:</Text>
            <Input placeholder='Enter brand name' onChange={(e)=> setBrand(e.target.value.toLowerCase())} />
        </Box>

        <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
            <Text mb={'0.4rem'} fontSize={'1.1rem'}>Product New Price:</Text>
            <Input placeholder='Enter price' onChange={(e)=> setPrice(e.target.value)}/>
        </Box>

        <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
            <Text mb={'0.4rem'} fontSize={'1.1rem'}>Product old price:</Text>
            <Input placeholder='Enter old price' onChange={(e)=> setOldPrice(e.target.value)} />
        </Box>

        <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
            <Text mb={'0.4rem'} fontSize={'1.1rem'}>Product Image:</Text>
            <Input placeholder='Enter image url' onChange={(e)=> setImage(e.target.value)}/>
        </Box>

        <Button type='submit' bg={colors.secondary}>Submit</Button>
        </Box>
        </Box>

        
        </Box>
  )
}

export default AddProduct