import React from 'react';
import { useForm } from 'react-hook-form';
import './PostAvailableSit.scss';

const PostAvailableSit = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <>
            <div className="availableSit">
                <div className="form">
                    <h3>Post Vacent Seat</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('firstName')} />
                        <select {...register('roomSize')} required>
                            <option value="">Room Size</option>
                            <option value="9 feet x 10 feet">
                                9 feet x 10 feet
                            </option>
                            <option value="10 x 10 feet">10 x 10 feet</option>
                        </select>
                        <select {...register('bedType')} required>
                            <option value="">Bed Type</option>
                            <option value="single-bed">Single Bed</option>
                            <option value="double-bed">Double Bed</option>
                        </select>
                        <select {...register('city')} required>
                            <option value="">Location</option>
                            <option value="dhaka">Dhaka</option>
                        </select>
                        <select {...register('gender')} required>
                            <option value="">Gender</option>
                            <option value="female">female</option>
                            <option value="male">male</option>
                        </select>
                        <input
                            type="number"
                            {...register('phone')}
                            placeholder="Phone"
                            required
                        />
                        <input type="file" {...register('img')} />
                        <input value="Post" type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default PostAvailableSit;
