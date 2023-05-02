import React from 'react';
import { Link } from 'react-router-dom';

const Singlechef = ({chef}) => {
    const {picture, name, experience, recipes, likes, id} = chef;
    return (
        <div>
            <div className="card w-88 lg:h-[600px] bg-indigo-300 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Chef Name: {name}</h2>
    <p>Experience: {experience}</p>
    <p>No Of Recipes: {recipes.length}</p>
    <p>Likes: {likes}</p>
    <div className="card-actions">
        <Link to={`chef-recipes/${id}`}>
        <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md">View Recipes</button>
        </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Singlechef;