import React from 'react'
import { IoSearch } from "react-icons/io5";
import styles from "./Search.module.css"

const Search = () => {
  return (
    <>
        <form action="#" className={`${styles.search__box} d-flex`}>
            <input 
                type="text" 
                className="form-control border-0 shadow-none" 
                required
                placeholder="Search expert ..."
             />
            <button type="submit" className={`${styles.btn} btn ps-1 pe-2 py-2 fs-5 d-inline-flex align-items-center`}>
                <IoSearch />
            </button>
        </form>
    </>
  )
}

export default Search