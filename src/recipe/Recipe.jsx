import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({recipe}) => {
    const {name, ingredients, picture, making_details, rating, id} = recipe;

    const addToFavourite = () =>{
      toast('Add To Favourite')
    }
    return (
        <div>
  <div className="w-92 lg:h-[720px] bg-indigo-200 shadow-xl rounded-md">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Recipe Name : {name}</h2>
    <p>Ingredients: 
        {
            ingredients.map(i => <li key={i._id}>{i.ingredients_name}</li>)
        }
    </p>
    <p>Cooking Method: {making_details}</p>
    <p>Rating: {rating}</p>
    <div className="card-actions">
    <button onClick={addToFavourite} className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md"> Favourite </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Recipe;