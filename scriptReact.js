//Estoy creando un componente atravez del div

//Aqui solo importe reactDom y lo use para crear el componente root
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

 //Importo react si instalar nada

 //Atrapo mi id app

const appDomElement = document.getElementById('app');


const root = ReactDOM.createRoot(appDomElement); // Le estoy diciendo que haga un compenente a appDomElement
root.render('Estoy renderizando desde el componente root')



