import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Singlechef = ({chef}) => {

    const {picture, name, experience, recipes, likes, id} = chef;
    return (
        <div>
            <div className="card w-88 lg:h-[600px] bg-gradient-to-r from-indigo-400 to-indigo-300 shadow-xl">
  <figure><LazyLoadImage src={picture} effect='blur' alt="Shoes" /></figure>
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