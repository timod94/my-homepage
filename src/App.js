import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Projects from './pages/projects';
import { SpeedInsights } from '@vercel/speed-insights/react';




function App() {
  return (
    
    <Router>

    <div id="top">
    <SpeedInsights />
      <Header />
      <Routes>

        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>
      <Footer /> 
    </div>

    </Router>
  );
}

export default App;
