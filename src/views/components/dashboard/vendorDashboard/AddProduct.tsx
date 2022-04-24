import React from 'react';
import { useForm } from 'react-hook-form';
import '../../../pages/PostAvailableSit/PostAvailableSit.scss';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <>
            <div className="availableSit">
                <div className="form">
                    <h3>Add Product</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('title')} placeholder="Name" />
                        <input
                            {...register('subtitle')}
                            placeholder="Short Description"
                        />
                        <select {...register('categories')} required>
                            <option value="">Categories</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Furniture">Furniture</option>
                        </select>
                        <select {...register('brand')} required>
                            <option value="">Brand</option>
                            <option value="single-bed">Apple</option>
                            <option value="double-bed">Samsung</option>
                        </select>
                        <input
                            {...register('feature')}
                            placeholder="Features"
                        />

                        <input
                            type="number"
                            {...register('price')}
                            placeholder="Price"
                            required
                        />
                        <input
                            type="file"
                            {...register('img')}
                            placeholder="Product Image"
                        />
                        <input value="Add" type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProduct;
