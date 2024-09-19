import React, { useEffect, useState } from 'react'
import { Box, Image, Slider, Text } from '@chakra-ui/react'


const Sliding = () => {
    const [count, setCount]= useState(0)

    let slideImage= [
        'https://cdn.shopclues.com/images/banners/2024/July/21/Clearance-Sale-Web-22July24.jpg',
        'https://cdn.shopclues.com/images/banners/2024/Apr/18/RefurbSmartphones_Web_18Apr24.jpg',
        'https://cdn.shopclues.com/images/banners/2024/Apr/25/HB_Superdeal_Web_26Apr24.jpg',
        'https://cdn.shopclues.com/images/banners/2024/July/21/23July_HB2_Home_Essential_Web.jpg',
        "https://cdn.shopclues.com/images/banners/2024/Apr/24/Q2'24_Shopclues_Gaming_2760x690_Sru.jpg"
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => (prevCount + 1) % slideImage.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);
  return (
    <Box  h={'26rem'} mt={'0.7rem'} display={'flex'} justifyContent={'center'} >

                <Box h={'100%'} w={'77%'} mr={'1rem'} boxShadow={'lg'}>
                        <Image  h={'84%'} src={slideImage[count]} />

                    <Box bg={'white'} h={'16%'} display={'flex'} w={'100%'} justifyContent={'space-evenly'} alignItems={'center'} textAlign={'center'}>
                        <Text color={count==0?'#24A3B5': 'grey'} borderBottom={count==0? '3px solid #24A3B5': 'none'} fontSize={'sm'} w={'20%'} h={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} >Clearance<br /> Sale</Text>
                        <Text color={count==1?'#24A3B5': 'grey'} borderBottom={count==1? '3px solid #24A3B5': 'none'} fontSize={'sm'} w={'20%'} h={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} >Reburbished <br />Smartphones</Text>
                        <Text color={count==2?'#24A3B5': 'grey'} borderBottom={count==2? '3px solid #24A3B5': 'none'} fontSize={'sm'} w={'20%'} h={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} >Super<br />Deal</Text>
                        <Text color={count==3?'#24A3B5': 'grey'} borderBottom={count==3? '3px solid #24A3B5': 'none'} fontSize={'sm'} w={'20%'} h={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} >Home and<br />Kitchen</Text>
                        <Text color={count==4?'#24A3B5': 'grey'} borderBottom={count==4? '3px solid #24A3B5': 'none'} fontSize={'sm'} w={'20%'} h={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} >Intel<br />Laptops</Text>
                    </Box>
                </Box>

                {/* ---------------right-------- */}

                <Box w={'15%'} display={'flex'} flexDirection={'column'} boxShadow={'lg'} >
                    <Box bg={'white'} h={'33%'} borderBottom={'1px solid lightgrey'} >
                        <Image src='https://cdn.shopclues.com/images/banners/2023/Apr/14/2Platinum_Srushty_14April23.jpg' />
                    </Box>

                    <Box bg={'white'} h={'33%'} borderBottom={'1px solid lightgrey'}>
                        <Image src='https://cdn.shopclues.com/images/banners/2023/Apr/14/1Platinum_Srushty_14April23.jpg' />
                    </Box>

                    <Box bg={'white'} h={'33%'}>
                        <Image src='https://cdn.shopclues.com/images/banners/2023/Apr/14/3Platinum_Srushty_14April23.jpg' />
                    </Box>
                </Box>
            </Box>
  )
}

export default Sliding