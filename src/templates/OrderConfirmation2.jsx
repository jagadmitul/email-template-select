import React from 'react';

const OrderConfirmation2 = ({ data }) => (
    <div className="p-4 bg-gray-100 shadow-md rounded">
        <h2>Order Confirmation</h2>
        <p>Hello {data?.userFirstName},</p>
        <p>Your order {data?.orderNo} has been received!</p>
        <p>It will be shipped to: {data?.shipping_address?.address}</p>
        <p>Best regards,<br />Zapvi</p>
    </div>
);

export default OrderConfirmation2;
