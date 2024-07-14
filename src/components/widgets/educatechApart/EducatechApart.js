'use client'
import React, { useState } from 'react'
import styles from "./EducatechApart.module.css"
import { BsPatchCheck } from "react-icons/bs";
import Link from 'next/link';

const EducatechApart = () => {
    const [active_tab, setActiveTab] = useState('clients');
 
    return (
        <>
            <div className="py-5">
                <div className="container py-md-4"> 
                    <div className="mb-4"> 
                        <p className="top__title text-center text-primary text-uppercase fw-medium mb-2">EDUCATECH SETS</p>
                        <h2 className="text-center fs-1">What sets EduExHub Apart?</h2>
                    </div>
                    <div className="tabbable-panel">
                        <ul className={`nav nav-tabs mb-4 mb-lg-5 justify-content-center ${styles.nav_tab}`} id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link fs-4 fw-normal border-0 m-0 ${active_tab === 'clients' ? styles.active : ''}`} onClick={()=>setActiveTab('clients')}>For Clients</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link fs-4 fw-normal border-0 m-0 ${active_tab === 'experts' ? styles.active : ''}`} onClick={()=>setActiveTab('experts')}>For Experts</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className={`tab-pane fade ${active_tab == 'clients' ? 'show active' : ''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row g-4">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className={styles.icon}>
                                                <BsPatchCheck />
                                            </div>
                                            <div className="col">
                                                <h3 className="fs-5">A Wealth of Expertise</h3>
                                                <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo, sed molestias dolorum, libero laborum magnam enim vel, debitis sit corrupti quaerat iure consequatur. Iste?</p>
                                                <Link href="#" className="link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className={styles.icon}>
                                                <BsPatchCheck />
                                            </div>
                                            <div className="col">
                                                <h3 className="fs-5">Global Accessibility</h3>
                                                <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo, sed molestias dolorum, libero laborum magnam enim vel, debitis sit corrupti quaerat iure consequatur. Iste?</p>
                                                <Link href="#" className="link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className={styles.icon}>
                                                <BsPatchCheck />
                                            </div>
                                            <div className="col">
                                                <h3 className="fs-5">Comprehensive Support</h3>
                                                <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo, sed molestias dolorum, libero laborum magnam enim vel, debitis sit corrupti quaerat iure consequatur. Iste?</p>
                                                <Link href="#" className="link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className={styles.icon}>
                                                <BsPatchCheck />
                                            </div>
                                            <div className="col">
                                                <h3 className="fs-5">Intuitive User Experience</h3>
                                                <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo, sed molestias dolorum, libero laborum magnam enim vel, debitis sit corrupti quaerat iure consequatur. Iste?</p>
                                                <Link href="#" className="link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className={styles.icon}>
                                                <BsPatchCheck />
                                            </div>
                                            <div className="col">
                                                <h3 className="fs-5">Secure Transactions</h3>
                                                <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo, sed molestias dolorum, libero laborum magnam enim vel, debitis sit corrupti quaerat iure consequatur. Iste?</p>
                                                <Link href="#" className="link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className={styles.icon}>
                                                <BsPatchCheck />
                                            </div>
                                            <div className="col">
                                                <h3 className="fs-5">Intuitive User Experience</h3>
                                                <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo, sed molestias dolorum, libero laborum magnam enim vel, debitis sit corrupti quaerat iure consequatur. Iste?</p>
                                                <Link href="#" className="link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${active_tab == 'experts' ? 'show active' : ''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row g-4">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className={styles.icon}>
                                                <BsPatchCheck />
                                            </div>
                                            <div className="col">
                                                <h3 className="fs-5">A Wealth of Expertise</h3>
                                                <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo, sed molestias dolorum, libero laborum magnam enim vel, debitis sit corrupti quaerat iure consequatur. Iste?</p>
                                                <Link href="#" className="link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className={styles.icon}>
                                                <BsPatchCheck />
                                            </div>
                                            <div className="col">
                                                <h3 className="fs-5">Global Accessibility</h3>
                                                <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo, sed molestias dolorum, libero laborum magnam enim vel, debitis sit corrupti quaerat iure consequatur. Iste?</p>
                                                <Link href="#" className="link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className={styles.icon}>
                                                <BsPatchCheck />
                                            </div>
                                            <div className="col">
                                                <h3 className="fs-5">Comprehensive Support</h3>
                                                <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo, sed molestias dolorum, libero laborum magnam enim vel, debitis sit corrupti quaerat iure consequatur. Iste?</p>
                                                <Link href="#" className="link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className={styles.icon}>
                                                <BsPatchCheck />
                                            </div>
                                            <div className="col">
                                                <h3 className="fs-5">Intuitive User Experience</h3>
                                                <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo, sed molestias dolorum, libero laborum magnam enim vel, debitis sit corrupti quaerat iure consequatur. Iste?</p>
                                                <Link href="#" className="link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EducatechApart