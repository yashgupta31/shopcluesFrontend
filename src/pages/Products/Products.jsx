import { Box, Button, Checkbox, Icon, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../colors/colors'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { NavLink, useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import NavBottom from '../../components/Navbar/NavBottom'
import { IoMdStar } from 'react-icons/io'

const Products = () => {
    const {type}= useParams()
    const [products, setProducts]= useState([])
    const [TotalProducts, setTotalProducts]= useState([])
    const [pageCount, setPageCount]= useState(1)
    const [brands, setBrands]= useState([])
    // const [rating, setRating]= useState('all')
    // const [selectedBrand, setSelectedBrand]= useState(searchParams.get('category') || 'all')
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    // Get initial brand and rating from searchParams or set default to 'all'
    const [selectedBrand, setSelectedBrand] = useState(searchParams.get('brand') || 'all');
    const [rating, setRating] = useState(searchParams.get('rating') || 'all');
    const [sortByPrice, setSortByPrice]= useState(searchParams.get('price') || 'all');
    const [page, setPage]= useState(searchParams.get('page') || 1)

    useEffect(() => { 
        // Set searchParams whenever selectedBrand or rating changes
        setSearchParams({ brand: selectedBrand, rating: rating, sortByPrice, page: page });
    }, [selectedBrand, rating, setSearchParams, page, sortByPrice]);
    // console.log(brands)

    // const hasMounted = useRef(false);

    useEffect(()=>{
        setSelectedBrand('all')
        setRating('all')
        setSortByPrice('all')
        setPage(1)
        // setSearchParams({ brand: 'all', rating: 'all', page: 1 })
    }, [type])
    
    useEffect(()=>{
        const fetchProduct= async()=>{
            try {
                const response= await axios.get(`http://localhost:3000/product/getall/${type}`, {
                    params: {
                        brand: selectedBrand,
                        rating: rating,
                        price: sortByPrice,
                        page: page
                    }
                })
                console.log(response.data)
                setProducts(response.data.products)
                setPageCount(response.data.pageCount)
                setBrands(response.data.brands)
                setTotalProducts(response.data.totalProducts)
                
            } catch (error) {
                console.log("error while fetching products", error )
            }
        }

        fetchProduct()
    },[type, selectedBrand, rating, page, sortByPrice])

    return (
        <>
        <Box pt={'10.5rem'}  pl={'1.5rem'} pr={'1.5rem'} bg={colors.background} display={'flex'} flexDirection={'column'} >
        <Box bg={'lightcoral'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Text color={'gray'} mb={'1rem'}>{`home > ${type}`}</Text>
        {/* ---------pagination-------------- */}
        <Box bg={'yellow'} display={'flex'}>
            {
                [...Array(pageCount)].map((_, index)=>(
                    <Text onClick={()=> setPage(index+1)} key={index} w={'2.4rem'} h={'2.4rem'} mr={'0.5rem'} border={index+1 ==page? '0.5px solid #FF6161': '0.5px solid #D9D9D9'} color={index+1 ==page? '#FF6161': '#282828'} _hover={{border: '0.5px solid #FF6161', color: '#FF6161'}} display={'flex'} justifyContent={'center'} alignItems={'center'}  cursor={'pointer'}>{index+1}</Text>
                ))
            }
        </Box>
        {/* ---------------------------------------- */}
        </Box>
        
        
        <Box display={'flex'} justifyContent={'space-between'}>
            <Box bg={'white'} w={'14%'}>
                {/* ---each filters--- */}
                {/* --------sort by brand------- */}
                <Box bg={'pink'} position={'relative'} p={'1rem 0rem'} borderTop={'1px solid lightgrey'}>
                    
                <Text fontSize={'1.1rem'} fontWeight={600} mb={'0.4rem'}>Brand</Text> 
                <Text color={colors.primary} position={'absolute'} right={'0.3rem'} top={'0.3rem'} onClick={()=> setSelectedBrand('all')} cursor={'pointer'}>clear</Text>
                <Box display={'flex'} flexDirection={'column'}>
                    {
                        brands.map((brand, index)=>(
                            <Checkbox value={brand} onChange={(e)=> setSelectedBrand(e.target.value)} isChecked={selectedBrand === brand} key={index}>{brand}</Checkbox>
                        ))
                    }
                    </Box>
                </Box>
                {/* --------sort by rating-------- */}
                <Box bg={'pink'} position={'relative'} p={'1rem 0rem'} borderTop={'1px solid lightgrey'} borderBottom={'1px solid lightgrey'}>
                    
                <Text fontSize={'1.1rem'} fontWeight={600} mb={'0.4rem'}>Product Rating</Text> 
                <Text color={colors.primary} position={'absolute'} right={'0.3rem'} top={'0.3rem'} onClick={()=> setRating('all')} cursor={'pointer'}>clear</Text>
                <Box display={'flex'} flexDirection={'column'}>
                    {/* {
                        brands.map((brand, index)=>(
                            <Checkbox value={brand} onChange={(e)=> setSelectedBrand(e.target.value)} isChecked={selectedBrand === brand} key={index}>{brand}</Checkbox>
                        ))
                    } */}

<Checkbox value={4} onChange={(e)=> setRating(e.target.value)}  isChecked={rating== 4}>4 & above</Checkbox>
<Checkbox value={3} onChange={(e)=> setRating(e.target.value)}  isChecked={rating== 3} >3 & above</Checkbox>
<Checkbox value={2} onChange={(e)=> setRating(e.target.value)} isChecked={rating== 2} >2 & above</Checkbox>
<Checkbox value={1} onChange={(e)=> setRating(e.target.value)} isChecked={rating== 1} >1 & above</Checkbox>

                    </Box>
                </Box>
            {/* -----------------High-low & low-high---------------- */}
            <Box bg={'pink'} position={'relative'} display={'flex'} flexDirection={'column'} p={'1rem 0rem'} borderTop={'1px solid lightgrey'}>
            <Text fontSize={'1.1rem'} fontWeight={600} mb={'0.4rem'}>Price</Text> 
                <Text color={colors.primary} position={'absolute'} right={'0.3rem'} top={'0.3rem'} onClick={()=> setSortByPrice('all')} cursor={'pointer'}>clear</Text>

               <Checkbox value={'high'} onChange={(e)=> setSortByPrice(e.target.value)} isChecked={sortByPrice== 'high'}>High Price</Checkbox>
               <Checkbox value={'low'} onChange={(e)=> setSortByPrice(e.target.value)} isChecked={sortByPrice== 'low'}>Low Price</Checkbox>
            </Box>

            </Box>
            {/* --------------right box---------- */}
            <Box bg={'white'} w={'84%'}>
                <Box p={'1rem'} mb={'0.5rem'}>
                <Text fontSize={'1.2rem'} fontWeight={600}>{type.toUpperCase()}</Text>
                <Text fontSize={'sm'} mt={'2rem'}>{TotalProducts.length} Products Found</Text>
                </Box>

                <Box borderTop={'1px solid lightgray'} pt={'1rem'} w={'100%'} display={'flex'}   flexWrap={'wrap'}>
                    {/* -----------each Item----------- */}
                    {
                        products
                        // .filter((elem)=>{
                        //     if(selectedBrand){
                        //         return selectedBrand== elem.brand;
                        //     }
                        //     return elem;
                            
                        // })
                        // .filter((elem)=>{
                        //     return elem.rating > rating
                        // })
                        .map((elem, index)=>(
                            <NavLink to={`/products/${elem._id}`} key={index}>
                            <Box  w={'18.7rem'} h={'32rem'} p={'1rem'} mb={'1rem'} mr={'0.4rem'} transition={'0.2s'} _hover={{border: `1px solid ${colors.primary}`, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
                        <Box bg={'white'} w={'100%'} h={'71%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Image h={'85%'} src={elem.image} />
                        </Box>
                        <Text whiteSpace="nowrap" overflow="hidden"
                            textOverflow="ellipsis">{elem.name}</Text>
                        <Box display={'flex'} alignItems={'center'}>
                            <Text fontSize={'1.5rem'} fontWeight={600} mr={'0.3rem'}>₹{elem.price}</Text>
                            <Text mr={'0.3rem'} textDecoration={'line-through'} color={'grey'}>₹{elem.oldPrice}</Text>
                            <Text color={colors.primary} fontSize={'md'} fontWeight={600} mr={'0.3rem'}>{elem.discount}% off </Text>
                        </Box>
                        <Text display={'flex'} alignItems={'center'} fontSize={'sm'}>
                            <Icon as={MdOutlineLocalShipping} mr={'0.3rem'} fontSize={'md'}/>
                            Free Shiping</Text>
                            {/* ---------rating-------- */}
                            <Box display={'flex'} alignItems={'center'} mt={'0.5rem'}>
                            <Text mr={'0.4rem'}>{elem.rating}</Text>
                            <Box display={'flex'}>
                            {
                                [...Array(elem.rating)].map((elem, index)=>(
                                    <Icon key={index} color={'orangered'} as={IoMdStar} />
                                ))
                            }
                            </Box>
                            </Box>
                           
                    </Box>
                    </NavLink>
                        ))
                    }
                    
                    {/* ---------- */}

                </Box>
                {/* -------pagination---------- */}
{/* <Box bg={'red'}>
    {
        products.map((elem, index)=>(
            <Box key={index}>{index+1}</Box>
        ))
    }
</Box> */}
{/* ---------pagination-------------- */}
<Box display={'flex'} justifyContent={'end'}>
<Box bg={'yellow'} display={'flex'} mr={'2rem'}>
            {
                [...Array(pageCount)].map((_, index)=>(
                    <Text onClick={()=> setPage(index+1)} key={index} w={'2.4rem'} h={'2.4rem'} mr={'0.5rem'} border={index+1 ==page? '0.5px solid #FF6161': '0.5px solid #D9D9D9'} color={index+1 ==page? '#FF6161': '#282828'} _hover={{border: '0.5px solid #FF6161', color: '#FF6161'}} display={'flex'} justifyContent={'center'} alignItems={'center'}  cursor={'pointer'}>{index+1}</Text>
                ))
            }
        </Box>
        </Box>
        {/* ---------------------------------------- */}
            </Box>

        </Box>
        
        </Box>
        </>
    )
}

export default Products