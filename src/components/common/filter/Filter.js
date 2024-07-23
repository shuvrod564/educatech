import Search from '@/components/shared/search/Search'
import React from 'react'
import styles from './style.module.css'


const Filter = () => {
    return (
        <>
            <div className="p-4">
                <div className="border-bottom d-flex align-items-center justify-content-between pb-2 mb-3">
                    <p className="mb-0 text-dark fw-medium lead">Filter</p>
                    <button className="btn btn-link p-0">Clear filters</button>
                </div>


                <Search />


                <p className="fs-6 mt-4 fw-medium text-dark mb-2">Project by Categories</p>
                <ul className="list-unstyled d-flex flex-column gap-2">
                    <li>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="1"/>
                            <label className="form-check-label" htmlFor="1">Accreditation Documentation</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="2"/>
                            <label className="form-check-label" htmlFor="2">Accreditation Process</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="3"/>
                            <label className="form-check-label" htmlFor="3">Accreditation Renewal</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="4"/>
                            <label className="form-check-label" htmlFor="4">Accreditation Reporting</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="5"/>
                            <label className="form-check-label" htmlFor="5">Accreditation Review</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="6"/>
                            <label className="form-check-label" htmlFor="6">Accreditation Documentation</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="7"/>
                            <label className="form-check-label" htmlFor="7">Accreditation Process</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="8"/>
                            <label className="form-check-label" htmlFor="8">Accreditation Renewal</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="9"/>
                            <label className="form-check-label" htmlFor="9">Accreditation Reporting</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="10"/>
                            <label className="form-check-label" htmlFor="10">Accreditation Review</label>
                        </div>
                    </li>
                </ul>


                <p className="fs-6 mt-4 fw-medium text-dark mb-2">Project Type</p>
                <div className="type-min">
                  <ul className="list-unstyled ps-0">
                    <li className='form-check'>
                      <input type="checkbox" id="111" className='form-check-input'/>
                      <label htmlFor="111" className='form-check-label'>Fixed Price</label>
                    </li>
                    <li>
                        <div className="row g-3">
                            <div className="col-6"> 
                                <input type="text" placeholder="Min" className={`${styles.form__control} form-control`}/>
                            </div>
                            <div className="col-6">
                                <input type="text" placeholder="Max" className={`${styles.form__control} form-control`}/> 
                            </div>
                        </div>
                    </li>
                  </ul>
                </div>
                <div className="type-min">
                  <ul className="list-unstyled ps-0">
                    <li className='form-check'>
                      <input type="checkbox" id="112" className='form-check-input'/>
                      <label htmlFor="112" className='form-check-label'>Hourly</label>
                    </li>
                    <li>
                        <div className="row g-3">
                            <div className="col-6"> 
                                <input type="text" placeholder="Min" className={`${styles.form__control} form-control`}/>
                            </div>
                            <div className="col-6">
                                <input type="text" placeholder="Max" className={`${styles.form__control} form-control`}/> 
                            </div>
                        </div>
                    </li>
                  </ul>
                </div>
                





            </div>
        </>
    )
}

export default Filter