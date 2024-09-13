import React from 'react';
import PropTypes from 'prop-types';

export default function About({ mode }) {
  // Define styles based on the current mode
  const myStyle = {
    color: mode === 'dark' ? 'white' : 'black',
    backgroundColor: mode === 'dark' ? '#042743' : 'white',
    border: 'none', // No border on the container
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h1 className="my-3" style={{ color: myStyle.color }}>About TextUtils</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={{ backgroundColor: mode === 'dark' ? '#003366' : '#e9ecef', color: myStyle.color }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              What is TextUtils?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils</strong> is a versatile text manipulation tool that allows users to perform various operations on text. It supports features like converting text to uppercase, lowercase, camel case, and more. The app provides a user-friendly interface for analyzing and transforming text efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ backgroundColor: mode === 'dark' ? '#003366' : '#e9ecef', color: myStyle.color }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Features
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils</strong> offers a variety of features to enhance text processing:
              <ul>
                <li>Convert text to uppercase, lowercase, or camel case.</li>
                <li>Remove extra spaces and reverse text.</li>
                <li>Copy text to clipboard and clear the text area.</li>
                <li>Capitalize each word for better readability.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ backgroundColor: mode === 'dark' ? '#003366' : '#e9ecef', color: myStyle.color }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              How It Works
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils</strong> is built with React and provides a responsive UI for text manipulation. The app uses state management to handle user inputs and display the results in real-time. The mode switching feature ensures that users can work comfortably in both light and dark environments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Define prop types to ensure correct data types
About.propTypes = {
  mode: PropTypes.string.isRequired,
};
