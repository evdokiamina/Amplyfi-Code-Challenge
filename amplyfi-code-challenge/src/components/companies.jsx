import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
}

const Companies = ({
  data
}) => {
  return (
    <div className="Companies">
      <ul className="Companies_list">
        {
          Object.values(data).map(item => {
            return (
              <li className="Companies_listItem">
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>);
}

Companies.propTypes = propTypes;

export default Companies;