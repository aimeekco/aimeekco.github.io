import React from 'react';
import '../styles/scrollIndicator.css';

function ScrollIndicator() {
    return (
        <div className="scroll-indicator">
            <span>↓ Scroll down! ↓ </span>
            <div className="arrow"></div>
        </div>
    );
}

export default ScrollIndicator;
