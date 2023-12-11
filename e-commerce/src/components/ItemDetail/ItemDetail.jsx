import React, { useState } from 'react'
import { Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({categoria, descripcion, img, nombre, precio,  id}) => {
    const [quantity, setQuantity] = useState(0)

    const onAdd = (quantity) => {
        setQuantity(quantity)
    }

  return (
    <Card maxW='sm' >
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          borderRadius='lg'
          boxSize='100%'
          objectFit='cover' 
          h='400px' 
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Text color='black' fontSize='80%'>
            {descripcion}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        {quantity > 0 ? <Link to={'/cart'}>ir al carrito</Link> :
        <ItemCount initialValue={1} stock={5} onAdd={onAdd}/>
        }
      </CardFooter>
    </Card>
  )
}

export default ItemDetail