import React, {PureComponent} from "react";
import Logo from '../img/Logo.svg';
import '../styles/Menu.css';

class Menu extends PureComponent {
  render () {
    var visibility = "hide";
    if(this.props.menuVisibility) {
      visibility= "show"
    }
    return(
      <div id="flyoutMenu"
        className={visibility}>
          {/* НУжно узнать можно ли использовать nav несколько раз */}
        <ul>
          <li>
            <a href="index.html">
              <img src={Logo} alt="Логотип"/>
            </a>
          </li>
          <li><a href="#">Магазины</a></li>
          <li><a href="#">Помощь и Поддержка</a></li>
          <li><a href="#" className="header__button">Установить</a></li>
        </ul>
            
        <div onClick={this.props.handleOnClick}
              
              id="close__menu">
          <span></span>
        </div>
      </div>
    );
  }
}

export default Menu;