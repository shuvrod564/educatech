import React from 'react'
import { FaStar } from 'react-icons/fa'
import styles from "./Rating.module.css"

const Ratings = () => {
  return (
    <div className={`d-flex ${styles.rating__box}`}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
    </div>
  )
}

export default Ratings