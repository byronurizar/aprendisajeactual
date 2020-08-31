import React, { useState } from 'react';
import PropTypes from 'prop-types'
const AddCategory = ({setCategories}) => {
   
    const [inputValue, setInputValue] = useState('') //si se deja () es undefine

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubMit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories(categorias=>[inputValue,...categorias]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubMit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
};

export default AddCategory
