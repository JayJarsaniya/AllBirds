import React, { useState } from 'react';
import './style/Help.css';

const Help = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setInputValue('');
    }
  };

  return (
    <div className="help-container">
      <div className="help-main">
        <h2>How Can We Help?</h2>
        <p>Chat with us</p>
        <p>Send us a text: 1-814-251-9966</p>
        <p>Give us a call: 1-888-963-8944</p>
        <p>Monday - Friday: 5AM - 5PM PST</p>
        <p>Saturday - Sunday: 9AM - 2PM PST</p>
        <p>Holidays may impact business hours.</p>
      </div>
      <input 
        type="text" 
        placeholder="What can we help you with?" 
        value={inputValue} 
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Help;
