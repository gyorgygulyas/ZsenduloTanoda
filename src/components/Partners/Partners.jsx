import React from 'react';
import Slider from 'react-slick';

import { Link } from 'gatsby';

import sodexo from '../../assets/images/sodexo.jpg';
import jozsefvaros from '../../assets/images/jozsefvaros.jpg';
import kesztyugyar from '../../assets/images/kesztyugyar_kozossegi_haz_logo.png';
import noe from '../../assets/images/noe.jpg';
import pest_immami from '../../assets/images/pest_immami.png';
import united_way from '../../assets/images/united_way.jpg';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './partners.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const arrowStyle = {
  color: '#707070',
  width: 40,
  height: 40,
  padding: 7,
  cursor: 'pointer'
};

export function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <ArrowForwardIosIcon
      className={className}
      style={{
        ...style,
        arrowStyle
      }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <ArrowBackIosIcon
      className={className}
      style={{
        ...style,
        arrowStyle
      }}
      onClick={onClick}
    />
  );
}

const Partners = () => {
  const partners = [
    {
      logo: sodexo,
      title: 'Sodexo Magyarország Kft.',
      address: '1143 Budapest, Ilka u. 31.',
      url: 'https://hu.sodexo.com'
    },
    {
      logo: united_way,
      title: 'Erőforrás Alapítvány United Way',
      address: '1134 Budapest, Váci út 33. IV. em',
      url: 'http://www.unitedway.hu'
    },
    {
      logo: noe,
      title: 'Józsefvárosi Nagycsaládosok Egyesülete',
      address: '1084 Budapest, Déri Miksa u. 18.',
      url: 'https://noe.hu'
    },
    {
      logo: jozsefvaros,
      title: 'Józsefváros Közösségeiért Nonprofit Zrt.',
      address: '1084, Budapest Mátyás Tér 15.',
      url: 'https://jkn.hu/'
    },
    {
      logo: pest_immami,
      title: 'A pesti és a Pest környéki anyukák és kismamák információs oldala',
      address: '1092 Budapest Erkel u. 11. 2/1.',
      url: 'http://www.budapest.imami.hu'
    },
    {
      logo: kesztyugyar,
      title: 'Kesztyűgyár közösségi ház',
      address: '1084, Budapest Mátyás Tér 15.',
      url: 'http://www.kesztyugyar.hu/'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="partners-wrapper">
      <h1>Partnereink</h1>
      <Slider {...settings}>
        {partners.map((partner, index) => {
          return partner.logo || partner.title ? (
            <Link to={partner.url} target={'__blank'} key={index}>
              <div className="partner-wrapper">
                {partner.logo ? (
                  <div className="image-wrapper">
                    <img src={partner.logo} alt={`zsendulo_partner_${index}`} />
                  </div>
                ) : null}
                {partner.title ? (
                  <div className="description-wrapper">
                    <h4>{partner.title}</h4>
                    <h5>{partner.address}</h5>
                    <h6>{partner.url}</h6>
                  </div>
                ) : null}
              </div>
            </Link>
          ) : null;
        })}
      </Slider>
    </div>
  );
};

export default Partners;
