import { Flex, Box,  Spacer, Heading, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { FaCartPlus } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const NavBar = () => {
  return (
    <Flex p="4" bg="RGBA(0, 0, 0, 0.92)" align="center">
      <Box p="2">
        <Heading size="md" color="white">
          <Link to={'/'}>
            <img src={logo} width={'70%'} alt="Logo" />
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Box display="flex" alignItems="center">
        <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} width="180px" marginRight="10px" >
          Categorías
        </MenuButton>
        <MenuList>
            <MenuItem><Link to={'/category/mouse'}>Mouses</Link></MenuItem>
            <MenuItem><Link to={'/category/teclado'}>Teclados</Link></MenuItem>
            <MenuItem><Link to={'/category/auricular'}>Auriculares</Link></MenuItem>
            <MenuItem><Link to={'/category/microfono'}>Microfonos</Link></MenuItem>
            <MenuItem><Link to={'/category/camara'}>Camaras</Link></MenuItem>
            <MenuItem><Link to={'/category/joystick'}>Joysticks</Link></MenuItem>
        </MenuList>
        </Menu>
        <Button>
          <Link to={'/cart'}>{<FaCartPlus/>}</Link>
        </Button>
      </Box>
    </Flex>
  )
}

export default NavBar