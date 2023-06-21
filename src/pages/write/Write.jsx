import React, { useState } from 'react'

const Write = () => {
  const [heading, setHeading] = useState('');
  const [category, setCategory] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary logic with the form data here
    console.log('Heading:', heading);
    console.log('Excrept', excerpt)
    console.log('Category:', category);
    console.log('Blog Content:', blogContent);
    console.log('Author Name:', authorName);
    console.log('Images:', images);

    // Clear the form fields after submission
    setHeading('');
    setExcerpt('')
    setCategory('');
    setBlogContent('');
    setAuthorName('');
    setImages([]);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };
  return (
    <div className='flex flex-col ml-auto mr-auto pt-6 '>
      <form onSubmit={handleSubmit} className='flex w-5/6 bg-gray-400 shadow-lg dark:shadow-[#FFE5B4] shadow-gray-600 flex-col ml-auto mr-auto gap-5 pb-10 rounded-xl border dark:bg-[#444544] dark:border-[#FFE5B4] p-2'>
        <div className='flex flex-row'>

          <label htmlFor="headingInput" className='pr-3'>Heading:</label>
          <input
            type="text"
            id="headingInput"
            value={heading}
            placeholder='Name of your blog'
            className='border w-full p-1 rounded-full text-black'
            onChange={(event) => setHeading(event.target.value)}
          />
        </div>
        <div className='flex flex-row'>
          <label htmlFor="categoryInput" className='pr-3'>Category:</label>
          <select
            id="categoryInput"
            value={category}
            className='border w-full p-1 rounded-full text-black'
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select category...</option>
            <option value="Lifestyle">Art & Culture</option>
            <option value="Food">Food</option>
            <option value="Lifestyle">Gamming</option>
            <option value="Travel">Health & fitness</option>
            <option value="Lifestyle">Sports</option>
            <option value="Technology">Technology & Ai</option>
          </select>
        </div>
        <div className='flex flex-row w-full'>
          <div>
            <label htmlFor="ExcreptInput" className='pr-3'>Excerpt:</label>
          </div>
          <div className='w-full'>
          <textarea
            type="text"
            id="excreptInput"
            value={excerpt}
            placeholder='Enter a Short description of your blog'
            className='border w-full h-36 p-1 rounded-3xl text-black'
            onChange={(event) => setExcerpt(event.target.value)}
          />
          </div>
        </div>
        <div className='flex flex-row'>
          <textarea
            id="blogContentInput"
            value={blogContent}
            placeholder='enter content of blog'
            className='border h-96 w-full p-1 rounded-3xl text-black'
            onChange={(event) => setBlogContent(event.target.value)}
          ></textarea>
        </div>

        <div className='flex flex-row'>

          <label htmlFor="authorNameInput " className='pr-3'>Author's Name:</label>
          <input
            type="text"
            id="authorNameInput"
            value={authorName}
            className='border w-full p-1 rounded-full text-black'
            onChange={(event) => setAuthorName(event.target.value)}
          />
        </div>
        <div className='flex flex-row'>

          <label htmlFor="imageInput" className='pr-3'>Images:</label>
          <input
            type="file"
            id="imageInput"
            accept="image/*" 
            className='border w-full border-blue-500  bg-blue-500 p-1 rounded-full hover:bg-blue-800 hover:text-white dark:bg-blue-800 dark:hover:bg-blue-500'
            multiple
            onChange={handleImageChange}
          />
        </div>

        <button type="submit" className='border border-blue-500 w-full bg-blue-500 p-1 rounded-full hover:bg-blue-800 hover:text-white dark:bg-blue-800 dark:hover:bg-blue-500'>Submit</button>
      </form>
    </div>
  )
}

export default Write
