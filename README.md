# CoffeU

_CoffeU es un ecommerce de cafes hecho en React.js, este fue realizado como un proyecto para el curso online de Coderhouse._

## DEMO 🚀

https://proyecto-final-barbuto.vercel.app

### Explicacion del flujo de la app 📋

_CoffeU esta compuesta principalmente por cinco secciones las cuales son el Home que engloba el total del ItemListContainer para mostrar todos los productos en su totalidad, las dos categorys que separan a los HotCoffes de los IcedCoffes, el ItemDetail el cual nos da un perspectiva mas a detalle del producto, el Cart cuya funcion es englobar los productos seleccionados o agregados, y por ultimo el Form de contacto cuyo proposito es generar un ID de Order que va a ser almacenado junto a los datos del cliente en Firebase._

_Mi app esta compuesta por varios items y sus respectivos containers, de esta forma todo el data flow sigue una direccion unidireccional por lo que cada container engloba a un hijo o a un child por lo que la data se mueve en una sola direccion para abajo, esto es posible mediante props ,los states y el context._

## Despliegue 📦

_La app fue creada con react app por lo que debe ser corrida desde la terminal con npm start_

## LIBRERÍAS 
react-router: Librería para el ruteo de la SPA.
firebase: Servicio web que nos proporciona un backend en la nube con una fuente de datos NoSQL, la utilice para cargar los productos y tambien las ordenes de compra son guardadas alli con los los datos del cliente que se ingresan mediante el form.
bootstrap: Utilizado para darle estilos a la pagina y a los components.
Sweet Alert: Fue utilizada unicamente para dar una alerta cuando la orden de compra fue correctamente generada.


## Con ❤️ por Robertino Barbuto
