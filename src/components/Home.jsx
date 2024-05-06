import React from 'react';
import Fetch from './Explore';

const Home = () => {
  return (
    <div className="bg-black h-[700px] text-white flex flex-row  pt-20 justify-center ">
      <div className="flex flex-row justify-center">
        <div className="ml-56 mr-24 ">
          <h1 className="font-bold text-[20px]">FIND MOVIES</h1>
          <p className="font-bold text-[25px]">TV SHOW AND MORE</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            enim impedit magnam a debitis dicta temporibus similique laboriosam
            fugit ipsam labore, incidunt officiis repellendus ratione voluptates
            voluptatem in ullam nihil.
          </p>
        </div>
        <img src="img.jpg" alt="" className=" mr-56" />
      </div>
      <button>WAtch</button>
    </div>
  );
};
export default Home;
