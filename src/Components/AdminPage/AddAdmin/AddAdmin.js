import React from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../../Shared/SideBar/SideBar';

const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const adminInfo = {
            email: data.adminEmail
        };
        console.log(adminInfo)

        fetch(`https://obscure-lowlands-19157.herokuapp.com/addAdmin`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(adminInfo)
        })
            .then(res => {
                console.log('server side res', res)
                alert('Admin added successfully...');
            })
    }


    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-4 pr-5 text-center" style={{ position: "absolute", right: 0, backgroundColor: "#D6DBDF" }}>
                <h2 style={{ color: '#2E4053', fontSize: '40px', fontFamily: 'Georgia' }}>Add New Admin</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="my-2" {...register("adminEmail", { required: true })} />
                    {errors.adminEmail && <span>This field is required</span>}
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;