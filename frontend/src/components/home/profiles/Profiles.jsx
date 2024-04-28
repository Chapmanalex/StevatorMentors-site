import React from 'react'
import './profiles.css';

const Profiles = () => {
    return (
        <div className='profiles'>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src="avi1.png" alt="" />
                        <div className="activities">
                            <p>cooking</p><p>photography</p><p>coding</p>
                           <div id='next'>{'>'}</div>
                        </div>
                        <div className="socials">
                            <img src="fb.png" alt="" />
                            <img src="x.png" alt="" />
                            <img src="linkedin.png" alt="" />
                            <img src="instagram.png" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="redeyes.png" alt="" />
                        <div className="activities">
                            <p>cooking</p><p>photography</p><p>coding</p>
                           <div id='next'>{'>'}</div>
                        </div>
                        <div className="socials">
                            <img src="fb.png" alt="" />
                            <img src="x.png" alt="" />
                            <img src="linkedin.png" alt="" />
                            <img src="instagram.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <img src="avi1.png" alt="" />

                        <div className="activities">
                            <p>cooking</p><p>photography</p><p>coding</p>
                           <div id='next'>{'>'}</div>
                        </div>
                        <div className="socials">
                            <img src="fb.png" alt="" />
                            <img src="x.png" alt="" />
                            <img src="linkedin.png" alt="" />
                            <img src="instagram.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Profiles
