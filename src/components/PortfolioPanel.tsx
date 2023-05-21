import React, { useEffect, useState } from 'react';
import Grid from './Grid';

import Tab from './Tab';

interface Project {
  id: string;
  name: string;
  stack: string[];
  goals: string[];
  images: string[];
  link_repo: string;
  link_app: string;
  type: string;
}

interface Projects {
  projects: Project[];
}

const PortfolioPanel: React.FC<Projects> = ({ projects }) => {
  const [allProjects, setAllProjects] = useState<Project[]>(projects);
  const [varList, setVarList] = useState<Project[]>(projects);

  const [typesList, setTypesList] = useState<string[]>();
  const [tabSelectedId, setTabSelectedId] = useState(0);

  useEffect(() => {
    const getTypes = () => {
      const arr = allProjects.map((e) => e.type);
      const set = new Set(arr);
      setTypesList(Array.from(set));
    };
    getTypes();
  }, []);

  const onFilterHandler = (type: string, id: number) => {
    setTabSelectedId(id);
    if (type === 'All') {
      setVarList(allProjects);
    } else {
      const newArr = allProjects.filter((p) => p.type === type);
      setVarList(newArr);
    }
  };

  return (
    <div className='mt-20'>
      <div className='w-full flex justify-center space-x-12 items-center p-3 text-xl font-semibold'>
        <Tab
          id={0}
          label={'All'}
          clickHandler={onFilterHandler}
          isSelected={tabSelectedId === 0}
        />
        {typesList?.map((e) => (
          <Tab
            id={typesList.indexOf(e) + 1}
            label={e}
            clickHandler={onFilterHandler}
            isSelected={tabSelectedId === typesList.indexOf(e) + 1}
          />
        ))}
        <Tab
          id={-1}
          label={'Others'}
          clickHandler={onFilterHandler}
          isSelected={tabSelectedId === -1}
        />
      </div>

      <Grid projects={varList} />
    </div>
  );
};

export default PortfolioPanel;
