import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaUser } from 'react-icons/fa'
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <>
            <nav className={styles.header}>
                <div className="container py-3">
                    <div className="row g-2 align-items-center">
                        <div className="col-md-3 col-sm-3">
                            <div className="logo">
                                <Link href="/">
                                    <Image src="/images/educatech.webp" width={200} height={27} alt='logo' className='img-fluid' />
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-5">
                            <div className={styles.search__block}>
                                <form className="d-flex">
                                    <input type="text" placeholder="Search expert..." name="search" required />
                                    <button type="submit" className='btn btn-primary px-3 fs-4 d-inline-flex align-items-center'>
                                    <IoSearch />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="text-end">
                                <Link href="#" className="link">Post your Project</Link>
                                <Link href="#" className="link">Become an Expert</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container */}
                <div className={`${styles.header__menu} py-3`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-sm-9">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="container-fluid">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="find-consultant.html">Find Consultants</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="find-projects.html">Find Projects</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="find-training.html">Find Training</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="scholarship-database.html">Scholarships Database</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="experts-database.html">Experts Database</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="about-us.html">About Us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <div className={`d-flex justify-content-end gap-2 ${styles.auth__btns}`}>
                                    <Link href="#" className="btn btn-outline-primary d-inline-flex align-items-center gap-2"><FaUser />Login</Link>
                                    <Link href="#" className="btn btn-outline-primary">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar