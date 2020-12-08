import React from 'react';
import Fade from 'react-reveal/Fade';

import { graphql, useStaticQuery } from 'gatsby';

import zst_logo_haromszog_zöld from '../../assets/images/decoration/zst_logo_haromszog_zöld.svg';
import zst_logo_haromszog_narancs from '../../assets/images/decoration/zst_logo_haromszog_narancs.svg';
import zst_logo_haromszog_sarga from '../../assets/images/decoration/zst_logo_haromszog_sarga.svg';

import './introduction.scss';

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query Icons {
      introduction: file(relativePath: { eq: "introduction_photo.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      logo: file(relativePath: { eq: "zst_logo.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
    }
  `);

  return (
    <div className="introduction-wrapper">
      <Fade big>
        <div className="introduction-image-wrapper">
          <img
            id="introduction_photo"
            srcSet={data.introduction.childImageSharp.fluid.srcSet}
            alt="introduction_photo"
          />
        </div>
      </Fade>

      <div className="description-wrapper">
        <Fade big>
          <img
            id="zsendulo_logo"
            srcSet={data.logo.childImageSharp.fluid.srcSet}
            alt="zsendulo tanoda"
          />
        </Fade>
        <img
          className="decoration decoration_3"
          src={zst_logo_haromszog_zöld}
          alt="decor_2"
        />
        <img
          className="decoration decoration_2"
          src={zst_logo_haromszog_sarga}
          alt="decor_2"
        />
        <img
          className="decoration decoration_1"
          src={zst_logo_haromszog_narancs}
          alt="decor_2"
        />
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

        <Fade big>
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
