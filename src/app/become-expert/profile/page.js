import React from 'react'
import ProfileLayout from './ProfileLayout'

export const metadata = {
    title: "Create your expert profile - EDUCATECH",
}

const page = () => {
  return (
    <main className="py-5">
        <div className="container">
            <ProfileLayout />
        </div>
    </main>
  )
}

export default page