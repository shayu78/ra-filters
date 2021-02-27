import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  return (
    <div className="toolbar__wrapper">
      <ul className="toolbar__items">
        {filters.map((value) => {
          return <li key={value} className={cn({ 'toolbar__item': true, 'active': value === selected })}
            onClick={() => onSelectFilter(value)}>{value}</li>
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
