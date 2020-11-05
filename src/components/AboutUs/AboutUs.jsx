import React from 'react';
import Fade from 'react-reveal/Fade';

import { Link, graphql, useStaticQuery } from 'gatsby';

import Button from '@material-ui/core/Button';

import './aboutUs.scss';

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query Articles {
      article_1: file(relativePath: { eq: "articles/articles_1.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      article_2: file(relativePath: { eq: "articles/articles_2.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
    }
  `);

  const articles = [
    {
      image: data.article_1.childImageSharp.fluid.srcSet,
      title: 'Ön hallott már a Zsendülő Tanodáról?',
      description:
        'Facebook oldala szerint tavaly kora ősztől a Kesztyűgyárban működik a hátrányos helyzetű gyerekek ...',
      button_text: 'Tovább olvasom',
      button_url:
        'https://jozsefvaros.hu/hir/74688/on-hallott-mar-a-zsendulo-tanodarol'
    },
    {
      image: data.article_2.childImageSharp.fluid.srcSet,
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
                <img srcSet={article.image} alt={`image_${index}`} />
              </div>
              <h5>{article.title}</h5>
              <p>{article.description}</p>
              <Link
                to={article.button_url}
                target={'_blank'}
                rel={'noopener noreferrer nofollow'}
              >
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
