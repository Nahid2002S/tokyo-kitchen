import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Resturant = () => {
    return (
        <div className='px-2'>
            <h3 className='mt-16 text-center text-3xl font-semibold text-indigo-500'>Japanese Top Resturant</h3>
            <p className='mb-8 mt-2 text-center font-semibold text-indigo-500'>Japanese Resturants Are Very Clean An The Food Of Japanese <br /> Resturant is Very Healthy..</p>
         <div className='grid w-96 lg:w-full mx-auto lg:grid-cols-3 lg:px-12 px-2 gap-8 justify-center'>
         <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-400 to-indigo-300">
  <figure><LazyLoadImage effect='blur' src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=740&t=st=1683109953~exp=1683110553~hmac=482db045753d685a98f5fa442e2f0a3b981890160a9365e9805f542eb9c4d5d2" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Izumi Japanese Kitchen
      <div className="badge badge-secondary">5 Star</div>
    </h2>
    <p>It Is An Most Popular And Beautiful Resturant Of Japan. You Must Visit It And Try Out Of Its Food.</p>
    <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md mt-2">Explore</button>
  </div>
</div>
  <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-400 to-indigo-300">
  <figure><LazyLoadImage effect='blur' src="https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?w=740&t=st=1683110860~exp=1683111460~hmac=208dbbb43761384d3db8c5d1256ea34fcbc622f341f43a3cf27190cd5313ac55" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Samdado Japanese Cuisine
      <div className="badge badge-secondary">5 Star</div>
    </h2>
    <p>It Is An Most Popular And Beautiful Resturant Of Japan. You Must Visit It And Try Out Of Its Food.</p>
    <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md mt-2">Explore</button>
  </div>
</div>
    <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-400 to-indigo-300">
  <figure><LazyLoadImage effect='blur' src="https://img.freepik.com/free-photo/rustic-chandelier-made-bulbs-ropes-dining-table-vintage-kitchen_181624-9173.jpg?w=740&t=st=1683110907~exp=1683111507~hmac=144a2efa427d4220728ba04e92cbfc77327206a0fcf2205f49b9efe3228eacf2" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    TAKUMI Japanese Restaurant
    </h2>
    <p>It Is An Most Popular And Beautiful Resturant Of Japan. You Must Visit It And Try Out Of Its Food.</p>
    <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md mt-2">Explore</button>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-400 to-indigo-300">
  <figure><LazyLoadImage effect='blur' src="https://img.freepik.com/free-photo/group-friends-eating-restaurant_23-2148006644.jpg?w=740&t=st=1683110991~exp=1683111591~hmac=b792b699e6f8f461fdb026abc0252ac286dc966c791efc58bc0a514cca00beab" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Sushi Samurai
      <div className="badge badge-secondary">5 Star</div>
    </h2>
    <p>It Is An Most Popular And Beautiful Resturant Of Japan. You Must Visit It And Try Out Of Its Food.</p>
    <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md mt-2">Explore</button>
  </div>
</div>
  <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-400 to-indigo-300">
  <figure><LazyLoadImage effect='blur' src="https://img.freepik.com/free-photo/restaurant-hall-with-lots-table_140725-6309.jpg?w=740&t=st=1683111149~exp=1683111749~hmac=d50e3e0801217361524623d7e8676e9d9e77e68cc9f109eb5e94f501cb8786a3" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Sumo Sushi Restaurant
      <div className="badge badge-secondary">5 Star</div>
    </h2>
    <p>It Is An Most Popular And Beautiful Resturant Of Japan. You Must Visit It And Try Out Of Its Food.</p>
    <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md mt-2">Explore</button>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-400 to-indigo-300">
  <figure><LazyLoadImage effect='blur' src="https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?w=740&t=st=1683111083~exp=1683111683~hmac=a111c4df9ce7c20aa30d9670f43289d89c97afc3f0290185a9b35797c98819fe" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Nihombashi Kakigaracho Sugit
    </h2>
    <p>It Is An Most Popular And Beautiful Resturant Of Japan. You Must Visit It And Try Out Of Its Food.</p>
    <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md mt-2">Explore</button>
  </div>
</div>
         </div>
        </div>
    );
};

export default Resturant;