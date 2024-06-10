import React from 'react';

const Input = ({name, type = 'text', placeholder}) => {
    return (
        <>
            <div className="inptForm">
                <label>{name}</label>
                <input type={type} placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input;