import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [originalText, setOriginalText] = useState('');

    const handleUpClick = () => {
        if (text.length === 0) {
            props.showAlert("Please enter text in the textarea", "warning");
            return;
        }
        let newText = originalText.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    };

    const handleLowClick = () => {
        if (text.length === 0) {
            props.showAlert("Please enter text in the textarea", "warning");
            return;
        }
        let newText = originalText.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    };

    const handleClrClick = () => {
        if (text.length === 0) {
            props.showAlert("Please enter text in the textarea", "warning");
            return;
        }
        setText('');
        setOriginalText('');
        props.showAlert("Text field is cleared", "success");
    };

    const handleCamelClick = () => {
        if (text.length === 0) {
            props.showAlert("Please enter text in the textarea", "warning");
            return;
        }
        let newText = originalText
            .trim().toLowerCase().split(/\s+/)
            .map((word, index) =>
                index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join('');
        setText(newText);
        props.showAlert("Converted to Camelcase", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
        setOriginalText(event.target.value);
    };

    const getWordCount = (text) => {
        return text.trim().split(/\s+/).filter(Boolean).length;
    };

    const wordCount = getWordCount(text);
    const charCount = text.length;
    const readingTime = (0.008 * wordCount).toFixed(2);

    const highlightEmails = (text) => {
        const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
        return text.replace(emailRegex, '<mark>$1</mark>');
    };

    const handleCopy = () => {
        if (text.length === 0) {
            props.showAlert("Please enter text in the textarea", "warning");
            return;
        }
        
        navigator.clipboard.writeText(text);
        
        props.showAlert("Text copied to clipboard", "success");
    };

    const handleReverseClick = () => {
        if (text.length === 0) {
            props.showAlert("Please enter text in the textarea", "warning");
            return;
        }
        const newText = text.split('').reverse().join('');
        setText(newText);
        setOriginalText(newText);
        props.showAlert("Converted to Reverse Order", "success");
    };

    const handleCapitalizeClick = () => {
        if (text.length === 0) {
            props.showAlert("Please enter text in the textarea", "warning");
            return;
        }
        const newText = text
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        setText(newText);
        setOriginalText(newText);
        props.showAlert("Converted to Capitalize", "success");
    };

    const handleRemoveExtraSpacesClick = () => {
        if (text.length === 0) {
            props.showAlert("Please enter text in the textarea", "warning");
            return;
        }
        const newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Removed all extra spaces", "success");
    };

    const highlightedText = highlightEmails(text);

    return (
        <>
            {/* Dynamically set placeholder color based on the mode */}
            <style>
                {`
                    #myBox::placeholder {
                        color: ${props.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
                    }
                `}
            </style>

            {/* Add margin or padding above the heading */}
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <label style={{marginTop: '50px'}} htmlFor="myBox" className="form-label mb-4">
                    <h1>{props.heading}</h1>
                </label>
                <div className="mb-3">
                    <textarea
                        className="form-control mb-2"
                        style={{ backgroundColor: props.mode === 'dark' ? 'rgb(128 140 192 / 89%)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="6"
                        placeholder='Enter text here'
                    ></textarea>
                    {/* disabled={text.length===0 } */}
                    <button   className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button   className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                    <button   className="btn btn-primary mx-1 my-1" onClick={handleCamelClick}>Convert to camelCase</button>
                    <button   className="btn btn-danger mx-1 my-1" onClick={handleClrClick}>Clear Text</button>
                    <button   className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button   className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse Text</button>
                    <button   className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick}>Capitalize Text</button>
                    <button  className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpacesClick}>Remove Extra Space</button>
                </div>
            </div>
            <div className="container m-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p><b>{wordCount}</b> words and <b>{charCount}</b> characters</p>
                <p><b>{readingTime} </b> minutes read</p>
                <h2>Preview</h2>
                {text.length > 0 ? (
                    <p dangerouslySetInnerHTML={{ __html: highlightedText }} />
                ) : (
                    <p>Nothing To preview!</p>
                )}
            </div>
        </>
    );
}
