import React from 'react'

const GeneralInfornation = () => {
    return (
        <div class="timeline-right">
            <div class="timeline-text">
                <h2 className="title">Tell us about your expertise</h2>
                <p>This helps in finding the right project for you</p>
            </div>
            <div class="mt-4">
                <h2 className="title">What languages do you speak?</h2>
                <p>We will use this to help match you with clients who are fluent in their language</p>
            </div>
            <div class="timeline-input">
                <input type="text" placeholder="eg. English" className="form-control" />
            </div>
        </div>
    )
}

export default GeneralInfornation