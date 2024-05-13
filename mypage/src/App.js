import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';
import './App.css';
import chopsticks from './images/chopsticks.png';

function App() {
  return (
    <Router>
      <div className="App" style={{ cursor: `url(${chopsticks}), auto`}}>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


