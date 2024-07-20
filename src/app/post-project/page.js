import React from 'react'
import PostProject from './PostProject'
import styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: "Post a Project"
}

const page = () => {
  return (
    <main className="py-5">
      <div className="container py-md-3">
        <div className="col-lg-10 col-xxl-9 mx-auto">
          <div className="card p-4 p-md-5">
            <div className={`${styles.client_job_block} px-4 pt-4 rounded-3 mb-5`}>
              <div className="row g-3 align-items-center justify-content-between">
                <div className="col-md-8">
                  <h1 className="fs-4 mb-3">Hire the best academic experts</h1>
                  <p>Boost your academic success with us! Share your project details, browse profiles, contact academic experts, and pay only when you are satisfied</p>
                </div>
                <div className="col-md-4 col-lg-3 text-center">
                  <Image src="/images/common/client-hire.png" width={177} height={199} alt='Image' /> 
                </div>
              </div> 
            </div>
            <PostProject />
          </div>
        </div>
      </div>
    </main>
  )
}

export default page