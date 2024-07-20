import React from 'react'
import styles from './styles.module.css'

const ExpertiseFeild = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <h4>Fieldss</h4>
                    <div className={styles.timeline__block}>
                        <form className={styles.timeline__search}>
                            <input type="text" placeholder="Search by field of expertise" name="search" />
                                <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                        <div className={styles.timeline__according}>
                            <div className="at-item">
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor='Architecture'>Architecture</label>
                                    <input type="checkbox" id="Architecture" className='form-check-input' />
                                </div> 
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Art</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">Architecture 1</a></li>
                                        <li><a href="#">Architecture 2</a></li>
                                        <li><a href="#">Architecture 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Biology</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">Architecture 1</a></li>
                                        <li><a href="#">Architecture 2</a></li>
                                        <li><a href="#">Architecture 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Business</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">Architecture 1</a></li>
                                        <li><a href="#">Architecture 2</a></li>
                                        <li><a href="#">Architecture 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Chemistry</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">Architecture 1</a></li>
                                        <li><a href="#">Architecture 2</a></li>
                                        <li><a href="#">Architecture 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Computer Programming</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">Architecture 1</a></li>
                                        <li><a href="#">Architecture 2</a></li>
                                        <li><a href="#">Architecture 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Data Analysis</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">Architecture 1</a></li>
                                        <li><a href="#">Architecture 2</a></li>
                                        <li><a href="#">Architecture 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Design</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">Architecture 1</a></li>
                                        <li><a href="#">Architecture 2</a></li>
                                        <li><a href="#">Architecture 3</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h4>Categories of Expertise</h4>
                    <div className="timeline-block">
                        <form className="timeline-search">
                            <input type="text" placeholder="Search by categories...." name="search" />
                                <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                        <div className="timeline-according">
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Accreditation Specialists</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">LMS 1</a></li>
                                        <li><a href="#">LMS 2</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Curriculum Experts</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">LMS 1</a></li>
                                        <li><a href="#">LMS 2</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Program Designers</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">LMS 1</a></li>
                                        <li><a href="#">LMS 2</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>LMS Experts</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">LMS 1</a></li>
                                        <li><a href="#">LMS 2</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Industry Experts</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">LMS 1</a></li>
                                        <li><a href="#">LMS 2</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Finance Experts</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">LMS 1</a></li>
                                        <li><a href="#">LMS 2</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Policy Experts</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">LMS 1</a></li>
                                        <li><a href="#">LMS 2</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="at-item">
                                <div className="at-title">
                                    <h2>Project Managers</h2>
                                </div>
                                <div className="at-tab">
                                    <ul>
                                        <li><a href="#">LMS 1</a></li>
                                        <li><a href="#">LMS 2</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="timeline-block timeline-block2">
                        <h4>Expertise</h4>
                        <ul>
                            <li><a href="#">Architecture 1<img src="images/close-i.png"/></a></li>
                            <li><a href="#">Architecture 2<img src="images/close-i.png"/></a></li>
                        </ul>
                        <ul>
                            <li><a href="#">LMS 1<img src="images/close-i.png"/></a></li>
                            <li><a href="#">LMS 2<img src="images/close-i.png"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertiseFeild