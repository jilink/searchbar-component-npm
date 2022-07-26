import React from 'react';
import { SearchBar } from './index';
export default {
  title: "SearchBar",
};

  const dataArray = [
    "John",
    "Mark",
    "Antoine",
    "Fabrice",
    "Laura",
    "Fabienne",
    "Thomas",
    "Léa",
  ];

export const SearchbarPrimary = () => {
  const [list, setList] = React.useState(dataArray);
  return (
    <>
      <SearchBar list={dataArray} setList={setList} />
      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}