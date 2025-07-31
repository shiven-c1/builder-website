import React from 'react';

const ContactButton = () => {
    const phoneNumber = '8652463737';
    const whatsappNumber = '8652463737';

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.location.href = `https://wa.me/${whatsappNumber}`;
    };

    return (
        <div className="contact-buttons">
            <button onClick={handleCall} className="call-button">
                Call Us
            </button>
            <button onClick={handleWhatsApp} className="whatsapp-button">
                Message on WhatsApp
            </button>
        </div>
    );
};

export default ContactButton;