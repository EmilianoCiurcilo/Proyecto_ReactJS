import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Button, Box, Heading } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, increment, decrement } = useCounter(initialValue, stock)

  return (
    <Box ml={2}>
        <Button backgroundColor='RGBA(0, 0, 0, 0.80)' color="white" marginBottom="5px" marginRight="5px" onClick={decrement}>-</Button>
        <Heading color="black">{count}</Heading>
        <Button backgroundColor='RGBA(0, 0, 0, 0.80)' color="white" marginBottom="5px" marginRight="5px" onClick={increment}>+</Button>
        <Button backgroundColor="#48BB78" onClick={()=> onAdd(count)}>Agregar al carrito</Button>
    </Box>
  )
}

export default ItemCount