'use client';
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaUser } from 'react-icons/fa'
import { IoSearch } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const [showResMenu, setShowResMenu] = useState(false);
 
    return (
        <>
            <nav className={styles.header}>
                <div className="container">
                    <div className="row g-2 align-items-center">
                        <div className="col-lg-3 col-sm-4 col-6">
                            <div className="logo">
                                <Link href="/">
                                    <Image src="/images/educatech.webp" width={200} height={27} alt='logo' className={styles.logo} />
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-5 d-none d-lg-block">
                            <div className={styles.search__block}>
                                <form className="d-flex">
                                    <input type="text" placeholder="Search expert..." name="search" required />
                                    <button type="submit" className='btn btn-primary px-3 fs-4 d-inline-flex align-items-center'>
                                    <IoSearch />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-8 col-6 text-end">
                            <div className="d-none d-lg-flex flex-wrap justify-content-end gap-1 gap-xl-3 gap-xxl-4">
                                <Link href="/post-project" className={`link ${styles.action__link}`}>Post your Project</Link>
                                <Link href="/become-expert/" className={`link ${styles.action__link}`}>Become an Expert</Link>
                            </div>
                            <div className="d-flex d-lg-none justify-content-end align-items-center">
                                <Link href="/signin" className={`${styles.res__login__btn} btn btn-outline-primary d-inline-flex align-items-center gap-2`}><FaUser />Login</Link>
                                <button onClick={()=>setShowResMenu(true)} type="button" className="btn fs-2 px-2 pb-1 pt-0 lh-1">
                                    <HiMiniBars3 />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container */}
                <div className={`${styles.header__menu} py-3 d-none d-lg-block`}>
                    <div className="container">
                        <div className="row g-3">
                            <div className="col-md-9 col-sm-9">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav gap-3 gap-xl-4 gap-xxl-5">
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/consultant/">Find Consultants</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/projects/">Find Projects</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/training/">Find Training</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/scholarship-database/">Scholarships Database</Link>
                                            </li> 
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/about">About Us</Link>
                                            </li>
                                        </ul>
                                    </div> 
                                </nav>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <div className={`d-flex justify-content-end gap-2 ${styles.auth__btns}`}>
                                    <Link href="/signin" className="btn btn-outline-primary d-inline-flex align-items-center gap-2"><FaUser />Login</Link>
                                    <Link href="/register" className="btn btn-outline-primary">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>



            {/* Mobile Menu Start */}
            <nav className={`${styles.side__menu} ${showResMenu ? styles.open__menu : ''} position-fixed top-0 end-0 w-100 h-100`}>
                <div className={`${styles.content__box} bg-white w-100`}> 
                    <div className="d-flex justify-content-between">
                        <button className="btn py-2 px-3 fs-4 lh-1">
                            <FiSearch />
                        </button>
                        <button onClick={()=>setShowResMenu(false)} type="button" className="btn py-2 px-3 fs-2 lh-1">
                            <IoCloseOutline />
                        </button>
                    </div>
                    <div className="p-3">
                        <div className="d-flex flex-wrap justify-content-between gap-2">
                            <Link href="/post-project/" className={`link ${styles.action__link}`} onClick={()=>setShowResMenu(false)}>Post your Project</Link>
                            <Link href="/become-expert/" className={`link ${styles.action__link}`} onClick={()=>setShowResMenu(false)}>Become an Expert</Link>
                        </div>
                    </div>
                    <div className={`${styles.scroll__box} mt-sm-4`}>
                        <ul className="d-flex flex-column gap-3 gap-sm-3 list-unstyled p-3">
                            <li>
                                <Link className={styles.nav__link} href="/consultant/" onClick={()=>setShowResMenu(false)}>Find Consultants</Link>
                            </li>
                            <li>
                                <Link className={styles.nav__link} href="/projects/" onClick={()=>setShowResMenu(false)}>Find Projects</Link>
                            </li>
                            <li>
                                <Link className={styles.nav__link} href="/training/" onClick={()=>setShowResMenu(false)}>Find Training</Link>
                            </li>
                            <li>
                                <Link className={styles.nav__link} href="/scholarship-database/" onClick={()=>setShowResMenu(false)}>Scholarships Database</Link>
                            </li> 
                            <li>
                                <Link className={styles.nav__link} href="/about/" onClick={()=>setShowResMenu(false)}>About Us</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                {/* contain box */}
            </nav>
        </>
    )
}

export default Navbar