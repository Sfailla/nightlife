import React from 'react';



export const BorderlessForm = ({ 
    handleOnChange, 
    handleOnSubmit, 
    className, 
    autocomplete, 
    name, 
    type, 
    label 
}) => (
    <form onSubmit={handleOnSubmit}>
        <div className="form-group borderless-form">
            <input 
                type={type}
                className={className}
                name={name}
                id={name}
                placeholder={label}
                onChange={handleOnChange} />

            <label htmlFor={name}>{label}</label>

        </div>
    </form>
); 

const Form = ({ 
    handleOnSubmit,
    handleOnChange, 
    className, 
    autocomplete, 
    id_name, 
    type, 
    label
}) => (
    <form onSubmit={handleOnSubmit}>
        <div className="form-group form">
            <input 
                className={className}
                type={type} 
                id={id_name}
                autoComplete={autocomplete ? 'on' : 'off' }
                name={id_name}
                placeholder={label}
                onChange={handleOnChange} />

            <label htmlFor={id_name}>{label}</label>
        </div>
    </form>
);

export default Form;