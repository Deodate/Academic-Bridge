import React from 'react';
import { Link } from 'react-router-dom';



const Home: React.FC = () => {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <img src="Logos.png" alt="Academic Bridge" style={styles.logo} />
                <nav style={styles.nav}>
                    <a href="/" style={styles.navLink}>HOME</a>
                    <a href="/features" style={styles.navLink}>SUPPORTED PROGRAMS</a>
                    <a href="/impact" style={styles.navLink}>FEATURES</a>
                    <a href="/faq" style={styles.navLink}>IMPACT</a>
                    <a href="/faq" style={styles.navLink}>FAQS</a>
                    <a href="/faq" style={styles.navLink}>E-LEARNING</a>
                    <a href="/contacts" style={styles.navLink}>Contacts</a>
                </nav>
                <Link to="/Login" style={styles.loginButton}>Login</Link>
            </header>
            <div style={styles.container}>
                <h1 style={styles.mainHeading}>Digitizing Africa's Education Systems</h1>
                <p style={styles.subtitle}><br></br>
                    We envision a future where every school in Africa is fully digitized for both academic and non-academic processes.
                </p><br></br>
                <div style={styles.buttonContainer}>
                    <button style={styles.studentButton}>Student Login</button>
                    <button style={styles.parentButton}>Student Signup</button>
                </div>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    body: {
        fontFamily: 'Arial, sans-serif',
        color: 'black',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
    },
    logo: {
        height: '40px',
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    navLink: {
        textDecoration: 'none',
        color: '#333',
        fontSize: '1em',
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#0058a9',
        color: '#fff',
        padding: '4px 15px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
    container: {
        textAlign: 'center',
        maxWidth: '600px',
        padding: '40px',
    },
    mainHeading: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: '1.1em',
        color: '#555',
        marginBottom: '20px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
    },
    studentButton: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '50px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    parentButton: {
        backgroundColor: '#0058a9',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '50px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
};

export default Home;
