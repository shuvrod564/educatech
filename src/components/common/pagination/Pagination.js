import React from 'react'
import styles from "./styles.module.css"

const Pagination = () => {
    return (
        <>
            <div className={`${styles.pagination} p-4`}>
                <div className="row g-md-1 g-3 align-items-center">
                    <div className="col-md-4">
                        <div className="small text-dark text-center text-md-start">
                            Showing 1 to 8 of 100 entries
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-end">
                            <div className={`${styles.select__box} d-inline-flex align-items-center gap-2`}>
                                <label htmlFor='per_page' className='small text-dark text-nowrap'>Results per page</label>
                                <select id='per_page' className={`${styles.select} form-select`}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <ul className={`${styles.link__list} ps-0 mb-0 list-unstyled d-flex flex-wrap gap-1`}>
                                <li>
                                    <button>
                                        <img src="/images/icons/pagination-left.png"></img> 
                                    </button>
                                </li>
                                <li><button> </button></li>
                                <li><button>1</button></li>
                                <li><button>2</button></li>
                                <li><button>3</button></li>
                                <li><button> </button></li>
                                <li><button><img src="/images/icons/pagination-right.png"></img></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pagination