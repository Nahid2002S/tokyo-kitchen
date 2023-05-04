import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({recipe}) => {
    const {name, ingredients, picture, making_details, rating, id} = recipe;

    const addToFavourite = (event) =>{
      toast('The recipe is your favorite');
      event.currentTarget.disabled = true;
    }
    return (
        <div>
  <div className="w-92 lg:h-[720px] bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-500 to-pink-300 shadow-xl text-black rounded-md">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Recipe Name : {name}</h2>
    <p><span className='font-semibold'>Ingredients:</span> 
        {
            ingredients.map(i => <li key={i._id}>{i.ingredients_name}</li>)
        }
    </p>
    <p><span className='font-semibold'>Cooking Method:</span> {making_details}</p>
    <p><span className='font-semibold'>Rating:</span> {rating}</p>
    <div className="card-actions">
    <button onClick={addToFavourite} className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-pink-500 to-indigo-600 shadow:md"> Favourite </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Recipe;