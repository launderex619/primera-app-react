import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch']);

  // const handleAdd = (value) => {
  //   setCategories([...categories, value]);
  // };

  return (
    <>
      <h2>GifExpertApp </h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>

      <ol>
        {categories.map((category) => <GifGrid key={ category } category={category} />)}
      </ol>
    </>
  );
};

export default GifExpertApp;