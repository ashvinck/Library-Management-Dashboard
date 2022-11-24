import React from 'react'
import Box from '../components/box/Box.jsx';
import Getmember from '../components/Checkout/CheckoutAPI.jsx';
import CheckoutForm from '../components/Checkout/Checkoutform.jsx';

const Checkout = () => {
    return (
        <Box>
            <CheckoutForm />
            <Getmember />
        </Box>
    )
}

export default Checkout;