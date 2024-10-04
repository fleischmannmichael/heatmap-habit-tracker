// src/components/YearView.js
import React, { useState, useEffect } from 'react';
import './YearView.css';
import {
  format,
  eachDayOfInterval,
  startOfYear,
  endOfYear,
  getISODay,
  isToday,
  isLeapYear,
} from 'date-fns';

const YearView = ({ habitData, onMonthClick }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const currentYear = new Date().getFullYear();
  const isLeap = isLeapYear(new Date(currentYear, 0, 1));

  const months = [
    { name: 'Jan', days: 31 },
    { name: 'Feb', days: isLeap ? 29 : 28 },
    { name: 'Mar', days: 31 },
    { name: 'Apr', days: 30 },
    { name: 'May', days: 31 },
    { name: 'Jun', days: 30 },
    { name: 'Jul', days: 31 },
    { name: 'Aug', days: 31 },
    { name: 'Sep', days: 30 },
    { name: 'Oct', days: 31 },
    { name: 'Nov', days: 30 },
    { name: 'Dec', days: 31 },
  ];

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Get all the days of the current year up to December 31st
  const totalDays = eachDayOfInterval({
    start: startOfYear(new Date()),
    end: endOfYear(new Date()),
  });

  const weeks = [];
  let currentWeek = [];

  // Track the first day of the year (Monday is 1)
  let firstDayOfYear = getISODay(startOfYear(new Date()));

  if (firstDayOfYear !== 1) {
    for (let i = 1; i < firstDayOfYear; i++) {
      currentWeek.push(null); // Empty slots for the first week
    }
  }

  // Push each day into the grid
  totalDays.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length && currentWeek.some(Boolean)) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  // Calculate the total number of weeks
  const totalWeeks = weeks.length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.classList.contains('day-cell')) {
        setSelectedDay(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const getColorForDay = (dateKey) => {
    const dayData = habitData[dateKey] || {};
    const completedHabits = Object.values(dayData).filter(
      (value) => value === true
    ).length;

    switch (completedHabits) {
      case 1:
        return '#aed581'; // Light green
      case 2:
        return '#81c784'; // Medium green
      case 3:
        return '#4caf50'; // Dark green
      default:
        return '#e0e0e0'; // Default cell color (light gray)
    }
  };

  const handleDayClick = (day, event) => {
    const dateKey = day ? format(day, 'yyyy-MM-dd') : null;
    if (day) {
      const { top, left } = event.target.getBoundingClientRect();
      setTooltipPosition({
        top: top + window.scrollY + 30,
        left: left + window.scrollX + 30,
      });
    }
    setSelectedDay(day ? dateKey : null);
  };

  const handleMonthClick = (monthIndex) => {
    onMonthClick(monthIndex);
  };

  return (
    <div className="year-view">
      <div className="header-container">
        <div className="header">
          <h1>Habit Tracker</h1>
        </div>
      </div>

      <div className="heatmap-wrapper">
        <div className="month-labels">
          {months.map((month, index) => (
            <div
              key={index}
              className="month-name"
              onClick={() => handleMonthClick(index)}
            >
              {month.name}
            </div>
          ))}
        </div>

        <div className="heatmap-container">
          <div className="days-of-week">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="day-label">
                {day}
              </div>
            ))}
          </div>

          <div
            className="week-grid"
            style={{
              gridTemplateColumns: `repeat(${totalWeeks}, 14px)`,
            }}
          >
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="week-column">
                {week.map((day, dayIndex) => {
                  if (!day) {
                    return (
                      <div key={dayIndex} className="day-cell background-cell" />
                    );
                  }
                  const dateKey = format(day, 'yyyy-MM-dd');
                  const backgroundColor = getColorForDay(dateKey);
                  const isCurrentDay = isToday(day);

                  return (
                    <div
                      key={dayIndex}
                      className={`day-cell ${isCurrentDay ? 'current-day' : ''}`}
                      style={{ backgroundColor }}
                      onClick={(event) => handleDayClick(day, event)}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {selectedDay && (
          <div
            className="tooltip"
            style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
          >
            <p>{format(new Date(selectedDay), 'EEE, MMM d yyyy')}</p>
            <p>Your daily habit journal will appear here!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YearView;