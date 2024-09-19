import { Box, Image, ListItem, Text, UnorderedList, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import HoverBox from './HoverBox'
import {colors} from '../../colors/colors'
import { NavLink } from 'react-router-dom'

const NavMiddle = () => {
    const linkData = [
        {
            name: 'MOBILES & MORE',
            type: 'mobile',
            links: [
                [
                    "Smartphones & Tablets",
                    "I KALL",
                    "Mi",
                    "Realme",
                    "Samsung",
                    "Vivo",
                    "Oppo",
                    "Apple",
                    "Tecno",
                    "Infinix",
                    "Micromax"
                ],
                [
                    "Feature Phones",
                    "Nokia",
                    "MTR",
                    "Heemax",
                    "Karbonn",
                    "Kechaoda",
                    "Gfive",
                    "Blackbear"
                ]
            ]
        },
        {
            name: 'MEN',
            type: 'men',
            links: [
                [
                    "Ments wear",
                    "I KALL",
                    "Mi",
                    "Realme",
                    "Samsung",
                    "Vivo",
                    "Oppo",
                    "Apple",
                    "Tecno",
                    "Infinix",
                    "Micromax"
                ],
                [
                    "Feature Phones",
                    "Nokia",
                    "MTR",
                    "Heemax",
                    "Karbonn",
                    "Kechaoda",
                    "Gfive",
                    "Blackbear"
                ]
            ]
        },
        {
            name: 'WOMEN',
            type: 'women',
            links: [
                [
                    "Ments wear",
                    "I KALL",
                    "Mi",
                    "Realme",
                    "Samsung",
                    "Vivo",
                    "Oppo",
                    "Apple",
                    "Tecno",
                    "Infinix",
                    "Micromax"
                ],
                [
                    "Feature Phones",
                    "Nokia",
                    "MTR",
                    "Heemax",
                    "Karbonn",
                    "Kechaoda",
                    "Gfive",
                    "Blackbear"
                ]
            ]
        },
        {
            name: 'HOME & KITCHEN',
            type: 'kitchen',
            links: [
                [
                    "kitchen ",
                    "I KALL",
                    "Mi",
                    "Realme",
                    "Samsung",
                    "Vivo",
                    "Oppo",
                    "Apple",
                    "Tecno",
                    "Infinix",
                    "Micromax"
                ],
                [
                    "Feature Phones",
                    "Nokia",
                    "MTR",
                    "Heemax",
                    "Karbonn",
                    "Kechaoda",
                    "Gfive",
                    "Blackbear"
                ]
            ]
        },
        {
            name: 'APPLIANCES',
            type: 'appliance',
            links: [
                [
                    "Smartphones & Tablets",
                    "I KALL",
                    "Mi",
                    "Realme",
                    "Samsung",
                    "Vivo",
                    "Oppo",
                    "Apple",
                    "Tecno",
                    "Infinix",
                    "Micromax"
                ],
                [
                    "Feature Phones",
                    "Nokia",
                    "MTR",
                    "Heemax",
                    "Karbonn",
                    "Kechaoda",
                    "Gfive",
                    "Blackbear"
                ]
            ]
        },
        {
            name: 'SPORTS & MORE',
            links: [
                [
                    "Smartphones & Tablets",
                    "I KALL",
                    "Mi",
                    "Realme",
                    "Samsung",
                    "Vivo",
                    "Oppo",
                    "Apple",
                    "Tecno",
                    "Infinix",
                    "Micromax"
                ],
                [
                    "Feature Phones",
                    "Nokia",
                    "MTR",
                    "Heemax",
                    "Karbonn",
                    "Kechaoda",
                    "Gfive",
                    "Blackbear"
                ]
            ]
        },
        {
            name: 'ESSENTIALS',
            links: [
                [
                    "Smartphones & Tablets",
                    "I KALL",
                    "Mi",
                    "Realme",
                    "Samsung",
                    "Vivo",
                    "Oppo",
                    "Apple",
                    "Tecno",
                    "Infinix",
                    "Micromax"
                ],
                [
                    "Feature Phones",
                    "Nokia",
                    "MTR",
                    "Heemax",
                    "Karbonn",
                    "Kechaoda",
                    "Gfive",
                    "Blackbear"
                ]
            ]
        },
        {
            name: 'OFFERS',
            links: [
                [
                    "Smartphones & Tablets",
                    "I KALL",
                    "Mi",
                    "Realme",
                    "Samsung",
                    "Vivo",
                    "Oppo",
                    "Apple",
                    "Tecno",
                    "Infinix",
                    "Micromax"
                ],
                [
                    "Feature Phones",
                    "Nokia",
                    "MTR",
                    "Heemax",
                    "Karbonn",
                    "Kechaoda",
                    "Gfive",
                    "Blackbear"
                ]
            ]
        },
        {
            name: 'GLOBAL SHOPPING',
            links: [
                [
                    "Smartphones & Tablets",
                    "I KALL",
                    "Mi",
                    "Realme",
                    "Samsung",
                    "Vivo",
                    "Oppo",
                    "Apple",
                    "Tecno",
                    "Infinix",
                    "Micromax"
                ],
                [
                    "Feature Phones",
                    "Nokia",
                    "MTR",
                    "Heemax",
                    "Karbonn",
                    "Kechaoda",
                    "Gfive",
                    "Blackbear"
                ]
            ]
        },
    ]


    const [hoveredItem, setHoveredItem] = useState({})
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverLink = (elem) => {
        if (elem) {
            setHoveredItem(elem)
            setIsHovered(true)
        }
        else {
            setIsHovered(false)
        }
    }

    // if(!isHovered){
    //     setHoveredItem({})
    // }
    const [isLargerThan1320]= useMediaQuery('(min-width: 1320px)')



    return (
        <Box bg={colors.primary} h={'2.5rem'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box h={'100%'}  w={isLargerThan1320?'62%': '92%'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                <UnorderedList color={'white'} w={'100%'} h={'100%'} listStyleType="none" display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} fontSize={'xs'} fontWeight={'500'}>
                    {
                        linkData.map((elem, index) => (
                            <NavLink style={{height: '100%'}} to={`/products/all/${elem.type}`} key={index}>
                            <ListItem
                                h={'100%'}
                                p={'0rem 0.5rem'}
                                display={'flex'}
                                alignItems={'center'}
                                
                                onMouseEnter={() => handleHoverLink(elem)}
                                onMouseLeave={() => handleHoverLink()}
                                _hover={{ cursor: 'pointer', backgroundColor: 'white', color: colors.primary }}
                            >{elem.name}</ListItem>
                            </NavLink>
                        ))
                    }


                </UnorderedList>
            </Box>
            {
                isHovered &&
                <Box
                    bg={'white'}
                    h={'24rem'}
                    w={'56rem'}
                    position={'absolute'}
                    transition={'1s'}
                    left={'20rem'}
                    top={'7.5rem'}
                    boxShadow={'xl'}
                    //   display={!hoveredItem || !isHovered && 'none'}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    
                >
                    <HoverBox hoveredItem={hoveredItem} />
                </Box>
            }


        </Box>
    )
}

export default NavMiddle