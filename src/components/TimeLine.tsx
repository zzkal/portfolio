import React, { useEffect, useState } from 'react';
import TimeLineCard from './TimeLineCard';
import JobDetails from './JobDetails';

interface Jobs {
  id: string;
  company: string;
  post: string;
  date_start: string;
  date_end: string;
  description: string;
  stack: string[];
  goals: string[];
  image: string;
}

interface Props {
  jobs: Jobs[];
}

const TimeLine: React.FC<Props> = ({ jobs }) => {
  const [selectedCard, setSelectedCard] = useState(jobs[0].id);

  const onCardSelected = (id: string) => {
    setSelectedCard(id);
  };

  return (
    <div className='flex w-full h-full mt-52'>
      <div className='relative w-1/2 h-full flex flex-col justify-start items-center space-y-8'>
        <span className='absolute left-56 top-9 bottom-9 border-4 border-blue-950'></span>
        {jobs.map(({ id, company, date_end, date_start, post, image }) => (
          <TimeLineCard
            key={id}
            id={id}
            company={company}
            date_start={date_start}
            date_end={date_end}
            post={post}
            image={image}
            isSelected={selectedCard === id}
            handler={onCardSelected}
          />
        ))}
      </div>

      {jobs.map(({ id, description, goals, stack }) => (
        <JobDetails
          description={description}
          goals={goals}
          stack={stack}
          isSelected={selectedCard === id}
        />
      ))}
    </div>
  );
};

export default TimeLine;
