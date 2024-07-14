import Ratings from '@/components/shared/ratings/Ratings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
    {
        title: "Accreditation Specialist",
        review: "45",
        thumbnail: "/images/common/categories1.jpg"
    },
    {
        title: "Curriculum Experts",
        review: "33",
        thumbnail: "/images/common/categories2.jpg"
    },
    {
        title: "Program Designers",
        review: "53",
        thumbnail: "/images/common/categories3.jpg"
    },
    {
        title: "LMS Experts",
        review: "66",
        thumbnail: "/images/common/categories4.jpg"
    },
    {
        title: "Industry Experts",
        review: "56",
        thumbnail: "/images/common/categories5.jpg"
    },
    {
        title: "Finance Experts",
        review: "45",
        thumbnail: "/images/common/categories6.jpg"
    },
    {
        title: "Project Managers",
        review: "48",
        thumbnail: "/images/common/categories7.jpg"
    },
    {
        title: "Scholarships Advisor",
        review: "52",
        thumbnail: "/images/common/categories8.jpg"
    },
]

const Categories = () => {
    return (
        <>
            <div className="py-5 bg-gradient">
                <div className="container py-md-4"> 
                    <div className="mb-4"> 
                        <p className="top__title text-center text-primary text-uppercase fw-medium mb-2">Categories</p>
                        <h2 className="text-center fs-1">Browse Experts by Category of Expertise</h2>
                    </div>
                    <div className="row g-4 gy-sm-5">
                        {
                            data.map((category, index)=>(
                                <div key={index} className="col-md-3 col-sm-6">
                                    <div className="categories-block">
                                        <div className="mb-3">
                                            <Link href={"#"} className="d-block">
                                                <Image src={category.thumbnail} width={312} height={312} alt={category.title} /> 
                                            </Link>
                                        </div>
                                        <div className="categories-text">
                                            <h3 className="fs-5">
                                                <Link href={"#"}>{category.title}</Link>
                                            </h3>
                                            <div className="d-flex align-items-center gap-2 mb-3">
                                                <Ratings />
                                                <div className="fs-12 text-muted">{category.review} Review</div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <Image src="/images/common/available-img.png" width={84} height={36} alt="group" />  
                                            <div className="available-text fw-medium">+ 120 Available</div>
                                        </div>
                                    </div>
                                </div> 
                            ))
                        }
                         
                          
                    </div> 
                </div>
            </div>


        </>
    )
}

export default Categories