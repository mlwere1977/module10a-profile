// Name: Mukwaya Lwere
// Class: CS 81 JavaScript
// Module 10 Assignment 10B: Dynamic Profile
// Date: 07/27/2025

// src/Profile.jsx
// A basic profile card with a name, occupation, and an interesting fact is displayed by this component.
// It has a button that uses component state to toggle the fun fact's visibility.
// For simple customization and scoped styling, styles are applied inline.

import React, { useState } from 'react';

function Profile({ name, occupation, funFact }) {
  // useState hook to keep track of whether the extra detail (funFact) is shown or hidden
  const [showDetail, setShowDetail] = useState(false);

  // Function toggles the showDetail state between true and false each time it is called
  const toggleDetail = () => {
    setShowDetail(prev => !prev); // Flip the previous state value
  };

  // Inline styles for the main container div to give it structure and style
  const containerStyle = {
    maxWidth: '320px',           // Limit the width to keep card compact
    margin: '20px auto',         // Center horizontally with vertical margin
    padding: '20px',             // Padding inside the card for spacing
    border: '2px solid #6200ee', // Purple border to define the card edges
    borderRadius: '8px',         // Rounded corners for a friendly look
    fontFamily: 'Arial, sans-serif',  // Use a clean, sans-serif font
    backgroundColor: '#f0f0ff', // Light purple background for subtlety
    color: '#222',               // Dark text for readability
    textAlign: 'center',         // Center all text horizontally
  };

  // Styles for the toggle button, designed to be easily clickable and visually appealing
  const buttonStyle = {
    marginTop: '15px',         // Space above the button so it isn't cramped
    padding: '8px 16px',       // Comfortable padding inside the button
    backgroundColor: '#6200ee',// Purple background matching border color
    color: 'white',            // White text for contrast
    border: 'none',            // Remove default button border
    borderRadius: '5px',       // Rounded button corners
    cursor: 'pointer',         // Pointer cursor on hover indicates it is clickable
    fontWeight: 'bold',        // Bold text to make the button label stand out
  };

  // Styles for the extra detail text shown on toggle
  const detailStyle = {
    marginTop: '15px',         // Space above the extra detail paragraph
    fontStyle: 'italic',       // Italic font style to differentiate it
    color: '#444',             // A softer dark color for less emphasis than main text
  };

  return (
    // Main container div with styles and an accessible label describing the content
    <div style={containerStyle} aria-label={`${name} profile`}>
      
      {/* Display the person's name as a prominent heading */}
      <h2>{name}</h2>
      
      {/* Display occupation below the name in a smaller heading */}
      <h4>{occupation}</h4>

      {/* Conditionally render the funFact paragraph only when showDetail is true */}
      {showDetail && (
        <p style={detailStyle}>{funFact}</p>
      )}

      {/* Toggle button to show or hide the extra detail */}
      <button
        style={buttonStyle}           // Apply button styling
        onClick={toggleDetail}        // Attach click event to toggle detail visibility
        aria-expanded={showDetail}    // ARIA accessibility attribute for expanded state
        aria-controls="extra-detail"  // ARIA relationship to the controlled element
      >
        {/* Change button label based on current state */}
        {showDetail ? 'Hide Detail' : 'Show Detail'}
      </button>
    </div>
  );
}

export default Profile;
