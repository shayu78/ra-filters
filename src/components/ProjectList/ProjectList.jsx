import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectList(props) {
  const { projects } = props;

  return (
    <div className="projectlist__wrapper">
      {projects.map((value) => <img key={value.id} className="projectlist__item" src={value.img} alt={value.category} />)}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};
