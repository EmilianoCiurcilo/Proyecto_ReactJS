# DemTech

## Venta de Periféricos de PC

## Logo
![image](/e-commerce/src/assets/img/logo.png)

## Vista previa
![gif](/e-commerce/src/assets/img/proyecto-final.gif)

## Deploy
[DemTech](https://github.com/EmilianoCiurcilo/curso-react/tree/main/e-commerce)

## Descripción
Este es mi primer proyecto creado con ReactJS y FireBase, es un proyecto que me gusto mucho hacerlo y aprendi muchas cosas sobre el uso de este Framework. Tambien aprendi a subir mis productos a una base de datos como lo es FireBase. Es un proyecto que lo voy a usar para mi portfolio y tambien lo usare como referencia para futuros proyectos.

## Construido
React
Firebase

## Dependencias
[chakra-ui](https://chakra-ui.com)
[sweetalert2](https://sweetalert2.github.io)
[react-router-dom](https://www.npmjs.com/package/react-router-dom)
[react-icons](https://react-icons.github.io/react-icons/)

## Instalacion

# Lista de instalación:
* Clonar Repositorio:
    * git clone https://github.com/EmilianoCiurcilo/curso-react/tree/main/e-commerce
* Moverse a la carpeta raíz del proyecto:
    * cd e-commerce
* Instalar las dependencias
    * npm install
* Compilar
    * npm run dev (Clickear el link manteniendo la tecla ctrl pulsada)

## Estructura del proyecto:

### NavBar
    Logo con link al inicio
    Categoria de los productos
    CartWidjet con link al carrito

### Body
    Nombre de la Tienda
    Productos en estilo Card

### Navegacion
    Presionando el Logo de la tienda lo redirigira al Menú Principal
    Presionando las categorias se desplegara una lista con nuestros productos
    Presionando el widjet del carrito lo llevara a su carrito de compras actual

    Presionando Ver Producto le mostrara los detalles
    Presionando el boton Agregar al carrito sumara el producto que selecciono a su carrito de compras actual
    Presionando Ir al carrito lo llevara a ver su carrito de compras actual

    Presionando el Boton X dentro del carrito de compras eliminara su producto actual
    Presionando Vaciar carrito borrara todos los productos del carrito de compras actual
    Presionando Finalizar compra lo llevara a un formulario para verificar sus datos

    Completando el formulario final al presionar el boton Comprar se abrira una alerta dando éxito a su compra y otorgandole un numero de orden de compra

### Item
    Contiene el resumen de cada producto
        Imagen
        Producto
        Precio
        Boton para ver el detalle del producto

### ItemDetail
    Contiene el detalle del producto
        Imagen
        Producto
        Detalle del producto
        Precio
        Botones para sumar o restar la cantidad de unidades que desea comprar del producto
        Boton para agregar el producto al carrito

### Carrito 
    Contiene el detalle de su compra
        Nombre del producto seleccionado
        Cantidad del producto seleccionado
        Precio unitario del producto seleccionado
        Subtotal del producto seleccionado
        Precio total de totos sus productos

### Formulario de compra
    Para completar correctamente este formulario se deben llenar cuatro campos:
        Primer Campo: Nombre
            Debe completarse con su nombre completo para identificarlo a la hora de entregarle el producto
        Segundo Campo: Telefono
            Debe completarse con su numero de telefono por cualquier inconveniente a la hora de la entrega del producto
        Tercer y Cuarto Campo: Email
            Debe completarse con su email preferido para que reciba nuestras mejores ofertas


## Contacto
ciurciloemiliano2003@gmail.com
https://www.linkedin.com/in/emiliano-ciurcilo-b955792a0/