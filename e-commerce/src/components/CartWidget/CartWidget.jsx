import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    return (
        <Box>

            {getQuantity() !== 0 && (
                
                
                <Box width={'40%'} ml={4} display="flex" align="center" justify={'space-around'}>
                <FaCartPlus size={50} />
                <span className='cartQuantity'>{getQuantity()}</span>
                </Box>
                )
            }
        </Box>
    )
}

export default CartWidget