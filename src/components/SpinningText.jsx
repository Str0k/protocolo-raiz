import React from 'react';
import './SpinningText.css';

const SpinningText = ({ prefix = "No engordaste", words = ["en diciembre", "en fiestas", "5 kilos", "por comer", "en diciembre"] }) => {
    return (
        <div className="st-card">
            <div className="st-loader">
                <p>{prefix}</p>
                <div className="st-words">
                    {words.map((word, index) => (
                        <span key={index} className="st-word">
                            {word}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpinningText;
