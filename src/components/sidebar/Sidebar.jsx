import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const Sidebar = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className='hidden lg:flex lg:flex-col ml-auto mr-16 text-slate-600 w-fit dark:text-[#ede7db]'>
      <div className='flex flex-col p-2 shadow shadow-slate-800 dark:shadow-[#FFE5B4]'>
        <span className='border-b border-slate-900 dark:border-[#FFE5B4]'>About Me</span>
        <p>
          I created this website as a single-page web site to let my mother spread the knowledge of nutrition and health.
          She got it from NHI. To contact me for any other development mail here: - mayank2021mishra@gmail.com
        </p>
      </div>
      <div className='mt-3 mb-3 flex flex-col p-2 shadow shadow-slate-800 dark:shadow-[#FFE5B4]'>
        <span className='border-b border-slate-900 dark:border-[#FFE5B4]'>Categories</span>
        <div className='p-5 pr-0 pb-0 border-b border-slate-800 dark:border-[#FFE5B4]'>
          <ul className='list-disc'>
            <li
              className={`list-outside hover:list-inside hover:cursor-pointer hover:font-semibold hover:p-1 ${
                selectedCategory === 'All' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('All')}
            >
              All
            </li>
            <li
              className={`list-outside hover:list-inside hover:cursor-pointer hover:font-semibold hover:p-1 ${
                selectedCategory === 'Health_&_Fitness' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('Health_&_Fitness')}
            >
              Health & fitness
            </li>
            <li
              className={`list-outside hover:list-inside hover:cursor-pointer hover:font-semibold hover:p-1 ${
                selectedCategory === 'Arts_&_culture' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('Arts_&_culture')}
            >
              Arts & Culture
            </li>
            <li
              className={`list-outside hover:list-inside hover:cursor-pointer hover:font-semibold hover:p-1 ${
                selectedCategory === 'sports' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('sports')}
            >
              Sports
            </li>
            <li
              className={`list-outside hover:list-inside hover:cursor-pointer hover:font-semibold hover:p-1 ${
                selectedCategory === 'technology' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('technology')}
            >
              Technology & AI
            </li>
            <li
              className={`list-outside hover:list-inside hover:cursor-pointer hover:font-semibold hover:p-1 ${
                selectedCategory === 'gaming' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('gamming')}
            >
              Gaming
            </li>
            <li
              className={`list-outside hover:list-inside hover:cursor-pointer hover:font-semibold hover:p-1 ${
                selectedCategory === 'food' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('food')}
            >
              Food
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <span className='border-b border-slate-900 dark:border-[#FFE5B4]'>Follow us</span>
          <div className='flex flex-row ml-auto mr-auto p-2'>
            <FacebookIcon />
            <InstagramIcon />
            <PinterestIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
