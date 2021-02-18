import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  const selectFilter = (event) => {
    onSelectFilter(event.target.textContent);
    const currentSelectedItem = document.querySelector('.toolbar__item.active');
    if (currentSelectedItem) currentSelectedItem.classList.remove('active');
    event.target.classList.add('active');
  }

  return (
    <div className="toolbar__wrapper">
      <ul className="toolbar__items">
        {filters.map((value) => {
          const classes = (value === selected) ? 'toolbar__item active' : 'toolbar__item';
          return <li key={value} className={classes} onClick={selectFilter}>{value}</li>
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
