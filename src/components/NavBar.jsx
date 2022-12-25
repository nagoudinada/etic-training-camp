import React, { useState } from 'react'
import profile from '../assets/icons/profile.svg'
import search from '../assets/icons/search.svg'
import chat from '../assets/icons/chat.svg'
import home from '../assets/icons/home.svg'
import fav from '../assets/icons/fav.svg'
import '../style/NavBarStyle.css'

function NavBar() {
    const [userName,setUsername] = useState(null);

  return (

        <nav className='navBar'>
            <a href="/">Logo</a>
            <div className='searchBar'>
                <input type="text" placeholder='Search...' />
                <a className="searchLink">
                    <img src={search} alt="/" className='SearchImg' />
                </a>
            </div>
            {
                !userName ?  <div className='logInOut'>
                <button className='SingUpInClick'>Sing Up</button>
                <button className='SingUpInClick'>Sing In</button>
            </div>:      <div id='icons' >
                <a href="/"><img src={home} alt="/" /></a>
                <a href="/"><img src={fav} alt="/" /></a>
                <a href="/"><img src={chat} alt="" /></a>
                <a href="/"><img src={profile} alt="/" /></a>
            </div>
            }
        </nav>
  )
}

export default NavBar   