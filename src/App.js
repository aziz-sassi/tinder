import React from 'react';
import './App.css';
import Header from './Header';
import Cards from './Cards'

function App() {
  return (
    <div className="app">
   {/* the nav bar */}
   <Header/>
   {/* the tinder card */}
   <Cards/>
   {/* the swipers */}
    </div>
  );
}

export default App;
