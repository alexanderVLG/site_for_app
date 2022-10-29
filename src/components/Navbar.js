import React, {Component} from 'react';
import Button from '../components/Button.js';
import '../styles/Navbar.css';
import Logo from'../img/Logo.png';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible : false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu () {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    return (
      <header>
        <a href="index.html">
          <img src={Logo} alt="Логотип"/>
        </a>
        <div className='burger__menu'>
          <span></span>
        </div>
{/*--this nav shows up after max-width 950px--*/ }      
      <nav className='desktop__nav'>
        <ul>
          <li><a href="#">Stores</a></li>
          <li><a href="#">Помощь и Поддержка</a></li>
          <li><a href="#"><Button/></a></li>
        </ul>
      </nav>
      </header>
      
    );
  }
}

export default Navbar;