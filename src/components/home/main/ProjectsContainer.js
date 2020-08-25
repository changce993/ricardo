import React from 'react'
import ProjectItem from './ProjectItem'
import styles from './Main.module.css'

const ProjectsContainer = () => {
    
    const projects = [
        {name:'Cotizador de criptomonedas', image:'cryptocurrency.png', description:'', url:'https://cryptocurrency-quote-app.netlify.app/' },
        {name:'Clima', image:'weathertoday.png', description:'', url:'https://weathertodayapp.netlify.app/' },
        {name:'Cotizador de seguros', image:'insurancequote.png', description:'', url:'https://cotizadordeseguro.netlify.app/' },
        {name:'Administrador de pacientes', image:'patientadmin.png', description:'', url:'https://patientadmin.netlify.app/' },
        {name:'Presupuesto', image:'expensecontrol.png', description:'', url:'https://expense-control.netlify.app/' }
    ]

    return (
        <section id='portfolio' className={`d-flex ${styles.section}`}>
            <div className={styles.container}>
                
                <h2>Projects<span className="dot">.</span></h2>

                <div className={`d-flex ${styles.projects_container}`}>
                    {projects.map(project => {
                        return <ProjectItem key={project.name} project={project} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProjectsContainer
