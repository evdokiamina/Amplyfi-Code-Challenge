import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

import data from '../data/JSON/232.json';
import data2 from '../data/JSON/545.json'

import Section from './Section';
import ExpandCircle from './ExpandCircle';
import Companies from './companies';
import Shape from './shape';


const Main = () => {
  const [showCompanies, setShowCompanies] = useState(false);

  const setHeader = _event => {
    const [header] = document.getElementsByClassName('Main_header');
    const [mainSection] = document.getElementsByClassName('Main_section');
    const [title] = document.getElementsByClassName('Main_title');
    const [subTitle] = document.getElementsByClassName('Main_subtitle');
    if (mainSection.getBoundingClientRect().top <= (header.clientHeight + 10)) {
      subTitle.classList.add('Main_subtitle-small');
      title.classList.add('Main_title-small')
    } else if (subTitle.classList.contains('Main_subtitle-small')) {
      subTitle.classList.remove('Main_subtitle-small');
      title.classList.remove('Main_title-small')
    }
  };

  const viewCompanies = () => {
    setShowCompanies(!showCompanies);
  }

  useEffect(() => {
    setTimeout(() => {

      window.addEventListener('scroll', setHeader);
    }, 0)
  }, []);

  return (
    <div className="Main" path="">
      <div className="Main_container">
        <div className="Main_header">
          <h1 className="Main_title">
            AMPLYFI
          </h1>
          <p className="Main_subtitle">
            Code Challenge
          </p>
        </div>
        <Parallax className="Main_parallax" y={[-200, 200]} x={[1000, 500]} tagOuter="figure">
          <Shape left small />
        </Parallax>
        <Section blockName="Main_section">
          <div className="Main_group">
            <div className="Main_groupDets">
              Document ID:
            {data.m_szDocID}
            </div>
            <ul className="Main_groupDets">
              <li className="Main_groupItem">
                <h3 className="Main_groupTitle">
                  Document Summary
              </h3>
                <div className="Main_groupInfo">
                  <p className="Main_groupInfoContainer">
                    {data.m_szDocSumamry}
                  </p>
                </div>
              </li>
              <li className="Main_groupItem">
                <h3 className="Main_groupTitle">
                  Document Details
              </h3>
                <div className="Main_groupInfo">
                  <p className="Main_groupInfoContainer">
                    {data.m_szDocBody}
                  </p>
                </div>
              </li>
              <li className="Main_groupItem">
                <h3 className="Main_groupTitle">
                  Location
              </h3>
                <div className="Main_groupInfo">
                  <p className="Main_groupInfoContainer">
                    {data.m_szGeo1}
                  </p>
                </div>
              </li>
            </ul>
            <a href={data.m_szSrcUrl} className="Main_groupInfo">
              Source
              </a>
          </div>
          <ExpandCircle
            list={data.m_Places}
            name="Places"
            blockName="Main_circle Main_circle-big"
          />
          <ExpandCircle
            list={data2.m_Places}
            name="Places"
          />
        </Section>

        {/* <button onClick={viewCompanies}>
          {showCompanies ? 'Hide Companies' : 'View Companies'}
        </button> */}
        {showCompanies &&
          <Companies />
        }
      </div>
      <Parallax className="Main_parallax" y={[-200, 20]} x={[-10, 70]} tagOuter="figure">
        <Shape right />
      </Parallax>
    </div>
  );
}

export default Main;