"use client"

import { ContactComp } from "@components/ContactComp";
import { useState } from "react";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const target = event.target as typeof event.target & {
            fullname: { value: string };
            phone: { value: string };
            email: { value: string };
            message: { value: string };
        };

        // Get form data
        const formData = {
            fullName: target.fullname.value,
            phoneNo: target.phone.value,
            email: target.email.value,
            message: target.message.value,
        };

        // Send form data to API route
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        setLoading(false);

        if (response.ok) {
            // Handle success (e.g., show a success message)
            alert('Message sent successfully!');
        } else {
            // Handle error
            alert('Failed to send message.');
        }
    };
    
    return <>
        <ContactComp onSubmitHandler={handleSubmit} isLoading={loading}></ContactComp>
    </>
}