import React from 'react';
import Navbar from './components/Navbar';
import PriceList from './components/PriceList';
import LChart from './components/LineChart';

const App = () => {
  return (
    <div>
      <Navbar/>
      <PriceList/>
      <LChart/>
    </div>
  );
};

export default App;