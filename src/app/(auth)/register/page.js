import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Register for new account"
}

const page = () => {
  return (
    <main className="py-5">
      <div className="container py-md-4">
        <div className={`${styles.register__form}`}>
          <h1 className="fs-2 text-center mb-4">Sign Up</h1>
          <div className="link-open">
            <ul className="d-flex justify-content-center gap-3 list-unstyled ps-0">
              <li className="col">
                <button type="button" className="btn p-0">
                  <Image src="/images/icons/google.png" width={170} height={56} alt="Google" /> 
                </button>
              </li>
              <li className="col">
                <button type="button" className="btn p-0">
                  <Image src="/images/icons/apple.png" width={170} height={56} alt="apple" /> 
                </button>
              </li>
              <li className="col">
                <button type="button" className="btn p-0">
                  <Image src="/images/icons/linkedin.png" width={170} height={56} alt="linkedin" /> 
                </button>
              </li> 
            </ul>
          </div>

          <div className={styles.or__border}>
            <span>OR</span>
          </div>

          <div className="row gx-3 gy-4">
            <div className="col-md-6">
              <div className={styles.form__group}>
                <label>First Name</label>
                <input type="text" placeholder="Your first name" name="fname" className={styles.input} />
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.form__group}>
                <label>Last Name</label>
                <input type="text" placeholder="Your last name" name="lname" className={styles.input} />
              </div>
            </div>
            <div className="col-12"> 
              <div className={styles.form__group}>
                <label>Email Address</label>
                <input type="text" placeholder="name@gmail.com" name="email" className={styles.input} autoComplete={false} />
              </div>
            </div>
            <div className="col-12"> 
              <div className={styles.form__group}>
                <label>Password</label>
                <input type="password" placeholder="Your password (8 or more characters)" id="pwd" name="pwd" className={styles.input} />
              </div>
            </div>
            <div className="col-12"> 
              <div className={styles.form__group}>
                <label htmlFor="country">Country</label>
                <input type="password" placeholder="Your country name" id="country" name="country" className={styles.input} />
              </div>
            </div>
          </div>
          {/* row */}

          <div className={`${styles.sendemail} mt-4`}>
            <div className={styles.sendemaicheck}>
              <input type="checkbox" id="vehicle1" name="vehicle1" />
              <p>Send me emails with tips on how to find projects that fit my expertise.</p>
            </div>
            <div className={styles.sendemaicheck}>
              <input type="checkbox" id="vehicle2" name="vehicle2" />
              <p>Yes, I understand and agree to the <a href="#">EDUCATECH Terms of Service</a> ,including the <a href="#">User Agreement</a> and <a href="#">Privacy Policy .</a></p>
            </div>
          </div>

          <div className="mt-4">
            <button className="btn btn-primary w-100">Register Now</button>
          </div>

          <div className={`${styles.singup} mt-4 text-center`}>
            <p>Already have an account, <Link href="/signin" className="link text-decoration-underline">Sign In</Link></p>
          </div>
           

        </div>
        {/* form */}
      </div>
      {/* container */}


    </main>
  )
}

export default page