import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../recipe/Recipe';

const Chefrecipes = () => {

    const {id} = useParams();
    const chefRecipes = useLoaderData();
    console.log(chefRecipes)
    const {picture, name, experience, recipes, likes, bio} = chefRecipes;
   
    return (
        <div className='lg:px-12 px-2'>
            <h3 className='mb-16 mt-6 underline text-center text-3xl font-semibold text-indigo-500'>Chef Details And Recipes</h3>
 <div className="card bg-indigo-300 shadow-xl py-6">
  <figure className='px-2 lg:px-0'><img src={picture} alt="Shoes" className='w-96'/></figure>
  <div className="card-body">
    <h2 className="card-title">Chef Name: {name}</h2>
    <p>Descriptions: {bio}</p>
    <p>Experience: {experience}</p>
    <p>No Of Recipes: {recipes.length}</p>
    <p>Likes: {likes}</p>
  </div>
  <div className='lg:flex gap-4 px-8'>
    {
        recipes.map(recipe => <Recipe recipe={recipe} key={recipe.unique_key}></Recipe>)
      }
</div>
   </div>
</div>
    );
};

export default Chefrecipes;