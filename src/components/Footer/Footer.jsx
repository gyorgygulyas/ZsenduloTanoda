import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div>
        <h3>Intézmény</h3>
        <p>Zsendülő tanoda</p>
        <p>Ágazati azonosító: S0531160</p>
      </div>
      <div>
        <h3>Fenntartó</h3>
        <p>Józsefváros Közösségeiért Nonprofit Zrt.</p>
        <p>
          <a
            href="https://www.kesztyugyar.hu"
            rel={'noopener noreferreer nofollower'}
            target={'__blank'}
          >
            www.kesztyugyar.hu
          </a>
        </p>
        <p>
          <a
            href="https://www.google.com/maps/place/Budapest,+M%C3%A1ty%C3%A1s+t%C3%A9r+15,+1084/"
            rel={'noopener noreferrer nofollower'}
            target={'__blank'}
          >
            1084 Budapest, Mátyás tér 15.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
