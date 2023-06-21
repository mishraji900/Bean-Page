import React from 'react';
import about from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='flex flex-col items-center mt-5 mb-5 h-screen'>
      <div className='mb-3'>
        <span className='border-b border-slate-900 text-lg lg:text-xl font-semibold font-serif'>About This Website & me</span>
      </div>
      <div className='ml-auto mr-auto w-1/2'>
        <p>
          I created this website as a single-page web site to let my mother spread the knowledge of nutrition and health. She got it from NHI. But due to increasing traffic and demand for various other blog posts, I have to expand it to a full-fledged website.
          <br />
          Therefore, now Bean & Page is a full-fledged website where you can write and share your own blog and thoughts.
          <br />
          <strong>Caution:</strong> This website is solely maintained by me, therefore please donate some amount to keep it running without ads.
        </p>
        <div className='pt-8'>
            <div className='flex flex-col items-center'>
            <img src={about} alt="creater_img" className='h-24 w-24 ml-auto mr-auto rounded-full shadow-md shadow-slate-600' />
            <span>Mayank Mishra</span>
            </div>
            <div>
                <p>To contact me for any other development mail here:-mayank2021mishra@gmail.com</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
