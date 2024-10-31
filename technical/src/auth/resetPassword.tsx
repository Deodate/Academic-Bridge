

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword: React.FC = () => {
    const { token } = useParams<{ token: string }>(); 
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
           
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, password }),
            });

            if (response.ok) {
                setMessage('Password has been reset successfully.');
            } else {
                throw new Error('Failed to reset password');
            }
        } catch (err) {
            console.error(err);
            setMessage('Error resetting password. Please try again.');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleResetPassword}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;
