import React from 'react'
import styles from './Main.module.css'

const Objetivo = () => {
    return (
        <section className={`d-flex ${styles.section}`}>
            <div className={styles.left}>
                <h2>Objetivo<span className="dot">.</span></h2>
                <p className={styles.p}>Formar parte de un equipo donde pueda aplicar mis habilidades técnicas y desarrollar nuevas habilidades profesionales a modo de reto y superación.</p>
            </div>

            <div className={styles.right}>
                <img className={styles.img} src="/images/objetivo.svg" alt="" />
            </div>

        </section>
    )
} 

export default Objetivo
