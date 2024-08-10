import Link from 'next/link'
import React from 'react'
import styles from './TrainingList.module.css'
import Image from 'next/image'
import { IoVideocam } from 'react-icons/io5'

const data = [
    {
        thumbnail: "/images/common/consultant1.png",
        name: "Foundations of PLS-SEM Using SmartPLS 4",
        expertise: [
            {skill: "Australian Eastern Daylight Time (GMT +11)"},
            {skill: "Australia"}, 
        ], 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, expedita. Ea, doloribus modi. Soluta eos debitis accusantium ad repellendus laboriosam ab eum consequatur praesentium expedita quasi fuga ut, similique explicabo illum voluptate in nihil pariatur a totam blanditiis repellat itaque nesciunt autem. Eveniet id maiores doloremque reiciendis nihil neque autem esse explicabo earum. Est, tempora!"
    },
    {
        thumbnail: "/images/common/consultant2.png",
        name: "Multilevel and Mixed Models Using Stata",
        expertise: [
            {skill: "Time in United Kingdom (GMT+1)"}, 
            {skill: "UK"},
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, expedita. Ea, doloribus modi. Soluta eos debitis accusantium ad repellendus laboriosam ab eum consequatur praesentium expedita quasi fuga ut, similique explicabo illum voluptate in nihil pariatur a totam blanditiis repellat itaque nesciunt autem. Eveniet id maiores doloremque reiciendis nihil neque autem esse explicabo earum. Est, tempora!"
    },  
    {
        thumbnail: "/images/common/consultant3.png",
        name: "Multilevel Modeling: A Second Course",
        expertise: [
            {skill: "Chicago (CDT)"}, 
            {skill: "USA"},
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, expedita. Ea, doloribus modi. Soluta eos debitis accusantium ad repellendus laboriosam ab eum consequatur praesentium expedita quasi fuga ut, similique explicabo illum voluptate in nihil pariatur a totam blanditiis repellat itaque nesciunt autem. Eveniet id maiores doloremque reiciendis nihil neque autem esse explicabo earum. Est, tempora!"
    }, 
    {
        thumbnail: "/images/common/consultant4.png",
        name: "Data Wrangling with R*",
        expertise: [
            {skill: "Australian Eastern Daylight Time (GMT +11)"}, 
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
                        <div className="d-sm-flex gap-3 gap-md-4">
                            <figure className={`${styles.thumbnail} mb-0`}>
                                <Image
                                    src="/images/icons/find-training.png"
                                    width={64} height={64}
                                    alt={consultant.name}
                                />
                            </figure>
                            <div className="col mt-3 mt-sm-0"> 
                                <div className="d-sm-flex flex-wrap justify-content-between align-items-center">
                                    <div className="col">
                                        <h2 className='lead-sm mb-1'>
                                            <Link href={"/training/detail"}>{consultant.name}</Link>
                                        </h2>

                                        <div className={`fw-medium flex-wrap gap-2 ${styles.skils}`}>
                                            {
                                                consultant.expertise.map((expert, index)=>(
                                                    <span key={index}>{expert.skill}</span> 
                                                ))
                                            } 
                                        </div>
                                    </div>
                                    <div className={` d-inline-flex align-items-center fw-medium text-muted gap-1 mt-3 mt-sm-0`}>
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
                                                <td>Seminar Dates</td>
                                                <td>23 January 2024 - 28 April 2024</td>
                                            </tr>
                                            <tr>
                                                <td>Instructors</td>
                                                <td><a href="#">Prof. Michel jhon</a>  |  <a href="#">Dr. Nathon rainbot</a></td>
                                            </tr>
                                            <tr>
                                                <td>Training Mode</td>
                                                <td>
                                                <div className="d-inline-flex align-items-center gap-1">
                                                <IoVideocam className='text-primary fs-5' />Live via Zoom
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Language</td>
                                                <td>English</td>
                                            </tr>
                                            <tr>
                                                <td>Training Category</td>
                                                <td>Research and Analysis</td>
                                            </tr>
                                            <tr>
                                                <td>Partner Institute</td>
                                                <td><a href="#">Western Sydney University </a>  |  <a href="#">Oxford University</a></td>
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