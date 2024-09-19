import { Box, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sliding from './Sliding'
import ScrollBox from '../../components/ScrollBox/ScrollBox'
import { colors } from '../../colors/colors'
import NavBottom from '../../components/Navbar/NavBottom'
import BudgetBazar from './BudgetBazar'
import axios from 'axios'
// import { useSpring, animated } from '@react-spring/web';

const Home = () => {

   const data= [
    {
        _id: 1,
        img: "https://cdn.shopclues.com/images1/thumbnails/116607/200/200/153166826-116607250-1686641152.jpg",
        name: "HOTLINE H310 (Dual Sim, 1.8 Inch Display, 1000 Mah Battery)",
        price: 690,
        oldPrice: 1599,
        discount: 61
    },
    {
        _id: 2,
        img: "https://cdn.shopclues.com/images1/thumbnails/117077/320/320/153351967-117077192-1681302686.jpg",
        name: "Globus Naturals Charcoal Anti-Pollution Face Care Combo (Pack Of 1 Face Wash, 1 Face Scrub, 1 Peel Off Mask) 100gms Each",
        price: 555,
        oldPrice: 1099,
        discount: 64
    },
    {
        _id: 3,
        img: "https://cdn.shopclues.com/images1/thumbnails/116964/320/320/153318850-116964816-1678955498.jpg",
        name: "Baleshwar Men Maroon Solid Formal Shirt (Pack of 1 )",
        price: 899,
        oldPrice: 1499,
        discount: 54
    },
    {
        _id: 4,
        img: "https://cdn.shopclues.com/images1/thumbnails/117315/320/320/153421420-117315425-1691161747.jpg",
        name: "JOLLIFY Black Round Neck Printed Crop Top Women",
        price: 399,
        oldPrice: 999,
        discount: 70
    },
    {
        _id: 5,
        img: "https://cdn.shopclues.com/images1/thumbnails/117330/320/320/153427984-117330108-1692000879.jpg",
        name: "Oceanista Orange Floral Maxi Dress for Women",
        price: 875,
        oldPrice: 1670,
        discount: 52
    },
    {
        _id: 6,
        img: "https://cdn.shopclues.com/images1/thumbnails/117260/320/320/153405076-117260000-1689675938.jpg",
        name: "Sketchfab Om Bhur Bhuva Swaha Wall Hanging Decorative Item for Home Office Gift Items (2530349)",
        price: 390,
        oldPrice: 595,
        discount: 47
    },
    {
        _id: 7,
        img: "https://cdn.shopclues.com/images1/thumbnails/117339/320/320/153430700-117339685-1692894907.jpg",
        name: "Wox F9 TWS True Wireless Stereo Earbuds Bluetooth Headset  (Black, True Wireless)",
        price: 409,
        oldPrice: 670,
        discount: 35
    },
    {
        _id: 8,
        img: "https://cdn.shopclues.com/images1/thumbnails/117305/320/320/153418478-117305843-1690876276.jpg",
        name: "EARTH KING Pure Kashmiri Shilajit/Shilajit Resin (Semi Liquid) for Strength and Power 20Gm",
        price: 797,
        oldPrice: 1299,
        discount: 44
    }
   ]

   const [men, setMen]= useState([]);
   const [women, setWomen]= useState([])
   

//    try {
//     useEffect(()=>{
//         async function fetchProduct (){
//          const response= await axios.get('http://localhost:3000/product/getall/men', {
//              params: {
//                  brand: 'all',
//                  rating: 1,
//                  page: 1
//              }
//          });
//          console.log(response.data)
//          setMen(response.data.products)

//          }
//          fetchProduct()
//         },[])
//    } catch (error) {
//     console.log(error)
//    }

useEffect(() => {
    async function fetchProducts() {
       try {
          const [menResponse, womenResponse] = await Promise.all([
             axios.get('http://localhost:3000/product/getall/men', {
                params: {
                   brand: 'all',
                   rating: 1,
                   page: 1
                }
             }),
             axios.get('http://localhost:3000/product/getall/women', {
                params: {
                   brand: 'all',
                   rating: 1,
                   page: 1
                }
             })
          ]);

          // Set data for men and women products
          setMen(menResponse.data.products);
          setWomen(womenResponse.data.products);
          
          console.log('Men:', menResponse.data.products);
          console.log('Women:', womenResponse.data.products);
       } catch (error) {
          console.error('Error while fetching products', error);
       }
    }

    fetchProducts();
 }, []);  // Runs once when the component mounts
   

    return (
        <Box bg={colors.background} w={'100%'} pt={'7.5rem'}>
             <NavBottom/>
            <Sliding />
            <ScrollBox data={data} title={'Branded Deals'} />
            <ScrollBox data={men} title={"Men's Clothing"} />
            <ScrollBox data={women} title={"Men's Clothing"} />
            <BudgetBazar />

        </Box>
    )
}

export default Home

