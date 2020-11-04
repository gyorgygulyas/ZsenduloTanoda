import React from 'react';
import Fade from 'react-reveal/Fade';

import introduction_photo from '../../assets/images/introduction_photo.png';
import zst_logo from '../../assets/images/zst_logo.png';

import './introduction.scss';

const Introduction = () => {
  return (
    <div className="introduction-wrapper">
      <Fade big>
        <div className="introduction-image-wrapper">
          <img
            id="introduction_photo"
            src={introduction_photo}
            alt="introduction_photo"
          />
        </div>
      </Fade>

      <div className="description-wrapper">
        <Fade big>
          <img id="zsendulo_logo" src={zst_logo} alt="zsendulo tanoda" />
        </Fade>
          <div className="description">
            2020-ban a Mátyás téren működő Zsendülő Tanoda{' '}
            <strong>esélynövelő szolgáltatás</strong>ként nyitotta meg a kapuit{' '}
            <strong>Józsefvárosban</strong>, olyan diákok számára, akik gyakran
            tanulási nehézségekkel küzdenek, pótvizsgázni kényszerülnek, vagy
            tantárgyi szinten tartás, korrepetálás miatt választották a
            Tanodánkat. Ugyanakkor az iskolán kívüli időben szeretnének egy
            baráti, alkotó közösséghez tartozni. Garantáltan javuló iskolai
            eredmények Délutáni oktatás, vizsgára való felkészítés.
            Klubfoglalkozások péntekenként! (zene, társasjáték, kézműves
            foglalkozások) Egyéni és csoportos képességfejlesztés. Rendszeres
            kirándulási és táborozási lehetőség. Délutáni uzsonna.{' '}
            <strong>Minden szolgáltatásunk ingyenes!</strong>
          </div>

        <Fade cascade>
          <div className="description">
            A Tanoda harminc gyerek számára ad lehetőséget heti
            rendszerességgel, hogy segítse iskolai előmenetelüket. A tanoda
            elsősorban azoknak a képességeknek – készségeknek a fejlesztésére
            fordít figyelmet, melyek valamely szempontból hátrányos helyzetű
            fiatalok számára biztosíthatják a sikeres iskolai pályafutást.
          </div>
        </Fade>
        <Fade cascade>
          <div className="description">
            <h2>A Tanoda szolgáltatásai ingyenesek:</h2>
            <ul>
              <li>Tantárgyi segítségnyájtás, felzárkóztatás</li>
              <li>A szabadidő hasznos eltöltése</li>
              <li>
                A programban résztvevő gyermekek részére kirándulások, táborozás
                színházlátogatás
              </li>
              <li>Családi rendezvények</li>
              <li>A tanodai napokon uzsonna biztosítása</li>
            </ul>
            <h2>Legyél te is tanodás!</h2>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Introduction;
