import Link from 'next/link'
import React from 'react'
import styles from './Consultant.module.css'
import Image from 'next/image'

const data = [
    {
        thumbnail: "/images/common/consultant1.png",
        name: "Professor Michael Kassiou",
        expertise: [
            {skill: "Curriculum Expert"},
            {skill: "Public Health"},
            {skill: "Australia"},
        ],
        description: "Prof. Miles esther is an accomplished Curriculum Development Specialist with a distinguished career in education and a track record of providing consultation services"
    },
    {
        thumbnail: "/images/common/consultant2.png",
        name: "Professor Miles Esther",
        expertise: [
            {skill: "Accreditation Specialists"},
            {skill: "Agricultural Engineering"},
            {skill: "Bangladesh"},
        ],
        description: "Prof. Miles esther is an accomplished Curriculum Development Specialist with a distinguished career in education and a track record of providing consultation services"
    },
    {
        thumbnail: "/images/common/consultant3.png",
        name: "Professor Miles Esther",
        expertise: [
            {skill: "Program Design"},
            {skill: "Communication Studies"},
            {skill: "USA"},
        ],
        description: "Prof. Miles esther is an accomplished Curriculum Development Specialist with a distinguished career in education and a track record of providing consultation services"
    },
    {
        thumbnail: "/images/common/consultant4.png",
        name: "Professor Miles Esther",
        expertise: [
            {skill: "Program Design"},
            {skill: "Communication Studies"},
            {skill: "USA"},
        ],
        description: "Prof. Miles esther is an accomplished Curriculum Development Specialist with a distinguished career in education and a track record of providing consultation services"
    },
    {
        thumbnail: "/images/common/consultant5.png",
        name: "Professor Miles Esther",
        expertise: [
            {skill: "Program Design"},
            {skill: "Communication Studies"},
            {skill: "USA"},
        ],
        description: "Prof. Miles esther is an accomplished Curriculum Development Specialist with a distinguished career in education and a track record of providing consultation services"
    },
]
  

   
const ConsultantList = () => {
  return (
    <>
        <ul className="list-unstyled ps-0 mb-0">
            {
                data.map((consultant, index)=>(
                    <li className="p-3 p-sm-4 border-bottom" key={index}>
                        <div className="d-sm-flex gap-3 gap-md-4">
                            <figure className={`${styles.thumbnail} mb-0`}>
                                <Image
                                    src={consultant.thumbnail}
                                    width={64} height={64}
                                    alt={consultant.name}
                                />
                            </figure>
                            <div className="col mt-3 mt-sm-0"> 
                                <h2 className='lead-sm mb-1'>
                                    <Link href={"#"}>{consultant.name}</Link>
                                </h2>
                                <div className="d-flex flex-wrap justify-content-between align-items-center">
                                    <div className={`d-inline-flex align-items-center fw-medium flex-wrap gap-2 ${styles.skils}`}>
                                        {
                                            consultant.expertise.map((expert, index)=>(
                                                <span key={index}>{expert.skill}</span> 
                                            ))
                                        } 
                                    </div>
                                    <div className={` d-inline-flex align-items-center fw-medium text-muted gap-1`}>
                                        <span>Hourly:</span>
                                        <span className="text-primary fs-5">$200</span>
                                    </div>
                                </div>
                                <div className=" mt-2">
                                    <p className="text-dark mb-0">
                                        {consultant.description}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </li> 
                ))
            }
        </ul>
    </>
  )
}

export default ConsultantList