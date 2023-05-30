import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/aprova'>Aprovar Pedido</NavLink>
                </li>
                <li>
                    <NavLink to='/listapedidovenda'>Buscar pedido</NavLink>
                </li>
            </ul>
        </div>
    )
}
