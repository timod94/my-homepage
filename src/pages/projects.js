import React, { useState } from "react";
import './projects.css';

function Projects() {
 
  const images = [
    "/images/Screenshot_login.png",
    "/images/Screenshot_register.jpg",
    "images/Screenshot_mainpage.png"
  ];

  
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);//Modul öffnen
  };

  const closeModal = () => {
    setModalOpen(false);//Modul schließen
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };


  const sectionStyle = {
    padding: '50px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    boxShadow: 'none',
    fontFamily: 'Georgia, serif',

  };

  const headingStyle = {
    fontSize: '2.2rem',
    color: '#111111',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const projectContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-start',  // Bilder werden an den Anfang gesetzt
    flexWrap: 'wrap',
    marginBottom: '20px',
  };
  

  const projectStyle = {
    width: '30%',
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '200px',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  // Modal-Style
  const modalStyle = {
    display: isModalOpen ? "block" : "none",
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: 1000, // Damit das Modal oben angezeigt wird
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  };

  const modalContentStyle = {
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
    textAlign: 'center',
  };

  const modalImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1001,
  };

  const prevButtonStyle = {
    left: '10px',
  };

  const nextButtonStyle = {
    right: '10px',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 1001,
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#111111',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '10px auto',
  };

  const linkStyle = {
    color: '#f39c12', // gelb
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#e67e22', // orange
  };

  const describeblockStyle = {
    textAlign: 'center',
    fontSize: '1.3rem',
    color: '#111111',
    lineHeight: '1.7',
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: '80px',
  }

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle} className="fadeIn">SnuggleBuddy</h2>
      <p style={describeblockStyle} className="fadeIn">Gemeinsam mit einem Team von fünf Leuten haben wir im Rahmen unserer Weiterbildung ein virtuelles Haustier-Spiel entwickelt.<br/>
        Das Spiel ist über eine Web-App spielbar und basiert auf JavaScript, HTML, CSS sowie Node.js.</p>

      <div style={projectContainerStyle} className="fadeIn">
        <div style={projectStyle}>
          <h2>Code-Element vom Login</h2>
          <img
            src="/images/Screenshot_login.png"
            alt="SnuggleBuddy"
            style={imageStyle}
            onClick={() => openModal(0)} 
          />
        </div>
        <div style={projectStyle}>
          <h2>/register</h2>
          <img
            src="/images/Screenshot_register.jpg"
            alt="SnuggleBuddy"
            style={imageStyle}
            onClick={() => openModal(1)} 
          />
        </div>
        <div style={projectStyle}>
          <h2>/mainpage</h2>
          <img
            src="/images/Screenshot_mainpage.png"
            alt="SnuggleBuddy"
            style={imageStyle}
            onClick={() => openModal(2)} 
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={modalStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentImageIndex]} 
              alt="Modal Image"
              style={modalImageStyle}
            />
            {/* Vorheriges Bild */}
            <button
              style={{ ...buttonStyle, ...prevButtonStyle }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              &lt;
            </button>
            {/* Nächstes Bild */}
            <button
              style={{ ...buttonStyle, ...nextButtonStyle }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              &gt;
            </button>
            {/* Schließ-Button (X) */}
            <button
              style={closeButtonStyle}
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
<br/><br/>
      {/* GitHub-Link */}
      <p style={paragraphStyle}>
        Du findest meine Projekte auf GitHub: {''}
        <a 
          href="https://github.com/timod94?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
          onMouseOut={(e) => e.target.style.color = linkStyle.color}
        >
          Mein GitHub-Profil
        </a>
      </p>
    </section>
  );
}

export default Projects;
