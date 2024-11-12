import React from 'react';

const InputCustom = ({ text, setText, placeholder = "Enter text" }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
        />
    );
};

export default InputCustom;
