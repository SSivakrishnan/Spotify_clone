import React from 'react'
import Draw from '../assets/icons/Draw';
import Plus from '../assets/icons/Plus';
import Heart from '../assets/icons/Heart';
import Install from '../assets/icons/Install';

function Navbar() {
  return (
    <nav>
       <ul>
        <li>
          <Draw/>
          <span>
            Your Library
          </span>
        </li>
        <li>
          <Plus/>
          <span>
            Create Playlist
          </span>
        </li>
        <li>
          <Heart/>
          <span>
            Liked Songs
          </span>
        </li>
        <li>
          <Install/>
          <span>
            Install App
          </span>
        </li>
        </ul> 
    </nav>
  )
}

export default Navbar