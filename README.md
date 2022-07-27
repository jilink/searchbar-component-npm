# searchbar-component-npm

Vanilla reusable searchbar component

[GitHub Repository](https://github.com/jilink/searchbar-component-npm)


# How to use

## Basic list

``` js
import React from 'react';
import { SearchBar } from "searchbar-component-npm"

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

```

## Object list

``` js

// filtering by types

import React from 'react';
import { SearchBar } from "searchbar-component-npm"

  const dataObjects = [
    { name: "John", details: { age: 32, type: "gentil" } },
    { name: "Mark", details: { age: 12, type: "cool" } },
    { name: "Antoine", details: { age: 65, type: "gentil" } },
    { name: "Fabrice", details: { age: 6, type: "flemmard" } },
    { name: "Laura", details: { age: 31, type: "costaud" } },
    { name: "Fabienne", details: { age: 54, type: "gentil" } },
    { name: "Thomas", details: { age: 26, type: "flemmard" } },
    { name: "Léa", details: { age: 62, type: "costaud" } },
  ];
  
  const [data, setData] = useState(dataObjects)


export const SearchbarPrimary = () => {
  const [list, setList] = React.useState(dataObjects);
  return (
    <>
      <SearchBar list={dataObjects} setList={setList} />
       <SearchBar placeholder={"filter by type"} filterField={(item) => item.details.type} list={dataObjects} setList={setData} style={{width:"100%"}}/>

      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}

```


