## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

### `npm run build`

### `npm run eject`

### Deployment

### `npm run build` fails to minify

## 100% libreria React.js
Mi desarrollo se basa en utilizar la libreria react.js y su herramienta React-bootstrap para crear componentes genericos, rapidos y reutilizables.

Utilize create-react-app para generar este proyecto, solo se encarga de las vistas e interacción con el usuario, podemos utilizar el backend que sea requerido.

El proyecto corre desde un servidor node en el puerto:3000, solo se necesita ejecutar en consola npm start para hacerlo correr.

## Organización de archivos
Para este proyecto cree una carpeta independiente por cada componente, dentro de la carpeta encontraran un index.js y su respectivo .css

## Componente con función clara
Cada componente creado solo necesita las props enviadas directamente desde la App para poder ejecutar su función y es indiferente a la cantidad, en el caso de las imagenes en el grid, se importan en el componente app las imagenes, se evian por medio de un array en las props, el componente automaticamente detecta cuantos elementos tiene el arreglo y renderiza en columnas iguales, sin importar si es 1 imagen o muchas imagenes el componente renderiza y organiza en un ROW

## React-bootstrap (mi mejor amigo)
Herramienta que agiliza mucho el flujo de trabajo al crear componentes genericos

## Diseño responsive
Los componentes y grillas se acoplan a todos los tamaños de pantalla.

## Problemas leyendo el Path de la imagen desde el archivo JSON
Para poder renderizar las imagenes en React lo que hago es importar la imagen como un componente y luego pasarlo al SRC del componente de react-bootstrap Image, el problema con el JSON surge al momento de utilizar el numero de la imagen a continuación de un PATH generico con la ubicación de la imagen, este no se renderiza, pero toda la demas infomración del json la puedo extraer con esta tecnica.

Intente solucionar el problema conviertindo el JSON suministrado a .JS y exportar la data por medio de una variable, de esta manera sigo campatando toda la información del JSON, la puedo pasar por medio de react la estructura HTML pero aun asi no renderiza la imagen que se encuentra en local.

Tambien intente tener las imagenes en la carpeta /public pero tampoco funciono.