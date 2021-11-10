import React from 'react';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const { name, img, discription, _id } = props.service;
    return (
        <div className="col">
            <div className="card h-100 bg-light">
                <img src={img} className="card-img-top" height='250' width='200' alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{discription}</p>
                </div>
                <div className="mb-3">
                    <Link to={`/details/${_id}`}><span><button className='btn btn-dark px-5'>Book '{name}' Tour</button></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;