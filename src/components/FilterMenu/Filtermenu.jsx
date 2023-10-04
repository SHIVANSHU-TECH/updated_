"use client";
import React, { useState } from "react";
import "./FilterMenu.css"; // Create a CSS file for styling
import { FaFilter } from "react-icons/fa";

function FilterMenu() {
  const [dropdown1Value, setDropdown1Value] = useState("option1");
  const [range1Value, setRange1Value] = useState(1000);
  const [dropdown2Value, setDropdown2Value] = useState("option1");

  const [dropdown3Value, setDropdown3Value] = useState("option1");

  const handleApply = () => {
    // Handle applying the filter settings here
    // You can access the selected values and ranges using the state variables
    console.log("Filter settings applied!");
    console.log("Dropdown 1:", dropdown1Value);
    console.log("Range 1:", range1Value);
    console.log("Dropdown 2:", dropdown2Value);

    console.log("Dropdown 3:", dropdown3Value);
  };

  return (
    
    <div className="sidebar">
      <h2 className="heading">
        <span className="icon">
          <FaFilter />
        </span>
        Filters
      </h2>
      <div className="dropdown">
        <label className="label" htmlFor="dropdown1">
          Type
        </label>
        <select
          id="dropdown1"
          value={dropdown1Value}
          onChange={(e) => setDropdown1Value(e.target.value)}
        >
          <option value="option1">On-site</option>
          <option value="option2">Remote</option>
          <option value="option3">Hybrid</option>
        </select>
      </div>

      <div className="dropdown">
        <label className="label" htmlFor="dropdown2">
          Location
        </label>
        <select
          id="dropdown2"
          value={dropdown2Value}
          onChange={(e) => setDropdown2Value(e.target.value)}
        >
          <option value="option1">India</option>
          <option value="option2">Delhi - NCR</option>
          <option value="option3">Mumbai</option>
          <option value="option3">Pune</option>
          <option value="option3">Hyderabad</option>
          <option value="option3">Bangalore</option>
        </select>
      </div>

      <div className="dropdown">
        <label className="label" htmlFor="dropdown3">
          Duration
        </label>
        <select
          id="dropdown3"
          value={dropdown3Value}
          onChange={(e) => setDropdown3Value(e.target.value)}
        >
          <option value="option1">1 month</option>
          <option value="option2">2 month</option>
          <option value="option3">3 month</option>
          <option value="option3">6 month</option>
        </select>
      </div>

      <div className="range">
        <label className="range-label" htmlFor="range1">
          Stipend Between
        </label>
        <input
          type="range"
          id="range1"
          value={range1Value}
          onChange={(e) => setRange1Value(e.target.value)}
          min="0"
          max="15000"
        />
        <label htmlFor="value-range1" className="currentPrice">
          {range1Value}
        </label>
      </div>
      <button className="apply-button" onClick={handleApply}>
        Apply Filters
      </button>
    </div>
  );
}

export default FilterMenu;
