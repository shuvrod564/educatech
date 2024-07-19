import Pagination from '@/components/common/pagination/Pagination'
import React from 'react' 
import Filter from '@/components/common/filter/Filter'
import ConsultantList from './ConsultantList'

export const metadata = {
    title: "Find Consultant - EDUCATECH"
}

const page = () => {
  return (
    <main className="py-5">
        <div className="container">
            <div className="card"> 
                <div className="row g-0">
                    <div className="filter__col">
                        <Filter />
                    </div>
                    <div className="col list__left__border">
                        <ConsultantList />
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default page