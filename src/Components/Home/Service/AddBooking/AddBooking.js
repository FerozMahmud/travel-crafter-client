import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddBooking.css'

const AddBooking = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your data added succesfully!!!')
                    reset()
                }
            })
    }
    return (
        <div className='add-service'>
            <h2 className='text-white'>Please Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Enter the palce name' />
                <input type='number' {...register("price")} placeholder='Enter the total cost' />
                <textarea {...register("discription")} placeholder='Enter the discription' />
                <input  {...register("img")} placeholder='Enter the image url' />
                <button className='submit-btn text-white' Enter="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBooking;