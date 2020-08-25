import React from 'react'
import styles from './Main.module.css'

const ProjectItem = ({ project }) => {
    return (
        <a href={project.url} target="_blank" className={styles.project_body}>
            <img className={styles.project_image} src={`/images/${project.image}`} alt="" />
            <strong>{project.name}</strong>
        </a>
    )
}

export default ProjectItem
