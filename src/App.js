import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500); // Adjust timing as needed
    };

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            // showAlert("Dark mode has been Enabled", "success");
            document.title = 'TextUtils - Dark Mode';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            // showAlert("Light mode has been Enabled", "success");
            document.title = 'TextUtils - Light Mode';
        }
    };

    return (
        
        <Router>
            <Navbar title="TextUtil" about='About' mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} showAlert={showAlert} />
            <div className="container my-3">
                <Routes>
                    <Route path="/about" element={<About mode={mode} />} />
                    <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter" mode={mode} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
