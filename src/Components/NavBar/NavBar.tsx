import './NavBar.css'
import logo_light from './../../Assets/logo-black.png'
import logo_dark from '../../Assets/logo-white.png'
import search_icon_light from '../../Assets/search-w.png'
import search_icon_dark from '../../Assets/search-b.png'
import toggle_light from '../../Assets/night.png'
import toggle_dark from '../../Assets/day.png'
import React from 'react';

const NavBar = ({ theme, setTheme }: { theme: string; setTheme: (theme: string) => void }) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className='navbar'>
      <img src={theme === 'light' ? String(logo_light) : String(logo_dark)} alt='' className='logo' />
      <ul>
        <li>Home</li>
        <li>Neural Network</li>
        <li>Machine Learning</li>
        <li>Large Language Models</li>
      </ul>

      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src={theme === 'light' ? String(search_icon_light) : String(search_icon_dark)} alt='' className='search-icon' />
      </div>

      <img
        onClick={() => {
          toggle_mode()
        }}
        src={theme === 'light' ? toggle_light.toString() : toggle_dark.toString()}
        alt=''
        className='toggle-icon'
      />
    </div>
  )
}

export default NavBar
