import React, { useState, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

import Section from './Section';
import ExpandCircle from './ExpandCircle';
import Companies from './companies';
import Shape from './shape';


const propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
}

const Main = ({
  data
}) => {
  const [showCompanies, setShowCompanies] = useState(false);
  const [showDoc, setShowDoc] = useState(true);
  const section = useRef();

  const viewCompanies = () => {
    setShowCompanies(!showCompanies);
  }

  const collapse = (e) => {
    e.currentTarget.parentElement.classList.toggle('Main-collapse');
  }

  return (
    <div className="Main">
      <Parallax className="Main_parallax" y={[-200, 200]} x={[1000, 500]} tagOuter="figure">
        <Shape left />
      </Parallax>
      <div className="Main_sectionTitle" onClick={(e) => collapse(e)}>
        <h1 className="Main_docTitle">
          {data.m_szDocTitle}
        </h1>
      </div>
      <div className="Main_container" ref={section}>
        <Section blockName="Main_section">
          <div className="Main_group">
            <div className="Main_groupHeader">
              <div className="Main_groupDets">
                Document ID:
              {data.m_szDocID}
              </div>
              <div className="Main_year">
                Document Year:
              {data.m_szYear}
              </div>
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
            list={data.m_People}
            name="People"
            blockName="Main_circle Main_circle-big"
          />
          <ExpandCircle
            list={data.m_Places}
            name="Places"
          />
        </Section>
        <Section blockName="Main_companiesSection">
          <div className="Main_companiesContainer">
            <button className="Main_companiesBtn" onClick={viewCompanies}>
              {showCompanies ? 'Hide Companies' : 'View Companies'}
            </button>
          </div>
          {showCompanies &&
            <Companies data={data.m_Companies} />
          }
        </Section>
      </div>
      <Parallax className="Main_parallax" y={[-200, -400]} x={[-10, 70]} tagOuter="figure">
        <Shape right />
      </Parallax>
    </div>
  );
}

export default Main;