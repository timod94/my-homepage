import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Projects from './pages/projects';



function App() {
  return (
    <Router>

    <div id="top">
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
