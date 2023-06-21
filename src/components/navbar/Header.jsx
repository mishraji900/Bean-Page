import React from 'react';
import Logo from '../../assets/Logo.png';

const Header = () => {
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='absolute'>
        <img src={Logo} alt="logo" className='h-24 lg:h-48 mx-auto rounded-lg'/>
      </div>
      <div className=''>
        <img src="https://assets.weforum.org/article/image/JMF96ETfn1kSViVnUou1Z0XIDwWcPpT5mrPc7-ytpAc.jpg" alt="head_img" className='lg:h-96 h-72 w-screen mx-auto'/>
      </div>
    </div>
  );
}

export default Header;
