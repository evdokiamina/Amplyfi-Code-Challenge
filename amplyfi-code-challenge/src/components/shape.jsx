import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  small: PropTypes.bool,
  bug: PropTypes.bool,
}

const defaultProps = {
  left: false,
  right: false,
  small: false,
  big: false,
}

const Shape = ({
  left,
  right,
  small,
  big,
}) => {
  const classes = classnames(
    'Shape_container',
    {
      'Shape_container-left': left,
      'Shape_container-right': right,
      'Shape_container-small': small,
      'Shape_container-big': big,
    },
  )

  return (
    <div className="Shape">
      <div className={classes}>
        <div className="Shape_shape"></div>
      </div>
    </div>
  );
}

Shape.propTypes = propTypes;
Shape.defaultProps = defaultProps;

export default Shape;