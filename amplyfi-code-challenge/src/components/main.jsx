import React, { useState } from 'react';
import data from '../data/JSON/232.json';


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
              <p className="Main_groupInfo">
                {data.m_szDocSumamry}
              </p>
            </li>
            <li className="Main_groupItem">
              Document Details
              <p className="Main_groupInfo">
                {data.m_szDocBody}
              </p>
            </li>
            <li className="Main_groupItem">
              Location
              <p className="Main_groupInfo">
                {data.m_szGeo1}
              </p>
            </li>
          </ul>
          <a href={data.m_szSrcUrl} className="Main_groupInfo">
            Source
              </a>
        </div>
      </div>
    </div>
  );
}

export default Main;