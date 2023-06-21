import React,{useState} from 'react'

const Category = ({ onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      onSelectCategory(category);
    };
    return (
        <div className='bg-white dark:bg-[#121212] dark:text-[#ff9021]'>
            <div className='text-xlm gap-2 ml-auto mr-auto flex flex-row p-2 shadow shadow-slate-800 dark:shadow-[#FFE5B4] lg:hidden'>
                    
            <div
              className={` ${
                selectedCategory === 'All' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('All')}
            >
              All
            </div>
            <div
              className={` ${
                selectedCategory === 'Health_&_Fitness' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('Health_&_Fitness')}
            >
              Health & fitness
            </div>
            <div
              className={` ${
                selectedCategory === 'Arts_&_culture' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('Arts_&_culture')}
            >
              Arts & Culture
            </div>
            <div
              className={` ${
                selectedCategory === 'sports' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('sports')}
            >
              Sports
            </div>
            <div
              className={` ${
                selectedCategory === 'technology' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('technology')}
            >
              Technology & AI
            </div>
            <div
              className={`  ${
                selectedCategory === 'gaming' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('gamming')}
            >
              Gaming
            </div>
            <div
              className={` ${
                selectedCategory === 'food' && 'text-blue-500'
              }`}
              onClick={() => handleCategoryClick('food')}
            >
              Food
            </div>
         
                    
            </div>
        </div>
    )
}

export default Category
