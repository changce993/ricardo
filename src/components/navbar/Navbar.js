import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {

    const links = [
        {name: 'Inicio', url: '#home'},
        {name: 'Portfolio', url: '#portfolio'},
        {name: 'Contacto', url: '#contact'},
    ]

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_container}>
                { links.map( link => {
                    return <a key={link.name} className={styles.a} href={link.url}>
                        <li> {link.name} </li>
                    </a>
                }) }
            </ul>
        </nav>
    )
}

export default Navbar
