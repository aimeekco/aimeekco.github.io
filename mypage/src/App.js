import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="App">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;


