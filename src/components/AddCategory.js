import React, { Fragment } from 'react'
import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleImputChange= (e) =>{
        setInputValue( e.target.value );  //actualiza el inputValue al último valor de lo que la persona escribió
    }

    const handleSubmit = (e) => {
        e.preventDefault();  //evita que el form refresque toda la página 
        // console.log('Submit hecho');

        if(inputValue.trim().length > 2){

          setCategories(cats => [...cats, inputValue]);
          setInputValue('');
        }

    }

  return (
    <form onSubmit={handleSubmit}> 
        <input 
            type='text'
            value={inputValue}
            onChange={handleImputChange}
            />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}



