import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Button, Box, Heading, Flex } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, increment, decrement } = useCounter(initialValue, stock)

  return (
    <Flex ml={2}>
        <Button backgroundColor='RGBA(0, 0, 0, 0.80)' color="white" marginBottom="5px" marginRight="15px" onClick={decrement}>-</Button>
        <Heading color="black">{count}</Heading>
        <Button backgroundColor='RGBA(0, 0, 0, 0.80)' color="white" marginBottom="5px" marginRight="15px" marginLeft="15px" onClick={increment}>+</Button>
        <Button backgroundColor="#48BB78" onClick={()=> onAdd(count)}>Agregar al carrito</Button>
    </Flex>
  )
}

export default ItemCount