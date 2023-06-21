import { IconButton } from '@mui/material';
import { DarkMode, Brightness7 } from '@mui/icons-material';

import React, { useState, useEffect } from 'react';

const Toggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme==='dark') {
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
    // Add your code here if you have any logic to handle the theme change
  }, [theme]);
  const handleThemeSwitch=()=>{
    setTheme(theme==='light'?"dark":"light")
  }

  return (
    <div>
      <IconButton color="inherit" onClick={handleThemeSwitch} >
        {theme === 'dark' ? <Brightness7 /> : <DarkMode />}
      </IconButton>
    </div>
  );
};

export default Toggle;
