import React from 'react';

const Signup: React.FC = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Signup</h2>
            <form style={styles.form}>
                <label style={styles.label}>
                    Name:
                    <input type="text" style={styles.input} required />
                </label>
                <label style={styles.label}>
                    Email:
                    <input type="email" style={styles.input} required />
                </label>
                <label style={styles.label}>
                    Password:
                    <input type="password" style={styles.input} required />
                </label>
                <label style={styles.label}>
                    Confirm Password:
                    <input type="password" style={styles.input} required />
                </label>
                <button type="submit" style={styles.submitButton}>Signup</button>
            </form>
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
};

export default Signup;
