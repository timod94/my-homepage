import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const navStyle = {
        backgroundColor: '#111111', 
        padding: '15px 0',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    };

    const ulStyle = {
        display: 'flex',
        justifyContent: 'center',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    };

    const liStyle = {
        margin: '0 30px',
    };

    const linkStyle = {
        color: '#f39c12', // Gelb
        textDecoration: 'none', 
        fontSize: '18px',
        fontWeight: 500,
        transition: 'color 0.3s ease', 
    };

    const linkHoverStyle = {
        color: '#e67e22', // Orange
    };

    const linkContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    };

    return (
        <div>
        <nav style={navStyle}>
            <div style={linkContainerStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}>
                        <Link 
                            to="/" 
                            style={linkStyle} 
                            onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} 
                            onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                        >
                            Über mich
                        </Link>
                    </li>
                  
                    <li style={liStyle}>
                        <Link 
                            to="/projects" 
                            style={linkStyle} 
                            onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} 
                            onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                        >
                            Projekte
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
}

export default Header;
