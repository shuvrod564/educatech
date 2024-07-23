import EducatechApart from '@/components/widgets/educatechApart/EducatechApart'
import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"

export const metadata = {

}

const page = () => {
  return (
    <main>
      <div className="position-relative">
        <div className="container-fluid px-0">
          <Image 
            src="/images/common/about-banner.jpg" 
            width={1920} height={500} alt="about-banner" 
            className={styles.hero__thumbnail}
          />
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
          <div className="container">
            <h1 className="display-5 fw-medium text-dark">Welcome to <br /> EDUCA<span className="text-primary">TECH</span></h1>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="col-lg-9 mx-auto">
            <p className="text-uppercase text-primary fw-medium">info</p>
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis dolore iure, quasi, omnis velit cum quae sunt saepe quisquam necessitatibus id hic voluptatum aliquam ex sequi, consequuntur facere voluptatem suscipit. Assumenda, illum repellat corporis quidem deleniti reiciendis cum atque a aliquid, accusamus, magni recusandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis dolore iure, quasi, omnis velit cum quae sunt saepe quisquam necessitatibus id hic voluptatum aliquam ex sequi, consequuntur facere voluptatem suscipit. Assumenda, illum repellat corporis quidem deleniti reiciendis cum atque a aliquid, accusamus, magni recusandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis dolore iure, quasi, omnis velit cum quae sunt saepe quisquam necessitatibus id hic voluptatum aliquam ex sequi, consequuntur facere voluptatem suscipit. Assumenda, illum repellat corporis quidem deleniti reiciendis cum atque a aliquid, accusamus, magni recusandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis dolore iure, quasi, omnis velit cum quae sunt saepe quisquam necessitatibus id hic voluptatum aliquam ex sequi, consequuntur facere voluptatem suscipit. Assumenda, illum repellat corporis quidem deleniti reiciendis cum atque a aliquid, accusamus, magni recusandae.</p>

          </div>
        </div>
      </div>


      <div className="bg-light py-lg-5">
        <div className="container py-lg-4">
          <div className="row g-4 gx-lg-5 align-items-center">
            <div className="col-lg-6">
              <div className="mission-img">
                <Image src="/images/common/mission-img.jpg" className="w-100" width={630} height={630} alt="mission image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-text">
                <div className="heading">
                  <p className="text-uppercase text-primary fw-medium mb-2">Mission</p>
                  <h2 className="display-5 fw-medium text-dark">Our Mission</h2>
                  <p>2U believes in the power of high-quality online education to create a better future for all. Through edX, our online learning platform, we see a world where learners everywhere have access to…</p>
                  <p>2U believes in the power of high-quality online education to create a better future for all. Through edX, our online learning platform, we see a world where learners everywhere have access to…2U believes in the power of high-quality online education to create a better future for all. Through edX, our online learning platform, we see a world where learners everywhere have access to…2U believes in the power of high-quality online education to create a better future for all. Through edX, our online learning platform, we see a world where learners everywhere have access to…</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Categories Wrapper Start */}
      <EducatechApart />
      {/* Categories Wrapper End */}


    </main>
  )
}

export default page