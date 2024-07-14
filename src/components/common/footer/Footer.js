import React from 'react'
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className={`bg-primary pt-5 ${styles.footer}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-9">
                            <div className="footer-menu">
                                <div className="row g-4">
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                        <div className="footer-block">
                                            <p className="fs-6 fw-medium text-white">For Clients</p>
                                            <ul className="list-unstyled ps-0 mb-0">
                                                <li><a href="#">View Projects</a></li>
                                                <li><a href="#">Find Experts</a></li>
                                                <li><a href="#">Services</a></li>
                                                <li><a href="#">All Categories</a></li>
                                                <li><a href="#">Packages</a></li>
                                                <li><a href="#">Profile</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                        <div className="footer-block">
                                            <p className="fs-6 fw-medium text-white">For Experts</p>
                                            <ul className="list-unstyled ps-0 mb-0">
                                                <li><a href="#">Profile</a></li>
                                                <li><a href="#">All Services</a></li>
                                                <li><a href="#">Following Clients</a></li>
                                                <li><a href="#">Packages</a></li>
                                                <li><a href="#">Trust, Safety & Security</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                        <div className="footer-block">
                                            <p className="fs-6 fw-medium text-white">Company</p>
                                            <ul className="list-unstyled ps-0 mb-0">
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Leadership</a></li>
                                                <li><a href="#">Investor Relations</a></li>
                                                <li><a href="#">Investor Relations</a></li>
                                                <li><a href="#">Trust, Safety & Security</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                        <div className="footer-block">
                                            <p className="fs-6 fw-medium text-white">Resources</p>
                                            <ul className="list-unstyled ps-0 mb-0">
                                                <li><a href="#">Help & Support</a></li>
                                                <li><a href="#">Success Stories</a></li>
                                                <li><a href="#">ConsultantEdu Reviews</a></li>
                                                <li><a href="#">Resources</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Community</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="footer-block play">
                                <p className="fs-6 fw-medium text-white">Download Apps</p>
                                <div className="d-flex gap-3">
                                    <Link href="#" className='d-inline-block'>
                                        <Image 
                                            src="/images/icons/playstore-logo.png"
                                            width={48} height={48} alt='Playstore'
                                        />
                                    </Link>
                                    <Link href="#" className='d-inline-block'>
                                        <Image 
                                            src="/images/icons/appstore-logo.png"
                                            width={48} height={48} alt='App store'
                                        />
                                    </Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className={`${styles.copy_right} mt-4 mt-sm-5`}>
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-md-6 col-sm-6 order-sm-2">
                                <ul className={`list-unstyled ps-0 mb-0 d-flex gap-2 justify-content-center justify-content-lg-end ${styles.social__links}`}>
                                    <li>
                                        <Link href={"#"} className='d-flex justify-content-center align-items-center rounded-circle'>
                                            <FaFacebookF />
                                        </Link>
                                    </li> 
                                    <li>
                                        <Link href={"#"} className='d-flex justify-content-center align-items-center rounded-circle'>
                                            <FaTwitter />
                                        </Link>
                                    </li> 
                                    <li>
                                        <Link href={"#"} className='d-flex justify-content-center align-items-center rounded-circle'>
                                            <FaLinkedinIn />
                                        </Link>
                                    </li> 
                                    <li>
                                        <Link href={"#"} className='d-flex justify-content-center align-items-center rounded-circle'>
                                            <FaInstagram />
                                        </Link>
                                    </li> 
                                </ul> 
                            </div>
                            <div className="col-md-6 col-sm-6 order-sm-1 text-center text-sm-start">
                                <p>© 2023 Sydney IBS Pty Ltd</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer