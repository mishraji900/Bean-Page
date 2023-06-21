import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  const [heading, setHeading] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary logic with the form data here
    console.log('Heading:', heading);
    console.log('Email:', email);

    // Clear the form fields after submission
    setHeading('');
    setEmail('');
  };

  return (
    <div className="h-screen ml-auto mr-auto">
      <div className="flex flex-col ml-auto mr-auto pt-6">
        <form
          onSubmit={handleSubmit}
          className="flex w-3/6 bg-gray-400 shadow-lg dark:shadow-[#FFE5B4] shadow-gray-600 flex-col ml-auto mr-auto gap-5 pb-10 rounded-xl border dark:bg-[#444544] dark:border-[#FFE5B4] p-2"
        >
          <div>
            <h2>Weekly Newsletter</h2>
          </div>
          <div className="flex flex-row">
            <label htmlFor="headingInput" className="pr-3">
              Name:
            </label>
            <input
              type="text"
              id="headingInput"
              value={heading}
              placeholder="Your Name"
              className="border w-full p-1 rounded-full text-black"
              onChange={(event) => setHeading(event.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <label htmlFor="emailInput" className="pr-3">
              Email:
            </label>
            <input
              type="email"
              id="emailInput"
              value={email}
              placeholder="abc@xyz.com"
              className="border w-full p-1 rounded-full text-black"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="border border-blue-500 w-full bg-blue-500 p-1 rounded-full hover:bg-blue-800 hover:text-white dark:bg-blue-800 dark:hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </div>

      <div className='flex flex-col gap-3 text-slate-600 dark:text-[#ff9021] mt-10 lg:ml-80 ml-10 mr-auto'>
        <div><FacebookIcon className='pr-2' /><a href="#">www.Facebook.com/Bean&page</a></div>
        <div><InstagramIcon className='pr-2' /><a href="#">www.Instagram.com/Bean&page</a></div>
        <div><PinterestIcon className='pr-2' /><a href="#">www.pinterest.com/Bean&page</a></div>
        <div><TwitterIcon className='pr-2' /><a href="#">www.twitter.com/Bean&page</a></div>
      </div>

    </div>
  );
};

export default Contact;
