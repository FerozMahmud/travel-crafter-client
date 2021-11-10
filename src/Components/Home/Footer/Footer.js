import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='bg-dark text-light p-2'>
                {/* ..........top right part of footer section...........  */}
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className='pb-4'>
                            <h1><strong>Travel</strong> <span className="text-info">Crafter</span></h1>
                            <p>Where the journey begins!</p>
                        </div>
                    </div>


                    <div className="col-md-6 col-sm-12">
                        <div>
                            <h5>Submit your email to get latest offer</h5>
                        </div>
                        <div className='input-email d-flex align-item-center pt-1'>
                            <input
                                className="email-input"
                                type="text"
                                placeholder="Enter Email"
                            />
                            <button className=" btn text-white bg-success">Submit</button>
                        </div>
                    </div>
                </div>
                <hr />
                {/* ..........bottom part of footer section...........  */}
                <div className="footer">
                    <p>Copyright © 2021 || <strong>Travel <span className="text-info">Crafter</span></strong></p>
                    <small>Made by <h6 className='text-info d-inline'>Feroz Mahmud</h6></small>
                </div>
            </div>
        </div>
    );
};

export default Footer;