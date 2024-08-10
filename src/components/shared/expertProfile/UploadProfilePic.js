import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'
import { HiOutlineUpload } from "react-icons/hi";

const UploadProfilePic = () => {
    return (
        <>
            <div className="upload-picture">
                <h3 className="title">Upload your profile picture</h3>
                <p>Please upload the image you would like to appear in your profile</p>
            </div>
            <div className={styles.prpfile___upload__box}>
                <div className="mt-4">
                    <div className="d-inline-block">
                        <img src="/images/common/upload-user.jpg" width={265} height={265} alt={"upload user"} /> 
                    <p className="small fst-italic text-center mt-2">Max 2MB 500px 500px</p>
                    </div>
                    <div className="d-block text-center"> 
                        <label htmlFor='uploadPhoto' className="btn btn-outline-primary gap-2 d-inline-flex align-items-center">
                            <HiOutlineUpload className="fs-4" />
                            <span>Upload Photo</span>
                            <input type="file" id="uploadPhoto" name="filename" className="position-absolute top-0 start-0 opacity-0 w-100"/> 
                        </label>
                    </div>
                    <div className="mt-4 text-center">
                        <a href="#" className="fw-medium text-dark text-decoration-underline">Remove picture</a>
                    </div>
                </div>

            </div>
            <div className="mt-4 mt-lg-5 pt-4 pt-lg-5 border-top text-center">
                <p>Initial steps in creating your profile are now complete!</p>
                <button type="button" className="btn btn-primary px-5">Preview your Profile</button>
            </div>
        </>
    )
}

export default UploadProfilePic