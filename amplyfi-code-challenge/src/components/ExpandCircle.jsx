import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  blockName: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};

const defaultProps = {
  blockName: '',
}

const ExpandCircle = ({
  blockName,
  list,
  name,
}) => {
  const circleRef = useRef(null);
  const itemsRef = useRef(null);

  const setCirclePosition = _e => {
    const listData = itemsRef.current.childNodes;
    const listLength = Object.values(listData).length;

    if (listData) {
      const radius = listLength <= 10 ? 130 : 160;
      Object.values(listData).forEach((item, index) => {
        const randomAngle = (index * (Math.PI * 2 / listLength));
        const randomX = Math.cos(randomAngle) * radius;
        const randomY = Math.sin(randomAngle) * radius;
        item.style.setProperty('--posX', `${randomX}%`);
        item.style.setProperty('--posY', `${randomY}%`);
      })
    }
  };

  useEffect(() => {
    const element = circleRef.current;

    if (circleRef) {
      element.addEventListener('mouseover', setCirclePosition);
    }

    return () => {
      element.removeEventListener('mouseover', setCirclePosition);
    }
  }, []);

  return (
    <div className={`${blockName} ExpandCircle`}>
      <div className="ExpandCircle_container" ref={circleRef}>
        <div className="ExpandCircle_circleContainer">
          <div className="ExpandCircle_circle ExpandCircle_circle-one"></div>
          <div className="ExpandCircle_circle ExpandCircle_circle-two"></div>
          <div className="ExpandCircle_circle ExpandCircle_circle-three"></div>
          <h1 className="ExpandCircle_title">
            {name}
          </h1>
        </div>
        <div>

          <div className="ExpandCircle_listContainer" ref={itemsRef}>
            {list.map((item, index) => {
              return (
                <div key={index} data-items="listItem" className="ExpandCircle_listItem">
                  {item}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

ExpandCircle.propTypes = propTypes;
ExpandCircle.defaultProps = defaultProps;

export default ExpandCircle;