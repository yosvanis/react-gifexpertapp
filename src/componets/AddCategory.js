import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {

        //console.log(e.target.value);
        setinputValue(e.target.value);
    }

    const handleSumit = (e) => {

        e.preventDefault();

        if (inputValue.trim().length > 2){

            //console.log ('Sumit Hecho');
            setCategories( cats => [ inputValue, ...cats]);
            
            setinputValue ('');
        }
        
        


    }

    return (
        <form onSubmit = { handleSumit }>
            
            <h2>
                <input
                type = 'text'
                value = { inputValue }
                onChange = { handleInputChange }
                />
            </h2>
            
        </form>
    );

      
    
    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
    
    }
