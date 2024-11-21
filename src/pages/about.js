import React, { useState } from "react";
import { FaLinkedin, FaHtml5, FaNodeJs, FaAws, FaGithub, FaTools } from 'react-icons/fa';
import './about.css'

function About() {
    const [activeTab, setActiveTab] = useState('Frontend');

    // Tab-Inhalt
    const renderSkills = (skills) => (
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {skills.map((skill, index) => (
                <li key={index} style={{ padding: '10px 0', fontSize: '1.2rem' }}>{skill}</li>
            ))}
        </ul>
    );

    // Logik zur Berechnung des aktuellen Alters
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

    // Skills
    const frontendSkills = [
        'HTML', 'CSS', 'JavaScript', 'React'
    ];
    const backendSkills = [
        'Node.js', 'Python', 'Express.js', 'REST-APIs'
    ];
    const devOpsSkills = [
        'Grafana', 'Prometheus', 'Loki', 'Promtail', 'Node-Exporter'
    ];
    const awsServices = [
        'AWS Lambda', 'EC2', 'S3', 'IAM', 'CloudWatch', 'VPC', 'AWS Amplify'
    ];
    const gitSkills = [
        "GitFlow Verzweigungsstrategie", "Pull-Anfragen & Code-Überprüfungen", "Versionskontrolle mit Git", "Zusammenarbeit mit GitHub", "GitHub Actions für CI/CD"
    ];

    //########################### CSS inlineStyle ##################################
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

    const tabMenuStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
        gap: '15px',
        flexWrap: 'wrap', // Allow wrapping on smaller screens
    };

    const tabStyle = (isActive) => ({
        padding: '20px 20px',
        cursor: 'pointer',
        borderBottom: isActive ? '3px solid #e67e22' : '3px solid transparent',
        color: isActive ? '#e67e22' : '#111111',
        fontWeight: 'bold',
        transition: 'color 0.3s ease, border-bottom 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        flex: '1 1 100px', // Make tabs flexible and allow them to adjust
        justifyContent: 'center',
    });

    const iconStyle = {
        marginRight: '8px',
    };

    const contentStyle = {
        padding: '20px',
        textAlign: 'center',
        animation: 'fadeIn 0.5s ease-in-out',
    };

    return (
        <div style={aboutStyle}>
            <p style={headingStyle}>
                Hallo, ich bin Timo Dorst.
            </p>
            <p style={paragraphStyle}>
                Ich bin {age} Jahre alt und komme aus Gelsenkirchen.
                Aktuell befinde ich mich in einer Schulung mit dem Berufziel &#123; 'DevOps- und Cloud Computing Engineer' &#125; und habe bereits erste eigene Projekte realisiert. 
                Mit Begeisterung lerne ich ständig neue Technologien und erweitere mein Wissen.
            </p>

            <h1 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '100px' }}>Meine Skills</h1>

            {/* Tab Menü */}
            <div style={tabMenuStyle}>
                <div style={tabStyle(activeTab === 'Frontend')} onClick={() => setActiveTab('Frontend')}>
                    <FaHtml5 style={iconStyle} /> Frontend
                </div>
                <div style={tabStyle(activeTab === 'Backend')} onClick={() => setActiveTab('Backend')}>
                    <FaNodeJs style={iconStyle} /> Backend
                </div>
                <div style={tabStyle(activeTab === 'DevOps')} onClick={() => setActiveTab('DevOps')}>
                    <FaTools style={iconStyle} /> DevOps
                </div>
                <div style={tabStyle(activeTab === 'AWS')} onClick={() => setActiveTab('AWS')}>
                    <FaAws style={iconStyle} /> AWS-Dienste
                </div>
                <div style={tabStyle(activeTab === 'Git')} onClick={() => setActiveTab('Git')}>
                    <FaGithub style={iconStyle} /> Git & GitHub
                </div>
            </div>

            {/* Tab Inhalt */}
            <div style={contentStyle}>
                {activeTab === 'Frontend' && renderSkills(frontendSkills)}
                {activeTab === 'Backend' && renderSkills(backendSkills)}
                {activeTab === 'DevOps' && renderSkills(devOpsSkills)}
                {activeTab === 'AWS' && renderSkills(awsServices)}
                {activeTab === 'Git' && renderSkills(gitSkills)}
            </div>

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
