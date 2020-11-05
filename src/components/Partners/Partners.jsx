import React from 'react';
import Slider from 'react-slick';

import { Link, graphql, useStaticQuery } from 'gatsby';

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
  const data = useStaticQuery(graphql`
    query PartnerLogos {
      sodexo: file(relativePath: { eq: "partnerLogos/sodexo.jpg" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      jozsefvaros: file(relativePath: { eq: "partnerLogos/jozsefvaros.jpg" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      kesztyugyar: file(
        relativePath: { eq: "partnerLogos/kesztyugyar_kozossegi_haz_logo.png" }
      ) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      noe: file(relativePath: { eq: "partnerLogos/noe.jpg" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      pest_immami: file(relativePath: { eq: "partnerLogos/pest_immami.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      united_way: file(relativePath: { eq: "partnerLogos/united_way.jpg" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
    }
  `);

  const partners = [
    {
      logo: data.sodexo.childImageSharp.fluid.srcSet,
      title: 'Sodexo Magyarország Kft.',
      address: '1143 Budapest, Ilka u. 31.',
      url: 'https://hu.sodexo.com'
    },
    {
      logo: data.united_way.childImageSharp.fluid.srcSet,
      title: 'Erőforrás Alapítvány United Way',
      address: '1134 Budapest, Váci út 33. IV. em',
      url: 'http://www.unitedway.hu'
    },
    {
      logo: data.noe.childImageSharp.fluid.srcSet,
      title: 'Józsefvárosi Nagycsaládosok Egyesülete',
      address: '1084 Budapest, Déri Miksa u. 18.',
      url: 'https://noe.hu'
    },
    {
      logo: data.jozsefvaros.childImageSharp.fluid.srcSet,
      title: 'Józsefváros Közösségeiért Nonprofit Zrt.',
      address: '1084, Budapest Mátyás Tér 15.',
      url: 'https://jkn.hu/'
    },
    {
      logo: data.pest_immami.childImageSharp.fluid.srcSet,
      title:
        'A pesti és a Pest környéki anyukák és kismamák információs oldala',
      address: '1092 Budapest Erkel u. 11. 2/1.',
      url: 'http://www.budapest.imami.hu'
    },
    {
      logo: data.kesztyugyar.childImageSharp.fluid.srcSet,
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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
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
                    <img
                      srcSet={partner.logo}
                      alt={`zsendulo_partner_${index}`}
                    />
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
