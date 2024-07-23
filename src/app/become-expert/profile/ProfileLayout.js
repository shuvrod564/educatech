'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
import GeneralInfornation from '@/components/shared/expertProfile/GeneralInfornation'
import ExpertiseFeild from '@/components/shared/expertProfile/ExpertiseFeild'
import Education from '@/components/shared/expertProfile/Education'
import Consultation from '@/components/shared/expertProfile/Consultation'
import Biography from '@/components/shared/expertProfile/Biography'
import UploadProfilePic from '@/components/shared/expertProfile/UploadProfilePic'

const ProfileLayout = () => {
    const [step, setStep] = useState('general')


    const handleNextStep =() => {
        if(step === 'general') {
            setStep('expertise');
        } else if (step === 'expertise') {
            setStep('education')
        } else if (step === 'education') {
            setStep('consultation')
        } else if (step === 'consultation') {
            setStep('biography')
        } else if (step === 'biography') {
            setStep('profilePic')
        }
    }

    const handlePrevStep =()=>{
        if(step === 'expertise') {
            setStep('general');
        } else if(step === 'education') {
            setStep('expertise');
        } else if(step === 'consultation') {
            setStep('education');
        } else if(step === 'biography') {
            setStep('consultation');
        } else if(step === 'profilePic') {
            setStep('biography');
        }
    }

    return (
        <div className="row g-4 gx-lg-5">
            <div className="col-lg-4">
                <div className={styles.timeline__left}>
                    <ul className="list-unstyled">
                        <li className={step === 'general' || step === 'expertise' || step === 'education' || step === 'consultation' || step === 'biography' ||  step === 'profilePic' ? styles.active : ''}>
                            <h4>General Information</h4>
                            <p>Profile details</p>
                        </li>
                        <li className={ step === 'expertise' || step === 'education' || step === 'consultation' || step === 'biography' ||  step === 'profilePic' ? styles.active : ''}>
                            <h4>Field of Expertise</h4>
                            <p>Area of Expertise</p>
                        </li>
                        <li className={ step === 'education' || step === 'consultation' || step === 'biography' ||  step === 'profilePic' ? styles.active : ''}>
                            <h4>Education</h4>
                            <p>Education details</p>
                        </li>
                        <li className={ step === 'consultation' || step === 'biography' ||  step === 'profilePic' ? styles.active : ''}>
                            <h4>Consultation</h4>
                            <p>Type of consultation</p>
                        </li>
                        <li className={ step === 'biography' || step === 'biography' ||  step === 'profilePic' ? styles.active : ''}>
                            <h4>Biography</h4>
                            <p>Your Biography</p>
                        </li>
                        <li className={ step === 'profilePic' ? styles.active : ''}>
                            <h4>Profile Picture</h4>
                            <p>Add profile picture</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* col */}

            <div className="col-lg-8">
                <div className={styles.tabContentHeight}> 
                    {
                        step === 'general' && <GeneralInfornation />
                    }
                    {
                        step === 'expertise' && <ExpertiseFeild />
                    }
                    {
                        step === 'education' && <Education />
                    }
                    {
                        step === 'consultation' && <Consultation />
                    }
                    {
                        step === 'biography' && <Biography />
                    }
                    {
                        step === 'profilePic' && <UploadProfilePic />
                    }
                </div>


                <div className="d-flex justify-content-between mt-5 pt-4 border-top border-substle">
                    {
                        step != 'general' && ( 
                            <button onClick={handlePrevStep} type="button" className="btn btn-primary px-md-5">Back</button>
                        )
                    }
                    <button onClick={handleNextStep} type="button" className="btn btn-primary px-md-5 ms-auto">Next</button> 
                </div>
            </div>

        </div>
    )
}

export default ProfileLayout