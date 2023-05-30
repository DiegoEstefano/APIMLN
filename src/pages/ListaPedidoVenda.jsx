import React from 'react'

import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

const url = import.meta.env.VITE_LISTAPEDIDOVENDAURL

const user = import.meta.env.VITE_USER
const pass = import.meta.env.VITE_PASS

import api from '../services/api'

export default function ListaPedidoVenda() {

    const [dados, setDados] = useState()
    const [vPedido, setVPedidos] = useState({ text: '', value: '' })

   const listaPedidoVendaUrl = `${url}${vPedido.value}`

    useEffect(() => {
        if (vPedido.value) {
            async function pedidos() {
                api.login(user,pass)
                const data = await api.get(listaPedidoVendaUrl)
                setDados(data.value[0])
            }
            pedidos()
        }
    }, [vPedido.value])

    const handleSubmit = (e) => {
        e.preventDefault();
        setVPedidos({ text: '', value: vPedido.text })
    }
    console.log(dados)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={vPedido.text} name='pesquisa' placeholder='Digite sua busca' onChange={(e) => setVPedidos({ ...vPedido, text: e.target.value })} />
                </label>
                <button type="submit">
                    Procurar
                </button>
            </form>
            <div>
                {dados &&
                    <>
                        <p>Cliente: {dados.cliente}</p>
                        <p>N Pedido: {dados.cod_pedidov}</p>
                        <p>PedidoV: {dados.vpedido}</p>
                    </>
                }
            </div>
            <NavLink to='/'>Voltar</NavLink>
        </>
    )
}
