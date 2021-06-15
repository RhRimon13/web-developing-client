import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';
import 'react-calendar/dist/Calendar.css';
import { useParams } from 'react-router';
import moment from 'moment';
import SideBar from '../../Shared/SideBar/SideBar';



const AppointmentForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userData, setUserData] = useState(null);
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const { serviceId } = useParams()
    const [selectedService, setSelectedService] = useState({});

    useEffect(() => {
        fetch(`https://obscure-lowlands-19157.herokuapp.com/appointmentForm/${serviceId}`)
            .then(res => res.json())
            .then(data => setSelectedService(data))
    }, [serviceId])

    const handleDateChange = date => {
        setAppointmentDate(date)
    }

    const onSubmit = data => {
        console.log(data)
        setUserData(data);
    }

    const handlePaymentSuccess = paymentId => {
        const addAppointmentInfo = {
            ...loggedInUser,
            paymentId,
            ...selectedService,
            ...userData,
            orderTime: appointmentDate
        };
        console.log(addAppointmentInfo)
        delete addAppointmentInfo._id;


        fetch('https://obscure-lowlands-19157.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addAppointmentInfo)
        })
            .then(res => {
                console.log('server side res', res);
                alert('Your order placed successfully...');
            })

    }
    return (
        <div className="row">
            <SideBar></SideBar>
            <div className="p-5 col-md-8">
                <div className="row d-flex align-items-center">
                    <div style={{ display: userData ? 'none' : 'block' }} className="col-md-4 text-center">
                        <h3 style={{ color: '#3A4256' }}>Appointment Calender</h3>
                        <Calendar
                            className="ml-5"
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div style={{ display: userData ? 'none' : 'block' }} className="col-md-6 mt-5">
                        <h2 className="text-center text-brand">{selectedService.serviceName}</h2>
                        <p className="text-secondary text-center"><small>ON {appointmentDate.toDateString()}</small></p>

                        <form className="pl-5 text-center" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input className="form-control mb-2" defaultValue={loggedInUser.userName} {...register("userName", { required: true })} />
                                {errors.userName && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input className="form-control mb-2" defaultValue={loggedInUser.email} {...register("userEmail", { required: true })} />
                                {errors.userEmail && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input className="form-control mb-2" placeholder="Phone No" {...register("Phone", { required: true })} />
                                {errors.Phone && <span className="text-danger">This field is required</span>}
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>

                <div className="text-center offset-md-2" style={{ width: '60%', display: userData ? 'block' : 'none' }}>
                    <h2>Payment Here</h2>
                    <h3>Your Service Charge is: {selectedService.serviceCharge}</h3>
                    <Payment handlePayment={handlePaymentSuccess} className="text-center"></Payment>
                </div>
            </div>
        </div>
    );
};

export default AppointmentForm;