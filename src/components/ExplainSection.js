import React, {Component} from 'react';
import "../styles/ExplainSection.css";


class ExplainSection extends Component {
  render() {
    return (
      <section className='explain__section'>
        <div className='explain__container'>
          <div className='explain__item'>
            <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" fill="none"><path fill="url(#a)" d="M52.5 105c28.995 0 52.5-23.505 52.5-52.5S81.495 0 52.5 0 0 23.505 0 52.5 23.505 105 52.5 105Z" opacity=".2"/><path fill="#0CC" stroke="#173753" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.402" d="M52.25 78.5c14.498 0 26.25-11.752 26.25-26.25S66.748 26 52.25 26 26 37.752 26 52.25 37.752 78.5 52.25 78.5Z"/><path fill="#E5F9F9" d="M52.25 70.625c10.148 0 18.375-8.227 18.375-18.375S62.398 33.875 52.25 33.875 33.875 42.102 33.875 52.25s8.227 18.375 18.375 18.375Z"/><path stroke="#173753" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.481" d="M46 52.615h13.23m-6.615 6.615 6.615-6.615L52.615 46v13.23Z"/><defs><linearGradient id="a" x1="42.731" x2="77.71" y1="6.386" y2="105" gradientUnits="userSpaceOnUse"><stop stopColor="#00C9C9" stopOpacity=".147"/><stop offset="1" stopColor="#00C9C9" stopOpacity=".699"/></linearGradient></defs>
            </svg>
            <h3>Заказывайте заранее, не стойте в очереди</h3>
            <p>Почувствуйте себя рок-звездой, когда вы обходите очередь и экономите кучу времени.</p>
          </div>
          <div className='explain__item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" fill="none"><path fill="url(#a)" d="M52.5 105c28.995 0 52.5-23.505 52.5-52.5S81.495 0 52.5 0 0 23.505 0 52.5 23.505 105 52.5 105Z" opacity=".2"/><path fill="#0CC" stroke="#173753" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.402" d="M52.75 79C67.248 79 79 67.248 79 52.75S67.248 26.5 52.75 26.5 26.5 38.252 26.5 52.75 38.252 79 52.75 79Z"/><path fill="#E5F9F9" d="M52.875 71.25c10.148 0 18.375-8.227 18.375-18.375S63.023 34.5 52.875 34.5 34.5 42.727 34.5 52.875 42.727 71.25 52.875 71.25Z"/><path fill="#173753" d="M47.1 53.925c2 0 3.475-1.325 3.475-3.3v-3.15c0-1.975-1.475-3.3-3.475-3.3s-3.475 1.325-3.475 3.3v3.15c0 1.975 1.475 3.3 3.475 3.3Zm.95 7.425 10.5-14.925-1.95-1.4L46.125 59.95l1.925 1.4Zm-.95-9.475c-.725 0-1.25-.575-1.25-1.3v-3.05c0-.725.525-1.275 1.25-1.275s1.275.575 1.275 1.275v3.05c0 .725-.55 1.3-1.275 1.3Zm10.45 10.45c2 0 3.475-1.325 3.475-3.3v-3.15c0-1.975-1.475-3.3-3.475-3.3s-3.45 1.325-3.45 3.3v3.15c0 1.975 1.45 3.3 3.45 3.3Zm0-2.05c-.725 0-1.225-.575-1.225-1.3v-3.05c0-.725.5-1.275 1.225-1.275.725 0 1.275.575 1.275 1.275v3.05c0 .725-.55 1.3-1.275 1.3Z"/><defs><linearGradient id="a" x1="42.731" x2="77.71" y1="6.386" y2="105" gradientUnits="userSpaceOnUse"><stop stopColor="#00C9C9" stopOpacity=".147"/><stop offset="1" stopColor="#00C9C9" stopOpacity=".699"/></linearGradient></defs></svg>
            <h3>Бонусы и скидки</h3>
            <p>Вы можете пользоваться множеством скидок в выбранных магазинах или накапливать баллы.</p>
          </div>
          <div className='explain__item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" fill="none"><path fill="url(#a)" d="M52.5 105c28.995 0 52.5-23.505 52.5-52.5S81.495 0 52.5 0 0 23.505 0 52.5 23.505 105 52.5 105Z" opacity=".2"/><path fill="#0CC" fillRule="evenodd" stroke="#173753" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.722" d="m41.1 25.43 5.293-2.032 3.387 8.822-5.293 2.032L41.1 25.43Z" clipRule="evenodd"/><path fill="#E5F9F9" fillRule="evenodd" stroke="#0F2336" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.722" d="M53.278 31.531c8.142 0 14.742 6.6 14.742 14.742 0 2.014-.404 3.933-1.135 5.682L64.401 73.76a9.073 9.073 0 0 1-9.014 8.045h-5.352a9.073 9.073 0 0 1-9.014-8.045l-2.485-21.817h1.13a14.69 14.69 0 0 1-1.13-5.67c0-8.142 6.6-14.742 14.742-14.742Z" clipRule="evenodd"/><path fill="#00C9C9" fillRule="evenodd" d="M55.557 64.543c3.777 2.516 7.09 3.933 9.941 4.252l-.469 4.684a9.88 9.88 0 0 1-9.83 8.896h-5.13a9.88 9.88 0 0 1-9.83-8.896l-.99-9.882c5.048-3.25 10.484-2.935 16.308.946Z" clipRule="evenodd"/><path stroke="#173753" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.722" d="M53.278 31.531c8.142 0 14.742 6.6 14.742 14.742 0 2.014-.404 3.933-1.135 5.682L64.401 73.76a9.073 9.073 0 0 1-9.014 8.045h-5.352a9.073 9.073 0 0 1-9.014-8.045l-2.485-21.817h1.13a14.69 14.69 0 0 1-1.13-5.67c0-8.142 6.6-14.742 14.742-14.742v0Z" clipRule="evenodd"/><path fill="#E5F9F9" stroke="#173753" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.722" d="M68.587 45.139H36.835A2.835 2.835 0 0 0 34 47.974v1.134a2.835 2.835 0 0 0 2.835 2.835h31.752a2.835 2.835 0 0 0 2.835-2.835v-1.134a2.835 2.835 0 0 0-2.835-2.835Z"/><defs><linearGradient id="a" x1="42.731" x2="77.71" y1="6.386" y2="105" gradientUnits="userSpaceOnUse"><stop stopColor="#00C9C9" stopOpacity=".147"/><stop offset="1" stopColor="#00C9C9" stopOpacity=".699"/></linearGradient></defs>
          </svg>
            <h3>Поделитесь со своими друзьями</h3>
            <p>Отправляйте подарки своим друзьям, родственникам и забирайте их для своих коллег, когда они не могут уйти.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ExplainSection;