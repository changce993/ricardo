import React from 'react'
import Objetivo from './Objetivo'
import ProjectsContainer from './ProjectsContainer'
import Cv from './Cv'

const Main = () => {

    return (
        <main>
            <div className="general_container">
                <Objetivo />
                <ProjectsContainer />
                <Cv />
            </div>
        </main>
    )
}

export default Main
