//Importo react para crear elemento
import React from "https://esm.sh/react@18.2.0"
//Importo RactDoom para crear mi componente o root
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

//Instancia el componente
const appDomElement= document.getElementById('app'); // El div app o vuelvo componente

//Creo el componente root
const root = ReactDOM.createRoot(appDomElement);
//Creo el elemento
const button = React.createElement('button', {"datta-button":123} , 'Boton 1') //args: tag, propiedades(id), 'Lo que queremos poner'
const button1 = React.createElement('button', {"datta-button":456} , 'Boton 2')
const button2 = React.createElement('button', {"datta-button":789} , 'Boton 3')

//Div para imprimir, no necesita tag(React.Fragment) o atributo
const div = React.createElement(React.Fragment, null,[button,button1,button2]); //Si algo me lo envuelve el primera parametro puede ser vacio


root.render(div)// Creo elemento y renderizo, solo lo puedo renderizar uno a la vez por que solo recibe un parametro 