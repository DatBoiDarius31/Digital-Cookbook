import React from 'react';
import { useState } from 'react';



function Recipes() {

    const [title,setTitle] = useState("");
    const [directions,setdirections] = useState("");
  return (
    <div className=''>
      <div className='container'>
        <h1>Add Recipes</h1>
        <div className='Recipes'>
            <label>Recipe Name:</label>
            <input placeholder="Recipe Name..."/>
        </div>
        <div className='Directions'>
            <label>Recipe Directions:</label>
            <textarea placeholder="Add recipes directions... "/>
        </div>
        <button>Add Recipe</button>
      </div>
    </div>
  )
}

export default Recipes
