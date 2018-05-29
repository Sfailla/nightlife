import React from 'react';



const Form = ({ handleOnSubmit, handleOnChange, autoComplete, placeholder, id_for, type, label}) => (
    <form onSubmit={handleOnSubmit}>
        <div className="form-group">
            <input 
                type={type} 
                id={id_for}
                autoComplete="off"
                placeholder={placeholder}
                onChange={handleOnChange} />

            <label htmlFor={id_for}>{label}</label>
        </div>
    </form>
);

export default Form;