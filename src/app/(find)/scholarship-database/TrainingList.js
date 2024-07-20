import Link from 'next/link'
import React from 'react'
import styles from './TrainingList.module.css'
import Image from 'next/image'

const data = [
    {
        thumbnail: "/images/common/database1.png",
        name: "International Research Scholarships",
        expertise: [
            {skill: "University of Melbourne"},
            {skill: "University of Melbourne"}, 
        ], 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, expedita. Ea, doloribus modi. Soluta eos debitis accusantium ad repellendus laboriosam ab eum consequatur praesentium expedita quasi fuga ut, similique explicabo illum voluptate in nihil pariatur a totam blanditiis repellat itaque nesciunt autem. Eveniet id maiores doloremque reiciendis nihil neque autem esse explicabo earum. Est, tempora!"
    }, 
    {
        thumbnail: "/images/common/database2.png",
        name: "Graduate Research Scholarships",
        expertise: [
            {skill: "Western Sydney University"}, 
            {skill: "Australia"},
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, expedita. Ea, doloribus modi. Soluta eos debitis accusantium ad repellendus laboriosam ab eum consequatur praesentium expedita quasi fuga ut, similique explicabo illum voluptate in nihil pariatur a totam blanditiis repellat itaque nesciunt autem. Eveniet id maiores doloremque reiciendis nihil neque autem esse explicabo earum. Est, tempora!"
    },    
    {
        thumbnail: "/images/common/database3.png",
        name: "Graduate Research Scholarships",
        expertise: [
            {skill: "Sydney University"}, 
            {skill: "Australia"},
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, expedita. Ea, doloribus modi. Soluta eos debitis accusantium ad repellendus laboriosam ab eum consequatur praesentium expedita quasi fuga ut, similique explicabo illum voluptate in nihil pariatur a totam blanditiis repellat itaque nesciunt autem. Eveniet id maiores doloremque reiciendis nihil neque autem esse explicabo earum. Est, tempora!"
    },   
    {
        thumbnail: "/images/common/database2.png",
        name: "Graduate Research Scholarships",
        expertise: [
            {skill: "Sydney University"}, 
            {skill: "Australia"},
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, expedita. Ea, doloribus modi. Soluta eos debitis accusantium ad repellendus laboriosam ab eum consequatur praesentium expedita quasi fuga ut, similique explicabo illum voluptate in nihil pariatur a totam blanditiis repellat itaque nesciunt autem. Eveniet id maiores doloremque reiciendis nihil neque autem esse explicabo earum. Est, tempora!"
    },  
]
  

   
const ConsultantList = () => {
  return (
    <>
    
        <ul className="list-unstyled ps-0 mb-0">
            {
                data.map((consultant, index)=>(
                    <li className="p-4 border-bottom" key={index}>
                        <div className="d-flex gap-3 gap-md-4">
                            <figure className={`${styles.thumbnail} mb-0`}>
                                <Image
                                    src={consultant.thumbnail}
                                    width={64} height={64}
                                    alt={consultant.name}
                                />
                            </figure>
                            <div className="col"> 
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="col">
                                        <h2 className='lead-sm mb-1'>
                                            <Link href={"/training/detail/"}>{consultant.name}</Link>
                                        </h2>

                                        <div className={`d-inline-flex align-items-center fw-medium flex-wrap gap-2 ${styles.skils}`}>
                                            {
                                                consultant.expertise.map((expert, index)=>(
                                                    <span key={index}>{expert.skill}</span> 
                                                ))
                                            } 
                                        </div>
                                    </div>
                                    <div className={` d-inline-flex align-items-center fw-medium text-muted gap-1`}>
                                        <Link href={"#"} className="btn btn-primary">Register Now</Link>
                                    </div>
                                </div>
                                <div className=" mt-3">
                                    <p className="text-dark ">
                                        {consultant.description}
                                    </p>
                                    <table className={`${styles.data__table} table`}>
                                        <tbody>
                                            <tr>
                                                <td>Application Deadline</td>
                                                <td>23 January 2024 - 28 April 2024</td>
                                            </tr>
                                            <tr>
                                                <td>Study area</td>
                                                <td>Art, Architecture, Business</td>
                                            </tr>
                                            <tr>
                                                <td>Study Level</td>
                                                <td>Master of Philosophy, Doctors of Philosophy, Master by research</td>
                                            </tr>
                                            <tr>
                                                <td>Student type</td>
                                                <td>International</td>
                                            </tr>
                                            <tr>
                                                <td>Scholarship Value</td>
                                                <td>$35,000 / Yearly</td>
                                            </tr>
                                            <tr>
                                                <td>Find supervisor</td>
                                                <td><a href="#">Click Here</a></td>
                                            </tr>
                                            <tr>
                                                <td>Application Process</td>
                                                <td><a href="#">Click Here</a></td>
                                            </tr>
                                            <tr>
                                                <td>Inquiry to Institution</td>
                                                <td><a href="#">Click Here</a></td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                
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