import Link from 'next/link'
import React from 'react'
import styles from "./Style.module.css"

const ProjectItemCard = ({project}) => {
  return (
    <li className="p-4 border-bottom">
        <h2 className='lead-sm'>
            <Link href={"#"}>{project.title}</Link>
        </h2>
        <div className="d-flex justify-content-between align-items-center">
            <div className={`d-inline-flex small fw-medium flex-wrap gap-3 ${styles.muted__color}`}>
                <span>{project.category}</span>
                <span>{project.posted}</span>
                <span>{project.country}</span>
            </div>
            <div className={`${styles.muted__color} d-inline-flex align-items-center fw-medium text-muted gap-1`}>
                <span>Hourly:</span>
                <span className="text-primary fs-5">{project.price}</span>
            </div>
        </div>
        <div className="border-top border-light-subtle pt-3 mt-2">
            <p className="text-dark">
                {project.description}
            </p>
            <div className={`${styles.taglist} d-flex flex-wrap gap-2`}>
                {
                    project.tags.map((tag, index)=>(
                        <span key={index}>{tag.name}</span>
                    ))
                }
            </div>
        </div>
    </li> 
  )
}

export default ProjectItemCard