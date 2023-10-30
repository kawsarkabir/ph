import React from "react";
import PropTypes from "prop-types";
import StatisticsPage from "./components/StatisticePage";
 

const App = () => {
  const donations = 4;
  const totalDonations = 12;

  return (
    <div>
      <StatisticsPage donations={donations} totalDonations={totalDonations} />
    </div>
  );
};

App.propTypes = {};

export default App;
