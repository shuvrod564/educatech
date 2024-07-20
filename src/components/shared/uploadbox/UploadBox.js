import Image from 'next/image'
import React from 'react'
import styles from './UploadBox.module.css'

const UploadBox = () => {
  return (
    <>
        <label htmlFor="upload" className={styles.upload__file}>
          <div className={styles.upload__icon}>
            <input type="file" id="upload" name="filename" />
            <Image src="/images/icons/upload-icon.png" width={36} height={40} alt="Upload" />
          </div>
          <div className="d-block">
            <span>Clik to upload or drag &amp; drop</span>
            <p>Drag & drop any images or documents that might be helpful in explaining your brief here</p> 
          </div>
        </label>
    </>
  )
}

export default UploadBox