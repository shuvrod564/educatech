'use client'
import SkillBox from '@/components/shared/skillbox/SkillBox';
import UploadBox from '@/components/shared/uploadbox/UploadBox';
import React, { useState } from 'react'
import styles from "./page.module.css"

const PostProject = () => {
  const [step, setStep] = useState(0);

  const [title, setTitle] = useState('');
  console.log(step);


  const nextStep = () => {

  }
  return (
    <>
      <div className="d-flex flex-column gap-4">
        <div className="input__box">
          <label>What is your project title?</label>
          <input
            type="text"
            placeholder="eg. Developing curriculum for Postgraduate public health unit"
            className="input" required
          />
        </div>

        <div className="input__box">
          <label>Project Description</label>
          <textarea
            cols={44} rows={5}
            placeholder="Describe your project here (max 200 words)"
            className='input textarea'
          ></textarea>
        </div>
        <div>
          <UploadBox />
        </div>

        <div className="mt-4">
          <h2 className="fs-5 text-dark">What academic skills is required for this project?</h2>
          <p>List up to 5 key skills that represent your project. Academic experts will use these skills to match with projects aligned to their interests and expertise.</p>

          <SkillBox />
        </div>

        <div className="client-job-col">
          <h3 className="fs-5 text-dark">How do you want to pay?</h3>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.client__job__hourly}>
                <input type="radio" name='payType' id='payType1' className='position-absolute top-0 start-0 opacity-0' />
                <label htmlFor="payType1"> 
                  <div className={styles.hourly__img}>
                    <img src="/images/icons/hourly-icon.png"></img>
                  </div>
                  <div className={styles.hourly__text}>
                    <h4>Hourly rate</h4>
                    <p>Select freelancers based on their hourly rates and pay for the hours worked</p>
                  </div>
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.client__job__hourly}>
                <input type="radio" name='payType' id='payType2' className='position-absolute top-0 start-0 opacity-0' />
                <label htmlFor="payType2"> 
                  <div className={styles.hourly__img}>
                    <img src="/images/icons/hourly-icon1.png"></img>
                  </div>
                  <div className={styles.hourly__text}>
                    <h4>Fixed price</h4>
                    <p>Agree on a price upfront, then release payment upon project completion</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>


      </div>
      {/* flex */}



      <div className="mt-5">
        <button
          className="btn btn-primary" 
        >Post Project</button>
      </div>
    </>
  )
}

export default PostProject