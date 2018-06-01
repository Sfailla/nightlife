import React from 'react';



const Form = ({ handleOnSubmit, handleOnChange, autocomplete, placeholder, id_name, type, label}) => (
    <form onSubmit={handleOnSubmit}>
        <div className="form-group">
            <input 
                type={type} 
                id={id_name}
                autoComplete={autocomplete ? 'on' : 'off' }
                name={id_name}
                placeholder={placeholder}
                onChange={handleOnChange} />

            <label htmlFor={id_name}>{label}</label>
        </div>
    </form>
);

export default Form;