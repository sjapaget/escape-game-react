import React from 'react';

const Nav = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <img className='w-12' src="src/assets/Esc-Logo-8bit-colour.png" alt="logo" />
      <ul className='flex flex-row'>
        <li className='px-4'>Item</li>
        <li className='px-4'>Item</li>
        <li className='px-4'>Item</li>
      </ul>
    </div>
  )
}

export default Nav;
