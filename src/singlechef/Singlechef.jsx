import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Singlechef = ({chef}) => {

    const {picture, name, experience, recipes, likes, id} = chef;
    return (
        <div>
            <div className="card w-88 lg:h-[600px] bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900 shadow-xl">
  <figure><LazyLoadImage src={picture} effect='blur' alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black font-bold">Chef Name: {name}</h2>
    <p className='text-black'><span className='font-semibold'>Experience:</span> {experience}</p>
    <p className='text-black'><span className='font-semibold'>No Of Recipes:</span> {recipes.length}</p>
    <p className='text-black'><span className='font-semibold'>Likes:</span> {likes}</p>
    <div className="card-actions">
        <Link to={`chef-recipes/${id}`}>
        <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-pink-700 to-indigo-800 shadow:lg">View Recipes</button>
        </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Singlechef;