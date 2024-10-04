// src/App.js
import React, { useState, useEffect } from 'react';
import YearView from './components/YearView';
import MonthView from './components/MonthView';
import './App.css';

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(null); // Track selected month
  const [habitData, setHabitData] = useState({}); // Store habit data

  // Load habit data from localStorage on mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('habitData')) || {};
    setHabitData(savedData);
  }, []);

  // Save habit data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('habitData', JSON.stringify(habitData));
  }, [habitData]);

  // Handle month click to show month view
  const handleMonthClick = (monthIndex) => {
    setSelectedMonth(monthIndex);
  };

  // Handle back button to return to year view
  const handleBackToYear = () => {
    setSelectedMonth(null);
  };

  return (
    <div className="App">
      {selectedMonth === null ? (
        <YearView habitData={habitData} onMonthClick={handleMonthClick} />
      ) : (
        <MonthView
          selectedMonth={selectedMonth}
          habitData={habitData}
          setHabitData={setHabitData}
          onBackToYear={handleBackToYear}
        />
      )}
    </div>
  );
};

export default App;