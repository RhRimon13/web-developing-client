import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import PaymentCardForm from '../PaymentCardForm/PaymentCardForm';


const stripePromise = loadStripe('pk_test_51IeFTrFPTXsnasu8COZJc9sAncRb4SrC5fqyGMGtm7Xk9zyUWg78cwUZlc2T9yxjyKazB3dFJMroq9O28PVy7aVQ00jiWZsRnF');


const Payment = ({ handlePayment }) => {

    return (
        <Elements stripe={stripePromise}>
            <PaymentCardForm handlePayment={handlePayment}></PaymentCardForm>
        </Elements>
    );
};

export default Payment;