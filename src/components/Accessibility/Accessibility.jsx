import React from 'react';
import Fade from 'react-reveal/Fade';

import GoogleMapReact from 'google-map-react';

import { graphql, useStaticQuery } from 'gatsby';

import './accessibility.scss';

const Accessibility = () => {
  const data = useStaticQuery(graphql`
    query SupermanAndLogos {
      superman: file(relativePath: { eq: "superman.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      key: file(relativePath: { eq: "icons/key.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      address: file(relativePath: { eq: "icons/address.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      email_orange: file(relativePath: { eq: "icons/email_orange.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      phone_orange: file(relativePath: { eq: "icons/phone_orange.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
    }
  `);

  const renderMarker = (map, maps) => {
    let marker = new maps.Marker({
      position: {
        lat: 47.492567,
        lng: 19.079697
      },
      map,
      title: 'Zsendülő Tanoda'
    });
    return marker;
  };

  return (
    <Fade big>
      <div className="accessibility-wrapper">
        <div className="accessibility-body">
          <div className="accessibility-main">
            <h1>Elérhetőségeink</h1>
            <div className="content-wrapper">
              <div className="content">
                <div className="icon-wrapper">
                  <img
                    srcSet={data.key.childImageSharp.fluid.srcSet}
                    alt={`opening_hours`}
                  />
                </div>
                <div className="content-desc-wrapper">
                  <h3>Nyitvatartás</h3>
                  <section>
                    <div>
                      <p>Hétfő: 14.00-18.00</p>
                      <p>Kedd: 14.00-18.00</p>
                      <p>Szerda: 14.00-18.00</p>
                    </div>
                    <div>
                      <p>Csütörtök: 14.00-18.00</p>
                      <p>Péntek: 14.00-18.00</p>
                      <p>Szombat - vasárnap: Zárva</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="icon-wrapper">
                  <img
                    srcSet={data.address.childImageSharp.fluid.srcSet}
                    alt={`address`}
                  />
                </div>
                <div className="content-desc-wrapper">
                  <h3>
                    <a
                      href="https://www.google.com/maps/place/Budapest,+M%C3%A1ty%C3%A1s+t%C3%A9r+15,+1084/"
                      rel={'noopener noreferrer nofollower'}
                      target={'__blank'}
                    >
                      1084 Budapest, Mátyás tér 15.
                    </a>
                  </h3>

                  <section>
                    <div className="desc">
                      <p>
                        Megközelíthető a Blaha Lujza tértől 99-es busszal.
                        Gyalogosan a 4/6-os villamos Harminckettesek tere
                        megállójától: József utca -&gt; Mátyás tér.
                      </p>
                    </div>
                  </section>
                  <div
                    style={{
                      height: '200px',
                      width: '100%',
                      marginTop: '50px'
                    }}
                  >
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: process.env.GATSBY_GOOGLE_MAPS_API_KEY
                      }}
                      defaultCenter={{
                        lat: 47.492567,
                        lng: 19.079697
                      }}
                      defaultZoom={16}
                      onGoogleApiLoaded={({ map, maps }) =>
                        renderMarker(map, maps)
                      }
                      yesIWantToUseGoogleMapApiInternals
                    ></GoogleMapReact>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Fade big>
            <div className="image-wrapper">
              <img
                srcSet={data.superman.childImageSharp.fluid.srcSet}
                alt="superman"
              />
            </div>
          </Fade>
        </div>

        <div className="contact-wrapper">
          <div className="contacts">
            <div className="contact">
              <a
                href="mailto:tanoda@kesztyugyar.hu"
                rel={'noopener noreferrer nofollower'}
                aria-label={'zsendulo email'}
              >
                <img
                  srcSet={data.email_orange.childImageSharp.fluid.srcSet}
                  alt="zsendulo email"
                />
              </a>
            </div>
            <div className="contact">
              <a
                href="tel:+36306358177"
                rel={'noopener noreferrer nofollower'}
                aria-label={'zsendulo telefon'}
              >
                <img
                  srcSet={data.phone_orange.childImageSharp.fluid.srcSet}
                  alt="zsendulo email"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Accessibility;
