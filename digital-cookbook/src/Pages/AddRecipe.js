import React, { useEffect } from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import plus from '../imgs/plus.png';

function AddRecipe({isAuth}) {
  const [title, setTitle] = useState("");
  const [directions, setDirections] = useState("");
  const [image, setImage] = useState("");

  const clearRecipe = () => {
    var getName= document.getElementById("name");
        if (getName.value !="") {
            getName.value = "";
        }
        var getDirections= document.getElementById("directions");
        if (getDirections.value !="") {
            getDirections.value = "";
        }
  }

  const recipeCollectionRef = collection(db, "recipes");
  let navigate = useNavigate();
  
  const createRecipe = async () => {
    await addDoc(recipeCollectionRef, {
      title,
      directions,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() =>{
  if(!isAuth){
    navigate("/login");
  }},[]);

  return (
    <div className="flex justify-center align-middle w-100 h-100 translate-y-[20px]">
      <div className="bg-gradient-to-r from-red-500 to-lime-500 w-[380px] h-[680px] md:w-[600px] md:h-[800px] flex flex-col justify-center align-middle text-center rounded-md shadow-lg p-8">
        <div className='bg-slate-800 rounded-md p-5 w-[370px] h-[670px] md:w-[590px] md:h-[790px] -translate-x-[27px] text-white 0x-2' >
          <h1 className="py-2 text-2xl">Add Recipe</h1>
          <div className="bg-white rounded-md md:min-w-[90%] md:min-h-[39%] ">
            <div className=" m-0 min-w-full min-h-full transition ease-in-out delay-100 hover:bg-slate-500 hover:opacity-75 rounded-md flex justify-center">
              <img src={plus} className="w-1/4 h-1/4 py-20"/>
            </div>
          </div>

        <div className="py-2">
          <h2 className="text-xl">Recipe Name</h2>
          <input  id="name" className="text-black p-2 rounded-md"
            placeholder="Recipe Name..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">Recipe Directions</h2>
          <textarea id ="directions" className="text-black p-2 rounded-md h-[150px] md:h-[200px]"
            placeholder="Add recipes directions... "
            onChange={(event) => {
              setDirections(event.target.value);
            }}
          />
        </div>
        <button className='mt-10 p-3 transition ease-in-out hover:bg-white hover:text-black rounded-sm' onClick={createRecipe}>Add Recipe</button>
        <button className='mt-10 p-3 transition ease-in-out hover:bg-white hover:text-black rounded-sm' onClick={clearRecipe}>Clear</button>
        </div>
        
      </div>
    </div>
  );
}

export default AddRecipe;
