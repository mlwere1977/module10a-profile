// App.jsx
import React from 'react';
import Profile from './Profile';

function App() {
  // I choose Serena Williams as the artists. 
  const personName = "Serena Williams";
  const personOccupation = "Professional Tennis Player";
  const personFunFact = "Serena has won 23 Grand Slam singles titles, the most by any player in the Open Era.";

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Spotlight Profile</h1>
      
      <Profile 
        name={personName} 
        occupation={personOccupation} 
        funFact={personFunFact} 
      />
    </div>
  );
}

export default App;
