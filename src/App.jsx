import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexto/contexto'

import './App.css'

import Menu from './componentes/menu';
import Aleatorios from './componentes/aleatorios'
import Favoritos from './componentes/favoritos'
import Listas from './componentes/listas'
import Pokemon from './componentes/pokemon'
import Capturados from './componentes/capturados'
import Usuarios from './componentes/usuarios'

function App() {


  return (
    <AppProvider> 
    <Router>
      <Menu />

      <Routes>
        <Route path="/" element={<Listas/>}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
        <Route path="/aleatorios" element={<Aleatorios/>}/>
        <Route path="/pokemon/:name" element={<Pokemon/>}/>
        <Route path="/capturados" element={<Capturados/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>

      </Routes>
    </Router>
    </AppProvider>
  );
}

export default App
