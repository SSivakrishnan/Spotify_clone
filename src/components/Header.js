import React from 'react'
import SpotifyLogo from '../assets/icons/SpotifyLogo';
import Search from '../assets/icons/Search';
import Human from '../assets/icons/Human';
import Home from '../assets/icons/Home';

function Header() {
  return (
    <header>
        <div>
            <SpotifyLogo/>
        </div>

        <div className='separator'>
             <div className='header_icon home_icon'>
                 <Home/>
             </div>        
             <div className='search_input'>
                 <Search/>
                 <input type='text' placeholder='What do you want to listen do?'/>
             </div>
        </div>

        <div className='separator'>
            <button className='upgrd_btn'>Upgrade</button>
            <div className='header_icon'>
            <Human/>
        </div>
        </div>
       <button className='nav_mbl_btn' onClick={()=>document.querySelector('nav').classList.toggle('mbl_nav_active')}>
       <i class="fa fa-bars nav_fa_bars"></i>
       </button>
        
    </header>
  )
}

export default Header