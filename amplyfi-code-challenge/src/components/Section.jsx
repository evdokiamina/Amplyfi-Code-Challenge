import React from 'react';

const Section = (props) => {
  return (
    <div className="Section">
      <div className="Section_container">
        {props.children}
      </div>
    </div>
  );
}

export default Section;