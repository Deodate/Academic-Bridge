

import React, { useState } from 'react';

const RequestPasswordReset: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleRequestReset = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
           
            const response = await fetch('/api/request-password-reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Password reset link sent to your email.');
            } else {
                throw new Error('Failed to send reset link');
            }
        } catch (err) {
            console.error(err);
            setMessage('Error sending reset link. Please try again.');
        }
    };

    return (
        <div>
            <h2>Request Password Reset</h2>
            <form onSubmit={handleRequestReset}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RequestPasswordReset;
