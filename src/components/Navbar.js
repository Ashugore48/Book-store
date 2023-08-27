import React from 'react';
import logo from './assets/logo.png';
import first from './assets/first.png'
import Group from './assets/Group.png'
import notification from './assets/notification.png'
import profile from './assets/profile.png'

const Navbar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="navbar bg-zinc-800 h-20 flex flex-row items-center justify-between px-9">
      <div className='logo flex flex-row items-center'>
      <a href='#'>
      <img className='w-16 ' src={logo} alt="Logo" />
      </a>
      <div className='flex flex-row pl-2'>
      <p className='text-2xl text-white'>KeazoN</p>
      <p className='mt-2 text-white'>BOOKS</p>
      </div>
      </div>
      <div className='search-component flex flex-row w-2/5 gap-4'>
      <input
        type="text"
        className='block w-full p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white '
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for books"
      />
      <button className='bg-zinc-800 border-white border text-white font-bold py-2 px-4' onClick={handleSearch}>Search</button>
      </div>
      <div className='menu-btns flex flex-row gap-5'>
        <button><a href='#'><img className='w-7' src={first} alt="first" /></a></button>
        <button><a href='#'><img className='w-7' src={Group} alt="group" /></a></button>
        <button><a href='#'><img className='w-7' src={notification} alt="notification" /></a></button>
        <button><a href='#'><img className='w-7' src={profile} alt="profile" /></a></button>
      </div>
    </div>
  );
};

export default Navbar;
