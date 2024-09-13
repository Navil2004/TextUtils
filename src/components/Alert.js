import React from 'react';

export default function Alert(props) {
    // Function to capitalize the first letter of the alert type
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        <div style={{ height: '50px' }}>
            {props.alert && (
                <div
                    className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                    role="alert"
                    style={{
                        position: 'fixed',
                        top: '60px', // Adjust based on your navbar height
                        right: '0px',
                        left: '0px', // Adjust for margin from the right edge
                        zIndex: '1050', // Ensure it appears above other elements
                        width: '100%', // Adjust width as needed
                        marginBottom: '20px'
                    }}
                >
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                   
                </div>
            )}
        </div>
    );
}
