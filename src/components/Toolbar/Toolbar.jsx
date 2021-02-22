import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  return (
    <div className="toolbar__wrapper">
      <ul className="toolbar__items">
        {filters.map((value) => {
          const classes = (value === selected) ? 'toolbar__item active' : 'toolbar__item';
          return <li key={value} className={classes} onClick={() => onSelectFilter(value)}>{value}</li>
        })}
      </ul>
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};
