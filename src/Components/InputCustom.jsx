import React from 'react';
import '../Styles/Entity.css';

const InputCustom = ({ text, setText, placeholder = "Enter text" , type="text"}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={text}
            className="input-custom"
            onChange={(e) => setText(e.target.value)}
            required
        />
    );
};

export default InputCustom;
