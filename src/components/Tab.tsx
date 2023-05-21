import React from 'react';

interface TabProps {
  id: number;
  label: string;
  clickHandler: (type: string, id: number) => void;
  isSelected: boolean;
}

const Tab: React.FC<TabProps> = ({ id, label, clickHandler, isSelected }) => {
  return (
    <h5
      onClick={() => clickHandler(label, id)}
      className={`p-2 cursor-pointer hover-underline-animation transition ${
        isSelected ? 'text-white bg-black rounded-md' : 'rounded-full'
      }`}
    >
      {label}
    </h5>
  );
};

export default Tab;