import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RequestPasswordReset from '@/auth/RequestPasswordReset';
import ResetPassword from '@/auth/resetPassword';


const App: React.FC = () => {
    return (
        <Router>
            <div>
                <header style={styles.header}>
                    <img src="Logos.png" alt="Academic Bridge" style={styles.logo} />
                    <nav style={styles.nav}>
                        <Link to="/" style={styles.navLink}>HOME</Link>
                        <Link to="/features" style={styles.navLink}>SUPPORTED PROGRAMS</Link>
                        <Link to="/impact" style={styles.navLink}>FEATURES</Link>
                        <Link to="/impact" style={styles.navLink}>IMPACT</Link>
                        <Link to="/faq" style={styles.navLink}>FAQS</Link>
                        <Link to="/e-learning" style={styles.navLink}>E-LEARNING</Link>
                        <Link to="/contacts" style={styles.navLink}>Contacts</Link>
                    </nav>
                    <Link to="/Login" style={styles.loginButton}>Login</Link>
                </header>
                
                <Routes>
                
                    <Route path="/request-password-reset" element={<RequestPasswordReset />} />
                    <Route path="/reset-password/:token" element={<ResetPassword />} />
                    {/* Add other routes for your application here */}
                </Routes>
                
                <footer style={styles.footer}>
                    {/* You can add footer content here if needed */}
                </footer>
            </div>
        </Router>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
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
        textDecoration: 'none', 
    },
    footer: {
       
        padding: '20px',
        textAlign: 'center',
    },
};

export default App;
