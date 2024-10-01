import { Box, Button, Image, Input, InputGroup, InputLeftElement, keyframes, Modal, ModalCloseButton, ModalContent, ModalOverlay, omitThemingProps, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import { SearchIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {colors} from '../../colors/colors'
import Auth from '../../pages/Auth/Auth'
import { NavLink, useNavigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode';
import AuthContext from '../../context/AuthContext'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems } from '../../Redux/actions/cartActions'
import { IoAddOutline } from 'react-icons/io5'


const buttonCss={
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    borderRadius: '0%',
    padding: '1.1rem 0rem',
    paddingLeft: '1.5rem',
    size: 'sm'
    
  }

const searchResults={
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        borderRadius: '0%',
        padding: '1rem 0rem',
        paddingLeft: '1.5rem',
        size: 'sm',
        fontSize: '0.8rem'
}


const NavTop = () => {

    const {logout, userDetail, isOpen, setIsOpen}= useContext(AuthContext)
   
    const navigate= useNavigate()
    const dispatch= useDispatch()


    const [products, setProducts]= useState([])
    const [searchQuery, setSearchQuery]= useState('')
    const cartProducts= useSelector(state=> state.cart.item || [])

    useEffect(()=>{
        const fetchProducts= async()=>{
            try {
                const response= await axios.get('http://localhost:3000/product/getall')
                setProducts(response.data)
            } catch (error) {
                console.log("error while fetching products", error )
            }
        }
        fetchProducts()
        dispatch(fetchCartItems())
    },[])

    const handleSearchItemClick=(id)=>{
        navigate(`/products/${id}`)
        setSearchQuery('')
    }


    const handleSearchSubmit=()=>{
        const filtered= products.filter((elem)=>{
            return elem.name.includes(searchQuery) || elem.type.includes(searchQuery) || elem.brand.includes(searchQuery)
        })
        const firstElemType= filtered[0].type;
        if(searchQuery){
            navigate(`/products/all/${firstElemType}`)
        }
        setSearchQuery('')
    }

    

    return (
        <Box bg={'white'} h={'5rem'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} p={'0rem 1rem'}>
           <NavLink to={'/'}><Image src={logo} w={'8rem'} /></NavLink>

            <InputGroup w={'55%'} bg={'yellow'} ml={'4rem'} >
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray' />
                </InputLeftElement>
            <Box as='form' onSubmit={handleSearchSubmit} display={'flex'} w={'100%'} alignItems={'center'}>
                <Input value={searchQuery} w={'83%'} border={'none'} pl={'2.5rem'} onChange={(e)=> setSearchQuery(e.target.value)} borderRadius={'8px 0px 0px 8px'} bg={'#E9F6F7'} placeholder='What is on your mind today?' />
                
                <Button type='submit' bg={'#FF685E'} borderRadius={'0px 5px 5px 0px'} colorScheme='tomato' size='md' w={'9rem'}>
                    Search
                </Button>
                </Box>
                {/* ----------- */}
                <Box bg={'red'} position={'absolute'} maxH={'30rem'} top={'2.5rem'} left={'1rem'} w={'80%'} display={'flex'} flexDirection={'column'} overflow={'hidden'}>
                {
                    searchQuery &&
                    products
                    .filter((elem, index)=>{
                        return elem.name.includes(searchQuery) || elem.type.includes(searchQuery) || elem.brand.includes(searchQuery)
                    })
                    .map((elem, index)=>(
                        <Button key={index} onClick={()=> handleSearchItemClick(elem._id)}  sx={searchResults} overflow={'hidden'}>{elem.name}</Button>
                        
                    ))
                }
                
                </Box>
                {/* ---------- */}
            </InputGroup>

            <Box color={'#24A3B5'} w={'16rem'} fontSize={'1.8rem'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} >

                <Box display={'flex'} alignItems={'center'}>
                    <Text fontSize={'xs'} display={'flex'} flexDirection={'column'} fontWeight={'500'}><span style={{ color: 'black' }}>share</span>location</Text>
                    <Icon as={CiLocationOn} />
                </Box>
                <Icon as={IoIosNotificationsOutline} />
                <Icon as={CiHeart} />
                <NavLink to={'/addproduct'}><Icon as={IoAddOutline} /></NavLink>
                <NavLink to={'/cart'} style={{position: 'relative'}}><Icon as={BsCart3} /> <Text bg={colors.secondary} color={'white'} h={'1.2rem'} w={'1.2rem'} fontSize={'0.9rem'} fontWeight={'1.2rem'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} position={'absolute'} top={'-2px'} right={'-5px'} border={'1px solid white'}>{cartProducts.length}</Text></NavLink>
                
            </Box>

           
            <Box className='user-profile-btn' onClick={() => !userDetail && setIsOpen(true)} fontWeight={'600'}>{userDetail.name? userDetail.name: 'Sign In'} <Icon color={'#24A3B5'} as={MdOutlineArrowDropDown} /></Box>
            <Box className='user-profile'>
                <Box bg={colors.primary} display={'flex'} alignItems={'center'} h={'3.5rem'}>
                    <Box bg={'white'} w={'2.3rem'} h={'2.3rem'} ml={'1rem'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Icon as={FaRegUser} color={colors.primary} />
                    </Box>
                    <Text fontWeight={500} ml={'1rem'}>{ userDetail.name? userDetail.name: <Text onClick={() => setIsOpen(true)} cursor={'pointer'}>Register/Login</Text>  }</Text>
                </Box>
                <Box display={'flex'} flexDirection={'column'}>
                    <Button sx={buttonCss} >My Orders</Button>
                    <Button sx={buttonCss} >My Returns</Button>
                    <Button sx={buttonCss} >Wishlist</Button>
                    <Button sx={buttonCss} >My Profile</Button>
                    <Button sx={buttonCss} >My Chat</Button>
                    <Button sx={buttonCss} >My CluesBucks</Button>
                    <Button sx={buttonCss} >My Feedback</Button>
                    <Button sx={buttonCss} >Help & Support</Button>
                    <Button sx={buttonCss} >My Favorite Stores</Button>
                    {
                        userDetail.name &&  <Button sx={buttonCss} onClick={logout}>Log Out</Button>
                    }
                    </Box>
                </Box>
            
            {/* ------------ */}
         {/* ------------ login/register form------ */}
            {(isOpen) && <Auth setIsOpen={setIsOpen} />}
            {/* ---------------------------------------- */}

            

        </Box>
    )
}

export default NavTop
