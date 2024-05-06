import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <section className="bg-black text-white flex flex-row justify-around pt-10 ">
      <div className="flex flex-row justify-center ">
        <img src="./logo.png" alt="" />
      </div>
      <div className="flex flex-row text-white gap-7 ">
        <div className="">
          <NavLink to="/Home">Home</NavLink>
        </div>
        <div>
          <NavLink to="/Explore">Explore</NavLink>
        </div>
        <div>
          <NavLink to="/.Genre">Genre</NavLink>
        </div>
        <div>
          <NavLink to="/.News">News</NavLink>
        </div>
        <div>
          <NavLink to="/.Movies">Movies</NavLink>
        </div>
        <div>
          <NavLink to="/.TV Shows">TV Shows</NavLink>
        </div>
      </div>
    </section>
  );
};
export default NavBar;
