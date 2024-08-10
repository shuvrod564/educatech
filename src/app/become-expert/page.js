import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { LiaUserTieSolid } from "react-icons/lia";
import { GoLocation } from "react-icons/go";
import { GoClock } from "react-icons/go";

const page = () => {
    return (
        <main className="py-5">
            <div className={styles.register__profile}>
                <div className="container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-md-8">
                            <div className={styles.expert__left}>
                                <h1 className={styles.title}>Hi, Michael. Let&apos;s set up your EDUCATECH profile</h1>
                                <ul className="list-unstyled ps-0">
                                    <li>
                                        <a href="#">
                                            <div className={styles.expert__left__img}>
                                                <LiaUserTieSolid className="text-primary fs-3" />
                                            </div>
                                            <p>Create your consultant profile by answering a few question</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className={styles.expert__left__img}>
                                                <LiaUserTieSolid className="text-primary fs-3" />
                                            </div>
                                            <p>Browse current academic projects or list academic services for clients </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className={styles.expert__left__img}>
                                                <LiaUserTieSolid className="text-primary fs-3" />
                                            </div>
                                            <p>Get paid securely - our team is here to help</p>
                                        </a>
                                    </li>
                                </ul>
                                <div className="small mt-4 mt-md-5">
                                    <p className="mb-2">Create your profile takes a few minutes and you have the option to edit it later</p>
                                </div>
                                <div className="profile-button">
                                    <Link href={"/become-expert/profile"} className={`${styles.get__started__btn} btn btn-primary lead-sm py-3 w-100`}>Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="text-center">
                                <h2 className={styles.title}>Example profile</h2>
                                <div className={styles.expert__right}>
                                    <div className="mb-3">
                                        <img src="images/common/Mask-img.jpg"/>
                                            <h3>Michael Kassiou</h3>
                                            <p>Curriculum  Specialist  | Public Health</p>
                                    </div>
                                    <div className="consultant-left-sydney">
                                        <ul className="list-unstyled ps-0 mb-0 d-flex flex-column gap-1">
                                            <li className='d-inline-flex gap-1 justify-content-center'><GoLocation className="text-primary fs-5" />Sydney, Australia</li>
                                            <li className='d-inline-flex gap-1 justify-content-center'><GoClock className="text-primary fs-5" /> 10.15am AEST</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </main>
    )
}

export default page