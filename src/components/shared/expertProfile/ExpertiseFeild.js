import React from 'react'
import styles from './styles.module.css'
import { IoSearch } from "react-icons/io5";

const ExpertiseFeild = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <h4 className='fs-6 text-dark'>Fields</h4>
                    <div className={styles.timeline__block}>
                        <form className={styles.timeline__search}>
                            <div className="position-relative"> 
                                <input type="text" placeholder="Search by field of expertise" name="search" />
                                <IoSearch className={styles.search__icon} />
                            </div>
                        </form>
                        <div className={styles.timeline__according}>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Architecture'>Architecture</label>
                                    <input type="checkbox" id="Architecture" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Art'>Art</label>
                                    <input type="checkbox" id="Art" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Biology'>Biology</label>
                                    <input type="checkbox" id="Biology" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Business'>Business</label>
                                    <input type="checkbox" id="Business" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Chemistry'>Chemistry</label>
                                    <input type="checkbox" id="Chemistry" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Computer Programming'>Computer Programming</label>
                                    <input type="checkbox" id="Computer Programming" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Data Analysis'>Data Analysis</label>
                                    <input type="checkbox" id="Data Analysis" className='form-check-input' />
                                </div> 
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <h4 className='fs-6 text-dark'>Categories of Expertise</h4>
                    <div className={styles.timeline__block}>
                        <form className={styles.timeline__search}>
                            <div className="position-relative"> 
                                <input type="text" placeholder="Search by categories" name="search" />
                                <IoSearch className={styles.search__icon} />
                            </div>
                        </form>
                        <div className={styles.timeline__according}>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Accreditation Specialists'>Accreditation Specialists</label>
                                    <input type="checkbox" id="Accreditation Specialists" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Curriculum Experts'>Curriculum Experts</label>
                                    <input type="checkbox" id="Curriculum Experts" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Program Designers'>Program Designers</label>
                                    <input type="checkbox" id="Program Designers" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='LMS Experts'>LMS Experts</label>
                                    <input type="checkbox" id="LMS Experts" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Industry Experts'>Industry Experts</label>
                                    <input type="checkbox" id="Industry Experts" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Finance Experts'>Finance Experts</label>
                                    <input type="checkbox" id="Finance Experts" className='form-check-input' />
                                </div> 
                            </div>
                            <div className={styles.checkbox__item}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Policy Experts'>Policy Experts</label>
                                    <input type="checkbox" id="Policy Experts" className='form-check-input' />
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <h4 className='fs-6 text-dark'>Expertise</h4>
                    <div className={`${styles.timeline__block} p-4`}>
                        <ul className={`${styles.expertise__list} list-unstyled ps-0 d-flex flex-wrap gap-2`}>
                            <li><a href="#">Architecture 1<img src="/images/icons/close-i.png"/></a></li>
                            <li><a href="#">Architecture 2<img src="/images/icons/close-i.png"/></a></li>
                        </ul>
                        <ul className={`${styles.expertise__list} list-unstyled ps-0 d-flex flex-wrap gap-2`}>
                            <li><a href="#">LMS 1<img src="/images/icons/close-i.png"/></a></li>
                            <li><a href="#">LMS 2<img src="/images/icons/close-i.png"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertiseFeild