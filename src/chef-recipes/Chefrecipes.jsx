import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../recipe/Recipe';

const Chefrecipes = () => {

    const {id} = useParams();
    const chefRecipes = useLoaderData();
    const {picture, name, experience, recipes, likes, bio} = chefRecipes;

    if(!chefRecipes){
      return (
        <div>
      <progress className="progress w-56"></progress>
  </div>
      )
    }
   
    return (
        <div className='lg:px-12 px-2 text-black'>
            <h3 className='mb-16 mt-6 text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600'>Chef Details And Recipes</h3>
 <div className="card bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900 shadow-xl py-6">
  <div className='lg:w-[100vh] lg:border-2 lg:border-black lg:mx-auto lg:p-4 mb-4'>
  <figure className='px-2 lg:px-0'><img src={picture} alt="Shoes" className='w-96'/></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl font-bold text-center">Chef Name: {name}</h2>
    <p><span className='font-semibold'>Descriptions:</span> {bio}</p>
    <p><span className='font-semibold'>Experience:</span> {experience}</p>
    <p><span className='font-semibold'>No Of Recipes:</span> {recipes.length}</p>
    <p><span className='font-semibold'>Likes:</span> {likes}</p>
  </div>
  </div>
  <div className='lg:flex gap-4 px-8 mb-2'>
    {
        recipes.map(recipe => <Recipe recipe={recipe} key={recipe.unique_key}></Recipe>)
      }
</div>
   </div>
</div>
    );
};

export default Chefrecipes;