import React from 'react';
import { LOGO } from '../../constants';
import { Search } from '../search';

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='navbar__logo-search'>
        <img className='navbar__logo' alt='logo' src={ LOGO }/>
        <Search />
      </div>
    </div>
  )
}

export default Navbar
