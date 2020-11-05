import React from 'react';
import Fade from 'react-reveal/Fade';
import ContactForm from './ContactForm';

import { graphql, useStaticQuery } from 'gatsby';

import './contact.scss';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query PictureAndLogos {
      picture: file(relativePath: { eq: "picture.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      laptop: file(relativePath: { eq: "icons/laptop.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      game: file(relativePath: { eq: "icons/game.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      food: file(relativePath: { eq: "icons/food.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
    }
  `);

  const contents = [
    {
      icon: data.laptop.childImageSharp.fluid.srcSet,
      title: 'Laptop',
      description:
        'Ha még működik, de már nem használod, ajánld fel nekünk és mi elvisszük oda, ahol most nagy szükség van rá!\n Sok gyereknek a tanulás múlik ezen!'
    },
    {
      icon: data.food.childImageSharp.fluid.srcSet,
      title: 'Tartós élelmiszer',
      description:
        'Fontos, hogy csak bontatlan, azaz az eredeti, sértetlen bolti csomagolásban lévő tartós (minőségmegőrzési idővel rendelkező), hűtést nem igénylő élelmiszerek adhatók le.'
    },
    {
      icon: data.game.childImageSharp.fluid.srcSet,
      title: 'Társasjáték',
      description:
        'Ha te már nem használod, de másoknak még örömet tudsz vele szerezni. Kérlek, csak hiánytalan és jó állapotú játékot hozz, és olyat, ami nem kifejezetten felnőtteknek szóló játék.'
    }
  ];

  return (
    <div className="contact-wrapper" id={'contact-form'}>
      <div className="image-and-form-wrapper">
        <div className="image-wrapper">
          <img
            srcSet={data.picture.childImageSharp.fluid.srcSet}
            alt="zsendulo"
          />
        </div>
        <div className="form-wrapper">
          <ContactForm />
        </div>
      </div>
      <div className="help-wrapper">
        <h1>Mi az, amivel segíteni tudsz nekünk?</h1>
        <div className="content-wrapper">
          {contents.map((content, index) => (
            <Fade bottom cascade key={`help_${index}`}>
              <div className="content">
                <div className="icon-wrapper">
                  <img srcSet={content.icon} alt={`help_item_${index}`} />
                </div>
                <div className="content-desc-wrapper">
                  <h3>{content.title}</h3>
                  <p>{content.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
