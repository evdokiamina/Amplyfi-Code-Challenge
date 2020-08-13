import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  blockName: PropTypes.string,
  children: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ),
}

const defaultProps = {
  blockName: '',
  children: null,
}


const Section = ({
  blockName,
  children,
}) => {

  const classes = classNames(
    blockName,
    'Section',
  );

  return (
    <div className={classes} >
      <div className="Section_container">
        {children}
      </div>
    </div>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;