import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const user = "integracao"
const pass = "7oPhURNx"
import api from './services/api'
import ListaPedidoVenda from './pages/ListaPedidoVenda'
import AprovaPedido from './pages/AprovaPedido'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/listapedidovenda' element={<ListaPedidoVenda/>}/>
          <Route path='/aprova' element={<AprovaPedido/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
