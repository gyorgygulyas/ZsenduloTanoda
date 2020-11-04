import React from 'react';
import Fade from 'react-reveal/Fade';

import { Link } from 'gatsby';

import Button from '@material-ui/core/Button';

import './palyazatok.scss';

const Palyazatok = () => {
  const palyazatok = [
    {
      title: 'Kemény dió',
      subtitle: 'bűnmegelőzési program',
      description:
        'Facebook oldala szerint tavaly kora ősztől a Kesztyűgyárban működik a hátrányos helyzetű gyerekek felzárkóztatását segítő Zsendülő tanoda...',
      button_text: 'Tovább olvasom',
      button_url:
        'https://kesztyugyar.hu/kemeny-dio-1828-bunmegelozesi-program/'
    },
    {
      title: 'Magdolna-Orczy negyed',
      subtitle: 'szociális városrehabilitációs program',
      description:
        'Facebook oldala szerint tavaly kora ősztől a Kesztyűgyárban működik a hátrányos helyzetű gyerekek felzárkóztatását segítő Zsendülő tanoda...',
      button_text: 'Tovább olvasom',
      button_url:
        'https://kesztyugyar.hu/vekop-6-2-1-15-2016-00013-budapest-jozsefvaros-magdolna-orczy-negyed-szocialis-varosrehabilitacios-program/'
    },
    {
      title: 'Csarnok negyed főutcája',
      subtitle: 'városrehabilitációs program',
      description:
        'Facebook oldala szerint tavaly kora ősztől a Kesztyűgyárban működik a hátrányos helyzetű gyerekek felzárkóztatását segítő Zsendülő tanoda...',
      button_text: 'Tovább olvasom',
      button_url:
        'https://kesztyugyar.hu/ter_koz-palyazat-budapest-csarnok-negyed-foutcaja-derim-projekt-cimu-varosrehabilitacios-projekt/'
    }
  ];

  return (
    <div className="palyazatok-wrapper">
      <h1>Pályázatok</h1>
      <div className="application-wrapper">
        {palyazatok.map((palyazat, index) => (
          <Fade cascade key={`palyazat_${index}`}>
            <div className="palyazat">
              <h3>{palyazat.title}</h3>
              <h5>{palyazat.subtitle}</h5>
              <p>{palyazat.description}</p>
              <Link to={palyazat.button_url} target={'_blank'}>
                <Button className="button_1">{palyazat.button_text}</Button>
              </Link>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Palyazatok;
