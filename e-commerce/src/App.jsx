import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'


function App () {
return(
  <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title='DemTech'/>} />
          <Route path={'/category/:categoryId'} element={<ItemListContainer/>} />
          <Route path={'/product/:itemId'} element={<ItemDetailContainer/>} />
          <Route path={'/cart/'} element={<h2>Su compra se realizo con exito y sin estilos</h2>}/>
          <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
)
}

export default App
