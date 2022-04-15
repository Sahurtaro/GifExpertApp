import React, { Fragment } from 'react'
import { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo');

    const handleImputChange= (e) =>{
        setInputValue( e.target.value );  //actualiza el inputValue al último valor de lo que la persona escribió
    }

    const handleSubmit = (e) => {
        e.preventDefault();  //evita que el form refresque toda la página 
        console.log('Submit hecho');
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
