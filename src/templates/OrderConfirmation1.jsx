import React from 'react';

const OrderConfirmation1 = ({ data }) => (
    <div className="p-4 bg-white shadow-md rounded">
        <p>Dear {data?.userFirstName},</p>
        <p>Thank you for your order!</p>
        <p>Order Number: {data?.orderNo}</p>
        <p>Shipping Address: {data?.shipping_address?.address}</p>
        <p>Regards,<br />Zapvi</p>
    </div>
);

export default OrderConfirmation1;
