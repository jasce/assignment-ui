import React, { Component } from 'react'
import logo from 'src/assets/images/logo.png'

class Navbar extends Component {
  render() {
    return (
      <div className='nav-container'>
        <div className='nav-wrapper'>
          <img src={logo} className='nav-logo' />
        </div>
      </div>
    )
  }
}

export default Navbar
