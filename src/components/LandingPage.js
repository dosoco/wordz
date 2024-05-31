import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = ({ setGameLevel }) => {
  return (
    <div className="landing-page">
      <h2>Select Difficulty Level</h2>
      <button onClick={() => setGameLevel('easy')}>Easy (3 letter words)</button>
      <button onClick={() => setGameLevel('medium')}>Medium (5 letter words)</button>
      <button onClick={() => setGameLevel('hard')}>Hard (7 letter words)</button>
    </div>
  );
};

export default LandingPage;
