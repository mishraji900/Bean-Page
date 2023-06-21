import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Posts = ({ post }) => {
  const navigate = useNavigate();

  // Function to handle button click and navigate to Single_post
 // Function to handle button click and navigate to SinglePost
 const handleClick = (post) => {
  navigate({
    pathname: `/single_post/${post.name}`,
    state: { post: post }
  });
};


  return (
    <div className='shadow-md shadow-slate-600 rounded-md h-fit dark:shadow-[#FFE5B4] '>
      <div>
        <img src={post.image} alt="encrit" className='rounded shadow-sm lg:h-52 lg:w-full' />
        <div className='p-3 text-xs'>
          <div>
            <span>{post.category}</span>
          </div>
          <div className='grid grid-rows-2 justify-items-center'>
            <div>
              <span className='text-lg'>{post.name}</span>
            </div>
            <div>
              <span className='text-xs'>date</span>
            </div>
            <div>
              <p className='text-sm'>{post.excrept}</p>
            </div>
            <div className='flex-grow' />
            <div className='pt-1 p-1 pb-0 text-base w-full'>
              <Link to={`/single_post/${post.name}`}>
                <button onClick={() => handleClick(post)} className='border border-blue-500 w-full bg-blue-500 p-1 rounded-full hover:bg-blue-800 hover:text-white dark:bg-blue-800 dark:hover:bg-blue-500'>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
