import React from "react";

function NavBar() {

  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='container'>
            <a href="/" className='brand-logo'>Pizza Cafe</a>
            <ul id="nav-mobile" className='right hide-on-med-and-down'>
              <li><a href="sass.html">Menu</a></li>
              <li><a href="badges.html">Registration</a></li>
              <li><a href="collapsible.html">Login</a></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar