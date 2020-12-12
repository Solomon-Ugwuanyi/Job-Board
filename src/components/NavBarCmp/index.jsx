import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <ul>
      <li>
        <Link style={{ backgroundColor: 'rgb(94, 172, 129)' }} className='active' to='/'>
          Home
        </Link>
      </li>

      <li style={{ float: 'right' }}>
        <Link to='/cbout'>About</Link>
      </li>
    </ul>
  );
}
