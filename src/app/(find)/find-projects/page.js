import Filter from '@/components/common/filter/Filter'
import React from 'react'
import ProjectList from './ProjectList'
import Pagination from '@/components/common/pagination/Pagination'

export const metadata = {
    title: "Find Projects | EDUCATECH"
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
                        <ProjectList />
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default page