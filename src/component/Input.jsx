import React from 'react';

const Input = ({name, type = 'text', placeholder, ...props}) => {
    return (
        <>
            <div className="inptForm">
                <label>{name}</label>
                <input type={type} placeholder={placeholder} {...props} />
            </div>
        </>
    )
}

export default Input;