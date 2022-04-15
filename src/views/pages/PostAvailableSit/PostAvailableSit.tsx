import React from 'react';
import { useForm } from 'react-hook-form';
import './PostAvailableSit.scss';

const PostAvailableSit = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <div className="availableSit">
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('firstName')} />
                    <select {...register('roomSize')}>
                        <option value="">Room Size</option>
                        <option value="9 feet x 10 feet">
                            9 feet x 10 feet
                        </option>
                        <option value="10 x 10 feet">10 x 10 feet</option>
                    </select>
                    <select {...register('bedType')}>
                        <option value="">Bed Type</option>
                        <option value="single-bed">Single Bed</option>
                        <option value="double-bed">Double Bed</option>
                    </select>
                    <select {...register('city')}>
                        <option value="">Location</option>
                        <option value="dhaka">Dhaka</option>
                    </select>
                    <select {...register('gender')}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default PostAvailableSit;
