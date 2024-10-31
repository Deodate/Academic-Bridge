import React from 'react';

const Home: React.FC = () => {
    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Academic Bridge
</h2>
                <form style={styles.formContainer} id="login-form">
                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input type="email" id="email" name="email" required placeholder="janedoe@mail.com" style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input type="password" id="password" name="password" required placeholder="enter your password" style={styles.input} />
                    </div>
                    <button type="submit" style={styles.button}>Log in</button>
                </form>
                <div style={styles.linksContainer}>
                    <a href="/signup" style={styles.link}>Create an account</a>
                    <a href="/forgot-password" style={styles.link}>Forgot password?</a>
                </div>
            </div>
        </div>
    );
};

// Define styles with React.CSSProperties type
const styles: { [key: string]: React.CSSProperties } = {
    body: {
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'linear-gradient(180deg, #007BFF, #6C63FF)', // Gradient background
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    container: {
        width: '100%',
        maxWidth: '350px',
        padding: '30px',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    heading: {
        fontSize: '1.5em',
        marginBottom: '20px',
        color: '#000',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '15px',
        textAlign: 'left',
    },
    label: {
        fontSize: '0.9em',
        color: '#333',
        marginBottom: '5px',
    },
    input: {
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '1em',
        backgroundColor: '#F9F9F9',
    },
    button: {
        padding: '10px',
        borderRadius: '6px',
        border: 'none',
        color: '#FFFFFF',
        backgroundColor: '#000',
        cursor: 'pointer',
        fontSize: '1em',
        marginTop: '15px',
    },
    linksContainer: {
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.9em',
    },
    link: {
        color: '#0000EE',
        textDecoration: 'none',
    },
};

export default Home;
