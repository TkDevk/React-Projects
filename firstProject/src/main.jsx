import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App' // Es un componente por eso el   <App /> y el {} decirle que exporto direcamente App
import './main.css'



const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.Fragment>
    <App />

  </React.Fragment>
)

//Es mejor crear los componentes por fuera, app.jsx es un componente