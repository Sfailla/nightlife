import React from 'react';



export const BorderlessForm = ({ 
    handleOnChange, 
    handleOnSubmit, 
    className, 
    autocomplete, 
    name, 
    type, 
    label, }) => (

    <form onSubmit={handleOnSubmit}>
        <div className="form-group borderless-form">
            <input 
                id={name}
                type={type}
                name={name}
                placeholder={label}
                autoComplete={autocomplete ? 'on' : 'off'}
                className={className}
                onChange={handleOnChange} />

            <label htmlFor={name}>{label}</label>

        </div>
    </form>
); 

const Form = ({ 
    handleOnChange,
    handleOnSubmit,
    autocomplete, 
    className, 
    label,
    type, 
    id }) => (

    <form onSubmit={handleOnSubmit}>
        <div className="form-group form">
            <input 
                id={id}
                name={id}
                type={type} 
                className={className}
                autoComplete={autocomplete ? 'on' : 'off' }
                placeholder={label}
                onChange={handleOnChange} />

            <label htmlFor={id}>{label}</label>
        </div>
    </form>
);

export default Form;