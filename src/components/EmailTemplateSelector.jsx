import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderConfirmation1 from '../templates/OrderConfirmation1.jsx';
import OrderConfirmation2 from '../templates/OrderConfirmation2.jsx';
import NewOrderEmailTemplate from '../templates/new-order.tsx';
import EmailTemplate from '../templates/password-reset.tsx';
import order_confirmation_1 from '../templates/order_confirmation_1.html'
import TemplatePreview from './TemplatePreview.jsx';

const templates = {
    'order_confirmation_1': order_confirmation_1,
    'order_confirmation_2': OrderConfirmation2,
    'new_order': NewOrderEmailTemplate,
    'password_reset': EmailTemplate,
};

function EmailTemplateSelector() {
    const [selectedTemplate, setSelectedTemplate] = useState('');
    const [emailData, setEmailData] = useState(null);

    useEffect(() => {
        try {
            axios.get(`https://api.zapvi.in/api/admin/orders/${304859}?store=62b00e15c4899dc7b1f78cb1`, {
                headers: {
                    Authorization: 'sk_b4e3d50f-31ee-47fa-af57-09bd8e791176'
                }
            }).then(res => setEmailData(res.data))
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/send-email', {
                templateName: selectedTemplate,
                data: emailData
            });
            console.log(2, response);
            alert('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-2xl mb-4">Email Sender</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block mb-2">Template Name:</label>
                    <select
                        name="templateName"
                        onChange={(e) => setSelectedTemplate(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Select Template</option>
                        <option value="order_confirmation_1">Order Confirmation 1</option>
                        <option value="order_confirmation_2">Order Confirmation 2</option>
                        <option value="new_order">New Order</option>
                        <option value="password_reset">Password reset</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Email</button>
            </form>

            {selectedTemplate && (
                <div className="mt-8">
                    <h2 className="text-xl mb-4">Template Preview:</h2>
                    <div className="border p-4 rounded bg-white shadow-md">
                        {selectedTemplate && (
                            <TemplatePreview templateHtml={templates[selectedTemplate]} data={emailData} />
                        )}
                        {/* {TemplateComponent ? <TemplateComponent data={emailData} /> : <p>Select a template to preview</p>} */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default EmailTemplateSelector;
