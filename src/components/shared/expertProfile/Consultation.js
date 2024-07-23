'use client'
import React, { useState } from 'react'
import styles from './styles.module.css'
import { IoSearch } from "react-icons/io5"

const Consultation = () => {
    const [permision, setPermision] = useState(true)
    console.log(permision)
    return (
        <>
            <div className="top-text">
                <h2 className="title">Would you like to offer <span>consultation</span> services?</h2>
                <div className="d-flex gap-2">
                    <div className={`${styles.permision__item} position-relative`}>
                        <input type="radio" name="create_consultation" id="yes" className="position-absolute top-0 start-0 opacity-0" onChange={()=>setPermision(true)} checked={permision} />
                        <label htmlFor="yes">Yes</label>
                    </div>
                    <div className={`${styles.permision__item} position-relative`}>
                        <input type="radio" name="create_consultation" id="No" className="position-absolute top-0 start-0 opacity-0" onChange={()=>setPermision(false)} checked={permision} />
                        <label htmlFor="No">No</label>
                    </div> 
                </div>
            </div>
            {
                permision && (
                    <div className="col-lg-9">
                        <div className="mt-4 mb-3">
                            <h4 className="fs-6">In which of your areas of expertise would you like to offer consultation service?</h4>
                            <form className="position-relative">
                                <input type="text" placeholder="Search skills..." name="search" className="form-control sm-size" /> 
                                <IoSearch className={`${styles.search__icon} ${styles.right__align}`} />
                            </form>
                        </div>
                        <ul className={styles.taglist}>
                            <li><a href="#">Architecture 1</a></li>
                            <li><a href="#">Architecture 2</a></li>
                            <li><a href="#">LMS 1</a></li>
                            <li><a href="#">LMS 2</a></li>
                        </ul>
                        
                        <div className="row g-3 mt-4">
                            <div className="col-sm-6">
                                <div className="input__box">
                                    <label>Value / 30 mins</label>
                                    <input type="text" placeholder="eg. $120 / 30min" name="fname" className="input"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <form className="position-relative">
                                    <label htmlFor='fileToUpload' className="btn btn-outline-primary d-block"><img src="/images/icons/upload-new.png"/></label>
                                    <input type="file" name="fileToUpload" id="fileToUpload" className="position-absolute top-0 start-0 opacity-0"/>
                                </form>
                            </div>
                        </div>

                    </div>

                )
            }
            {/* col */}

            <div className="mt-4">
                <button type="button" className={`${styles.consultation__btn} btn btn-primary w-100`}>Create Consultation</button>
            </div>
        </>
    )
}

export default Consultation