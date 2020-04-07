import React from 'react';
import './App.css';
import NycDashboard from './components/nyc/nyc-component';
import Header from './components/header-component';

function App() {
  return (
    <div>
      <Header />
      <NycDashboard />
    </div>
  );
}

export default App;
