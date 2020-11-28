import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="container">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
