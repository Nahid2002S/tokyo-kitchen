import React from 'react';
import { Link } from 'react-router-dom';

const SignatureFood = () => {
    return (
        <div className='px-2'>
            <h3 className='mt-16 text-center text-3xl font-semibold text-indigo-500'>Japanese Signature Food</h3>
            <p className='mb-8 mt-2 text-center font-semibold text-indigo-500'>Lets See Some Japanese Best Food You Should Must <br /> Try This Food</p>
            <div className="carousel lg:w-[100vh] mx-auto">
  <div id="item1" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/top-view-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board_176474-3466.jpg?w=740&t=st=1683107356~exp=1683107956~hmac=c6b264c8b1ca1bad53d2d2d412b48a0384d1142e61bddbf2a83adb7e650cb02c" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/traditional-japanese-food-sushi-rolls-rice-with-shrimp-sauce-dark-background-top-view_2829-5257.jpg?w=740&t=st=1683107532~exp=1683108132~hmac=779f210ccbdc376d036c9a4d032e1a98159b35f5590082a3c5184fb9bb2f8301" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://img.freepik.com/premium-photo/sandwich-menu-ciabatta-avocado-fish-hummus-microgreen-breakfast-black-stone-plate_187166-3345.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/top-view-delicious-vegetable-salad-with-sliced-tomatoes-olives-mushrooms-dark-background-meal-salad-diet-health-food_140725-96866.jpg?t=st=1683107641~exp=1683108241~hmac=9a471363a4788930031804517a6af779ab5ef105ea991b7567b58317ee1f43d3" className="w-full" />
  </div>
  <div id="item5" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/korean-fish-cake-vegetable-soup-table_1150-42983.jpg?w=740&t=st=1683109142~exp=1683109742~hmac=2e3a2a9199332fbb8269b179524d8a12ef19a6e3dfbde649af7df338979ca914" className="w-full" />
  </div>
  <div id="item6" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/mixed-fried-meat-with-pomegranate-sauce_140725-3461.jpg?t=st=1683107818~exp=1683108418~hmac=5be5b293b5bf747a74275fe6797facf27ab79079bc8c291d23e2600641b735e0" className="w-full" />
  </div>
</div> 
<div className="flex flex-wrap justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs bg-primary">Tempura</a> 
  <a href="#item2" className="btn btn-xs bg-primary">Yakitori</a>
  <a href="#item3" className="btn btn-xs bg-primary">Sashimi</a> 
  <a href="#item4" className="btn btn-xs bg-primary">Donburi</a>
  <a href="#item5" className="btn btn-xs bg-primary">Oden</a>
  <a href="#item6" className="btn btn-xs bg-primary">Tonkatsu</a>
</div>
        </div>
    );
};

export default SignatureFood;