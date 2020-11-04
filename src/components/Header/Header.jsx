import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import facebook from '../../assets/images/facebook.png';
import phone from '../../assets/images/phone.png';
import email from '../../assets/images/email.png';

import './header.scss';

export default function BackToTop(props) {
  return (
    <div className={'header'}>
      <AppBar>
        <div className="contacts-wrapper">
          <div className="contact">
            <a
              href="mailto:tanoda@kesztyugyar.hu"
              rel={'noopener noreferrer nofollower'}
              aria-label={'zsendulo email'}
            >
              <img src={email} alt="email logo" />
              <div>tanoda@kesztyugyar.hu</div>
            </a>
          </div>
          <div className="contact">
            <a
              href="tel:+36306358177"
              rel={'noopener noreferrer nofollower'}
              aria-label={'zsendulo telefon'}
            >
              <img src={phone} alt="telefon logo" />
              <div>+36306358177</div>
            </a>
          </div>
          <div className="contact">
            <a
              href="https://www.facebook.com/zsendulotanoda"
              rel={'noopener noreferrer nofollower'}
              aria-label={'zsendulo facebook'}
              target={'__blank'}
            >
              <img src={facebook} alt="facebook ikon" />
              <div>facebook.com/zsendulotanoda</div>
            </a>
          </div>
        </div>
        <Toolbar className="buttons-wrapper">
          <Button
            className="button_1"
            onClick={() => {
              let item = document.getElementById('contact-form');
              item.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Lépj kapcsolatba velünk!
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" style={{ bottom: '100px !important' }} />
    </div>
  );
}
