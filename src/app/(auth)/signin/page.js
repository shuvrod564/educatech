import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Sign In"
}

const page = () => {
  return (
    <main className="py-5">
      <div className="container py-md-4">
        <div className={`${styles.register__form}`}>
          <h1 className="fs-2 text-center mb-4">Sign In</h1>
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
            <div className="col-12"> 
              <div className={styles.form__group}>
                <label>Email Address</label>
                <input type="text" placeholder="name@gmail.com" name="email" className={styles.input} />
              </div>
            </div>
            <div className="col-12"> 
              <div className={styles.form__group}>
                <label>Password</label>
                <input type="password" placeholder="Your password (8 or more characters)" id="pwd" name="pwd" className={styles.input} />
              </div>
            </div> 
          </div>
          {/* row */}

          <div className={`${styles.sendemail} mt-4 d-flex justify-content-between align-items-center`}>
            <div className={styles.sendemaicheck}>
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className={styles.sendemaicheck}>
              <Link href={"#"} className="link">Forgot Password?</Link>
            </div>
          </div>

          <div className="mt-4">
            <button className="btn btn-primary w-100">Login</button>
          </div>

          <div className={`${styles.singup} mt-4 text-center`}>
            <p>Haven&apos;t any account, <Link href="/register" className="link text-decoration-underline">Sign Up</Link></p>
          </div>
           

        </div>
        {/* form */}
      </div>
      {/* container */}


    </main>
  )
}

export default page