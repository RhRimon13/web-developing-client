import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../../Shared/SideBar/SideBar';

const AddServices = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imgUrl, setImageUrl] = useState();

    const onSubmit = data => {
        const serviceInfo = {
            serviceName: data.serviceTitle,
            developer: data.developerName,
            serviceCharge: data.serviceCharge,
            serviceId: data.serviceId,
            serviceImg: imgUrl
        };

        fetch(`https://obscure-lowlands-19157.herokuapp.com/addService`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => console.log('server side res', res))

    }

    const handleImageUpload = e => {
        const imageInfo = new FormData();
        imageInfo.set('key', '631031eb71a18470978112b28de484ea');
        imageInfo.append('image', e.target.files[0]);

        axios.post("https://api.imgbb.com/1/upload", imageInfo)
            .then(function (res) {
                setImageUrl(res.data.data.display_url);
            })
            .catch(function (res) {
                console.log(res)
            })

    }

    return (
        <div className="container-fluid row title-text">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-4 pr-5 text-center" style={{ position: "absolute", right: 0, backgroundColor: "#D6DBDF" }}>
                <h1 style={{ color: '#2E4053', fontSize: '40px', fontFamily: 'Georgia' }}>Add services</h1>

                <form className="m-3" onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" className="form-control mb-2" placeholder="Service Name" {...register("serviceTitle", { required: true })} />
                    {errors.serviceTitle && <span className="text-danger">This field is required</span>}

                    <input type="text" className="form-control mb-2" placeholder="Developer Name" {...register("developerName", { required: true })} />
                    {errors.developerName && <span className="text-danger">This field is required</span>}

                    <input type="text" className="form-control mb-2" placeholder="Service Charge" {...register("serviceCharge", { required: true })} />
                    {errors.serviceCharge && <span className="text-danger">This field is required</span>}

                    <input type="text" className="form-control mb-2" placeholder="Service ID" {...register("serviceId", { required: true })} />
                    {errors.serviceId && <span className="text-danger">This field is required</span>}

                    <input className="form-control mb-2" type="file" onChange={handleImageUpload} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;