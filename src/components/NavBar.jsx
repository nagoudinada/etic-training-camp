import React from 'react'
import {profile , search , chat, home, fav} from './assets/icons.js'



function NavBar() {
  return (

        <nav>
            <a href="/">Logo</a>
            <div id='searchBar'>
                <input type="text" placeholder='Search...' />
                <button id='searchBarButton'>
                    <img src="search" alt="/" />
                </button>
            </div>

            <div className='logInOut'>
                <button>Sing Up</button>
                <button>Sing In</button>
            </div>

            <div id='icons'>
                <a href="/"><img src="home" alt="/" /></a>
                <a href="/"><img src="fav" alt="/" /></a>
                <a href="/"><img src="chat" alt="" /></a>
                <a href="/"><img src="profile" alt="/" /></a>
            </div>
        </nav>


  )
}

export default NavBar   