import React from 'react'

const Biography = () => {
    return (
        <>
            <div className="timeline-biography">
                <h3 className="title">Biography</h3>
                <p>Please provide a brief biography, limited to 300 words, which will be used in your public profile. Ensure that it conveys meaningful information you would like the client to know about you before engaging in your project</p>
            </div>
            <div className="d-flex flex-column gap">
                <div className="form-group">
                    <textarea cols={90} rows={6} className="form-control h-auto" placeholder="e.g. Brief 300 words summary about your expertise."></textarea>
                </div>
                <div className="input__box">
                    <label>Cover Title</label>
                    <input type="text" placeholder="eg. PHD" className="input" />
                </div>
                <div className="input__box">
                    <label>Cover Designation</label>
                    <input type="text" placeholder="eg. PHD" className="input" />
                </div>
            </div>
        </>
    )
}

export default Biography