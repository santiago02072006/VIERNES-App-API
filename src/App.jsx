import { useState } from 'react'


import './App.css'
import Aleatorios from './componentes/aleatorios'
import Favoritos from './componentes/favoritos'
import Listas from './componentes/listas'
import Pokemon from './componentes/pokemon'
import Capturados from './componentes/capturados'
import Usuarios from './componentes/usuarios'

function App() {


  return (
    <>
      <h1>app</h1>
      <Aleatorios />
      <Favoritos />
      <Listas />
      <Pokemon />
      <Capturados />
      <Usuarios />
    </>
  )
}

export default App
