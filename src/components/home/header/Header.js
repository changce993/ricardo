import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header id="home" className={`d-flex ${styles.header}`}>
            <div className="general_container">
                <section className={`d-flex ${styles.header_container}`}>
                    <div className={`d-flex ${styles.left}`}>
                        <h1 className={`display-4`}>Ricardo Chance<span className="dot">.</span></h1>
                        <h2 className={`display-4`}>Fullstack Developer</h2>
                        <p>Soy una persona polifacética y con un espíritu emprendedor, muy apasionado por lo que hago. Constantemente busco experiencias que me hagan crecer como profesional y en el camino ser una mejor persona.</p>
                        <div className={styles.arrow}></div>
                    </div>

                    <div className={`d-flex ${styles.right}`}>
                        <img className={styles.img} src="/images/acercade.svg" alt="" />
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
