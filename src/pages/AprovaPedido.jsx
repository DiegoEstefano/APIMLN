import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

import api from '../services/api'
const user = import.meta.env.VITE_USER
const pass = import.meta.env.VITE_PASS
const url = import.meta.env.VITE_APROVAPEDIDO

export default function AprovaPedido() {

  const [pedido, setPedido] = useState({ text: '', pedidov: undefined })

  useEffect(() => {
    if (pedido.pedidov) {
      async function aprovaPedido() {
        api.login(user, pass)
        const data = await api.post(
          url, JSON.stringify(pedido.pedidov
          )
        )
        console.log(pedido.pedidov)

      }
      aprovaPedido()
    }
  }, [pedido.pedidov])

  const refinaPedido = () => {
    const pedidoData = pedido.text.split(',')
    const result = pedidoData.map((pedido) => ({ pedidov: Number(pedido.trim()) }))
    return result
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPedido({ text: '', pedidov: refinaPedido() })
  }



  return (
    <div>
      AprovaPedido
      <form onSubmit={handleSubmit}>
        <label>
          <textarea type="text" name='pesquisa' placeholder='Digite sua busca' onChange={(e) => setPedido({ ...pedido, text: e.target.value })} />
        </label>
        <button type="submit">
          Procurar
        </button>
      </form>
      <li>
        <NavLink to='/'>Voltar</NavLink>
      </li>
    </div>

  )

}
