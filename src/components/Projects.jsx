import React from 'react'
import './project.css'

function Projects() {
    const projects = [
        { title: 'College Admission System', tech: 'MERN Stack', icon: 'src/images/admission.png', features: ['CRUD Operations', 'REST APIs', 'Responsive UI'] },
        { title: 'Employee Management', tech: 'React & Node.js', icon: 'src/images/employee.png', features: ['Employee Data', 'Attendance Tracking', 'Reports'] },
        { title: 'Laundry Management', tech: 'Full Stack', icon: 'src/images/laundry.png', features: ['Order Management', 'Status Tracking', 'Real-time Updates'] }
    ]

    return (
        <>
            <div className='projects-container'>
                <h1 style={{ fontWeight: "100" }}>Projects</h1>
                <div className='projects-grid'>
                    {projects.map((project, index) => (
                        <div key={index} className='project-card'>
                            <img src={project.icon} alt={project.title} className='project-icon' />
                            <h3>{project.title}</h3>
                            <p className='tech'>{project.tech}</p>
                            <div className='features'>
                                {project.features.map((feature, idx) => (
                                    <span key={idx} className='feature-tag'>{feature}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects