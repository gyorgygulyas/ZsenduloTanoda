import React from 'react';
import Fade from 'react-reveal/Fade';

import { Link } from 'gatsby';

import Button from '@material-ui/core/Button';
import articles_1 from '../../assets/images/articles_1.png';
import articles_2 from '../../assets/images/articles_2.png';

import './aboutUs.scss';

const AboutUs = () => {
  const articles = [
    {
      image: articles_1,
      title: 'Ön hallott már a Zsendülő Tanodáról?',
      description:
        'Facebook oldala szerint tavaly kora ősztől a Kesztyűgyárban működik a hátrányos helyzetű gyerekek ...',
      button_text: 'Tovább olvasom',
      button_url:
        'https://jozsefvaros.hu/hir/74688/on-hallott-mar-a-zsendulo-tanodarol'
    },
    {
      image: articles_2,
      title: 'Működő családot, biztonságot ad a Zsendülő Tanoda',
      description:
        'Egyéni képességeik és érdeklődésük alapján fejlesztik, tanítják a hátrányos helyzetű gyerekeket a kerületi ...',
      button_text: 'Tovább olvasom',
      button_url:
        'https://jozsefvaros.hu/hir/75140/M%C5%B1kodo_csaladot_biztonsagot_ad_a_Zsendulo_Tanoda/'
    }
  ];

  return (
    <div className="aboutus-wrapper">
      <h1>Rólunk írták</h1>
      <div className="articles-wrapper">
        {articles.map((article, index) => (
          <Fade cascade key={`article_${index}`}>
            <div className="article">
              <div className="image-wrapper">
                <img src={article.image} alt={`image_${index}`} />
              </div>
              <h5>{article.title}</h5>
              <p>{article.description}</p>
              <Link to={article.button_url} target={'_blank'}>
                <Button className="button_1">{article.button_text}</Button>
              </Link>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
