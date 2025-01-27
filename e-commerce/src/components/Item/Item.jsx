import { Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Item = ({ id, nombre, img, precio }) => {

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
          <Text color='blue.600' fontSize='2xl'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue' padding={'25px'} marginLeft={'100px'} >
            <Link to={`/product/${id}`}>
                Ver Producto
            </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
}

export default Item