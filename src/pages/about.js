import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import './about.css'

function About() {
    // berechnung des aktuellen alters
    const birthDate = new Date('1994-10-23');
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    // Hover-Zustände verwalten
    const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
    const [isEmailHovered, setIsEmailHovered] = useState(false);

    
// ####################################### CSS inlineStyle ################################################
    const aboutStyle = {
        padding: '20px 20px',
        textAlign: 'center',
        color: '#111111',
        lineHeight: '1.8',
    };

    const headingStyle = {
        fontSize: '3rem',
        color: '#111111',
        marginBottom: '40px',
    };

    const paragraphStyle = {
        fontSize: '1.3rem',
        color: '#111111',
        lineHeight: '1.7',
        maxWidth: '800px',
        margin: '0 auto',
    };

    const linkedinButtonStyle = {
        display: 'inline-block',
        color: isLinkedInHovered ? '#0077b5' : '#111111', // LinkedIn-Farbe
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        padding: '10px 20px',
        border: `2px solid ${isLinkedInHovered ? '#0077b5' : '#111111'}`,
        borderRadius: '30px',
        marginRight: '10px',
        transition: 'color 0.3s ease, border-color 0.3s ease',
    };

    const contactLinkStyle = {
        color: isEmailHovered ? '#e67e22' : '#111111',
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '10px 20px',
        border: `2px solid ${isEmailHovered ? '#e67e22' : '#111111'}`,
        borderRadius: '30px',
        transition: 'color 0.3s ease, border-color 0.3s ease',
    };

    const contactContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40px',
    };

// ####################################### ---- ################################################
    return (
        <div style={aboutStyle}>
            <p style={headingStyle}>
                Hallo, ich bin Timo Dorst.
            </p>
            <p style={paragraphStyle}>
                Ich bin {age} Jahre alt und komme aus Gelsenkirchen.
                Derzeit befinde ich mich in einer Weiterbildung mit dem Berufziel &#123; 'DevOps- und Cloud Computing Engineer' &#125; und habe bereits erste eigene Projekte realisiert. 
                Mit Begeisterung lerne ich ständig neue Technologien und erweitere mein Wissen.
            </p>
            
            {/* LinkedIn & Mail */}
            <div style={contactContainerStyle}>
                <a
                    href="https://www.linkedin.com/in/timo-dorst-a8b565338/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkedinButtonStyle}
                    onMouseEnter={() => setIsLinkedInHovered(true)}
                    onMouseLeave={() => setIsLinkedInHovered(false)}
                >
                    <FaLinkedin style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Verbinde dich mit mir auf LinkedIn
                </a>
                <span style={{ margin: '0 15px', color: '#666' }}>|</span>
                <a
                    href="mailto:dorstt94@gmail.com"
                    style={contactLinkStyle}
                    onMouseEnter={() => setIsEmailHovered(true)}
                    onMouseLeave={() => setIsEmailHovered(false)}
                >
                    Oder schreib mir direkt: dorstt94@gmail.com
                </a>
            </div>
        </div>
    );
}

export default About;
