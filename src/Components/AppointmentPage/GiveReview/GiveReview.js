import React from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../../Shared/SideBar/SideBar';

const GiveReview = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const reviewerInfo = {
            userName: data.userName,
            companyName: data.companyName,
            description: data.description
        };
        console.log(reviewerInfo)

        fetch(`https://obscure-lowlands-19157.herokuapp.com/addReview`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(reviewerInfo)
        })
            .then(res => {
                console.log('server side res', res)
                alert('Your review added successfully...');
            })

    }


    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-4 pr-5 text-center" style={{ position: "absolute", right: 0, backgroundColor: "#D6DBDF" }}>
                <h1 style={{ color: '#2E4053', fontSize: '40px', fontFamily: 'Georgia' }}>Write A Review</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control mb-2" placeholder="User Name" {...register("userName", { required: true })} />
                    {errors.userName && <span className="text-danger">This field is required</span>}

                    <input className="form-control mb-2" placeholder="Company Name" {...register("companyName", { required: true })} />
                    {errors.companyName && <span className="text-danger">This field is required</span>}

                    <textarea className="form-control mb-2" placeholder="Description" {...register("description", { required: true })} />
                    {errors.description && <span className="text-danger">This field is required</span>}
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default GiveReview;