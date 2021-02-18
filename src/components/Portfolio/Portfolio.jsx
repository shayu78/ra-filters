import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import { list } from '../ProjectList/list';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

export default function Portfolio() {
  const filtersList = ["All", "Websites", "Flayers", "Business Cards"];

  const idList = list.map((value) => {
    value.id = nanoid();  // используем nanoid для создания уникального ключа
    return value;
  });

  const initialData = (filterName) => {
    if (filterName === 'All') return idList;
    return idList.filter((value) => value.category === filterName);
  }

  const [selectedFilter, setSelectedFilter] = useState('All');
  const [data, setData] = useState(initialData('All'));

  const getFilter = (value) => {
    setSelectedFilter(value);
    getData(value);
  }

  const getData = (filterName) => {
    if (filterName === 'All') setData(idList);
    else setData(idList.filter((value) => value.category === filterName));
  }

  return (
    <>
      <Toolbar filters={filtersList}
        selected={selectedFilter}
        onSelectFilter={getFilter}
      />
      <ProjectList projects={data} />
    </>
  );
}
