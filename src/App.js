import React from 'react';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import SwipeButtons from './SwipeButtons'

function App() {
  return (
    <div className="app">
   {/* the nav bar */}
   <Header/>
   {/* the tinder card */}
   <Cards/>
   {/* the swipers */}
   <SwipeButtons/>
    </div>
  );
}

export default App;
