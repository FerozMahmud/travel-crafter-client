import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='container'>
            <h2 className='pt-5 pb-2'>Our Services</h2>
            <div className="row row-cols-1 row-cols-md-3 pb-5 px-5 g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>













    );
};

export default Services;