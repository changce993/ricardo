import React from 'react'
import styles from './Footer.module.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp, faGithub, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    const rrss = [
        {name: faLinkedinIn, url: 'https://www.linkedin.com/in/changcer/'},
        {name: faInstagram, url: 'https://www.instagram.com/ux.chann'},
        {name: faGithub, url: 'https://www.github.com/changce993'},
        {name: faEnvelope, url: 'mailto: changcer@gmail.com'},
        {name: faWhatsapp, url: 'https://api.whatsapp.com/send?phone=+541166065718'}
    ]


    return (
        <footer id="contact" className={styles.footer}>
            <section className={`general_container d-flex ${styles.footer_container}`}>
                <div className={styles.left}>
                    <p>Ricardo Chance © 2020</p>
                </div>
                
                
                
                <div className={styles.center}>
                    <p>Buenos Aires - Argentina</p>
                </div>
                
                
                
                <div className={styles.right}>
                    {rrss.map(link => {
                        return <a key={link.url} className={styles.rrss} href={link.url}> <FontAwesomeIcon className="fa-lg" icon={link.name} color="#fff" /> </a>
                    })}
                </div>
            </section>
        </footer>
    )
}

export default Footer