import React, { useState } from 'react';
import Header from '../../components/navbar/Header';
import Post from '../../components/post/Post';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log(category)
  };

  return (
    <div>
      <Header />
      <div className='flex ml-6 mt-2 gap-3'>
        <Post category={selectedCategory} />
        <Sidebar onSelectCategory={handleCategorySelect} />
      </div>
    </div>
  );
};

export default Home;
