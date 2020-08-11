import React, { useState } from 'react';
import data from '../data/JSON/232.json';
import Section from './Section';

const Main = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="Main">
      <div className="Main_container">
        <div className="Main_header">
          <h1>
            AMPLYFI
          </h1>
          <p>
            Code Challenge
          </p>
        </div>
        <Section>
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
        </Section>
      </div>
    </div>
  );
}

export default Main;