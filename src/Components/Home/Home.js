import React from 'react';
import './Home.css'
import Services from './Services/Services';

const Home = () => {

    return (
        <div>

            {/*------------------------------------
            --------------Banner Part--------------
            ------------------------------------*/}
            <section className="banner">
                <div className="row px-5">
                    <div className="col-sm-6 p-5 my-5">
                        <h1><strong>Travel</strong> <span className='text-primary'>Crafter</span></h1>
                        <h2>Where the journey begins!</h2>
                        <h4>We make dreams come true!</h4>
                        <h6>Traveling is the spice of life. We are professional planners for your vacations. No matter where you're going from, we take you there.</h6>
                    </div>
                    <div className="col-sm-6 img-main">
                        <img src="" alt="" />
                    </div>
                </div >
            </section>

            <section>
                <div className="container card mt-5 bg-light">
                    <div className="row">
                        <div className="col-sm-6 img-main pt-5">
                            <img width="400" className="rounded m-auto d-block img-fluid" src="https://media.istockphoto.com/photos/travel-destinations-direction-sign-airplane-picture-id843542714?k=20&m=843542714&s=612x612&w=0&h=r_7moXzkmPu4IsI_htGFh7LmUnvfWJcRuXj_c4zoMT8=" alt="" />
                        </div>
                        <div className="col-sm-6 p-5 my-4">
                            <h5 className='text-primary'>Welcome to Our Travel Crafter</h5>
                            <h3>Best Selling Tours And Fun Destinations</h3>
                            <h4>World-class Travel Agency</h4>
                            <p>Enjoy the tour of Travel Crafter.We provide travelers with an authentic experience that they can remember for the rest of their lives.</p>
                        </div>
                    </div >
                </div>
            </section>

            {/*------------------------------------
            -------------Services Part-------------
            ------------------------------------*/}
            <section>
                <Services></Services>
            </section>


            {/*------------------------------------
            ----------Why Choose Us Part-----------
            ------------------------------------*/}
            <section className="py-6 bg-light-primary">
                <hr />
                <div className="container">
                    <div className="row justify-content-center text-center mb-4">
                        <div className="col-xl-6 col-lg-8 col-sm-10">
                            <h2 className="font-weight-bold">The Perfect Features <br /> of our Company</h2>
                            <p className="text-muted mb-0">A Whole World On A Single Island.</p>
                        </div>
                    </div>

                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 text-center justify-content-center px-xl-6 aos-init aos-animate" data-aos="fade-up">
                        <div className="col my-3">
                            <div className="card border-hover-primary hover-scale">
                                <div className="card-body">
                                    <div className="text-primary mb-2">
                                        <img width="60" height="60" src="data:image/png;base64,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" alt="" />
                                    </div>
                                    <h6 className="font-weight-bold mb-3">Passionate Service</h6>
                                    <p className="text-muted mb-0">Picking where to go out of 150 countries worldwide</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-3">
                            <div className="card border-hover-primary hover-scale">
                                <div className="card-body">
                                    <div className="text-primary mb-2">
                                        <img width="60" height="60" src="data:image/png;base64,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" alt="" />
                                    </div>
                                    <h6 className="font-weight-bold mb-3">Best Price Guarantee</h6>
                                    <p className="text-muted mb-0">Your Trip Host has designed every trip to be packed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col my-3">
                            <div className="card border-hover-primary hover-scale">
                                <div className="card-body">
                                    <div className="text-primary mb-2">
                                        <img width="60" height="60" src="data:image/png;base64,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" alt="" />
                                    </div>
                                    <h6 className="font-weight-bold mb-3">Secure Booking</h6>
                                    <p className="text-muted mb-0">Everything has been sorted for you & cool, convenient.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;