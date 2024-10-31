import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

      
        setMessage('');
        setError('');

      
        try {
           
            if (email) {
                setMessage(`Password reset instructions sent to ${email}`);
            } else {
                throw new Error('Email is required');
            }
        } catch (err: unknown) {
            // Check if the error is an instance of Error
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Forgot Password</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
                <label style={styles.label}>
                    Email:
                    <input
                        type="email"
                        style={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" style={styles.submitButton}>Send Reset Link</button>
            </form>
            {message && <p style={styles.successMessage}>{message}</p>}
            {error && <p style={styles.errorMessage}>{error}</p>}
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        padding: '40px',
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center',
    },
    heading: {
        fontSize: '1.5em',
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '15px',
        color: '#333',
    },
    input: {
        padding: '10px',
        fontSize: '1em',
        marginTop: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    submitButton: {
        padding: '10px 20px',
        backgroundColor: '#0058a9',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1em',
    },
    successMessage: {
        marginTop: '20px',
        color: 'green',
    },
    errorMessage: {
        marginTop: '20px',
        color: 'red',
    },
};

export default ForgotPassword;
