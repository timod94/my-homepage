import React from "react";

function Footer() {

    const footerStyle = {
        backgroundColor: '#111111', // dark-grey
        color: '#F0F0F0', // white
        textAlign: 'center', 
        padding: '20px',
        position: 'relative',
        bottom: '0',
        maxWidth: '100%',
        fontSize: '14px',
    };

    return (
        <footer style={footerStyle}>
        
            <a href="#top" style={{ color: '#e67e22', textDecoration: 'none', fontWeight: 'bold' }}>
                Nach oben
                </a>

                <p>&copy; 2024, Timo Dorst-Alle Rechte vorbehalten</p>

        </footer>
    );
}

export default Footer;
