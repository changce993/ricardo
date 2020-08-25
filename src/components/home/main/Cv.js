import React from 'react'
import styles from './Main.module.css'

const Cv = () => {
    return (
        <section className={`d-flex ${styles.cv_container}`}>
            <a className={styles.cv} href="/pdf/cv-ricardo-developer.pdf" target="_blank">Descarga mi cv</a>
        </section>
    )
}

export default Cv
