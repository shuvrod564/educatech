import React from 'react'
import PostProject from './PostProject'

export const metadata = {
  title: "Post a Project"
}

const page = () => {
  return (
    <main className="py-5">
      <div className="container py-md-3">
        <PostProject />
      </div>
    </main>
  )
}

export default page