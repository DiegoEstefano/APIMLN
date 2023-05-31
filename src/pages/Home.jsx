import React from 'react'
import styles from './Home.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../public/assets/linx-logo.png'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <span className={styles.image}><img src={logo} alt="" /></span><h1>Portal Millennium</h1>
            </div>
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
        </div>
    )
}
