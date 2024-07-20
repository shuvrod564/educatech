'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
import GeneralInfornation from '@/components/shared/expertProfile/GeneralInfornation'
import ExpertiseFeild from '@/components/shared/expertProfile/ExpertiseFeild'

const ProfileLayout = () => {
    const [step, setStep] = useState('general')


    const handleNextStep =() => {
        if(step === 'general') {
            setStep('expertise');
        }
    }

    return (
        <div className="row g-4 gx-lg-5">
            <div className="col-md-4">
                <div className={styles.timeline__left}>
                    <ul className="list-unstyled">
                        <li className={step === 'general' || step === 'expertise' ? styles.active : ''}>
                            <h4>General Information</h4>
                            <p>Profile details</p>
                        </li>
                        <li>
                            <h4>Field of Expertise</h4>
                            <p>Area of Expertise</p>
                        </li>
                        <li>
                            <h4>Education</h4>
                            <p>Education details</p>
                        </li>
                        <li>
                            <h4>Consultation</h4>
                            <p>Type of consultation</p>
                        </li>
                        <li>
                            <h4>Biography</h4>
                            <p>Your Biography</p>
                        </li>
                        <li>
                            <h4>Profile Picture</h4>
                            <p>Add profile picture</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* col */}

            <div className="col-md-8">
                {
                    step === 'general' && <GeneralInfornation />
                }
                {
                    step === 'expertise' && <ExpertiseFeild />
                }


                <div class="d-flex justify-content-between mt-5">
                    {
                        step != 'general' && ( 
                            <button type="button" className="btn btn-primary">Back</button>
                        )
                    }
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={handleNextStep}
                    >Next</button> 
                </div>
            </div>

        </div>
    )
}

export default ProfileLayout