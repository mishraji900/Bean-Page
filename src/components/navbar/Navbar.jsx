import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link } from 'react-router-dom';
import Themetoggle from '../toggle/Themetoggle'
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();
    return (
        <div className='bg-white dark:bg-[#121212] dark:text-[#ff9021]'>
            <div className='flex flex-row mt-0 mb-0 m-0  lg:mt-0 lg:mb-0 lg:m-24 text-lg p-1 border-b-2 border-slate-600 dark:border-[#FFE5B4]'>
                <div className='lg:flex gap-3 text-slate-600 hidden dark:text-[#ff9021] pt-1'>
                    <div><FacebookIcon /></div>
                    <div><InstagramIcon /></div>
                    <div><PinterestIcon /></div>
                    <div><TwitterIcon /></div>
                </div>
                <div className='lg:flex hidden gap-3 ml-auto uppercase text-slate-700 font-semibold dark:text-[#ff9021] pt-1'>
                    <Link to='/'><div>Home</div></Link>
                    <Link to='/About'><div>About</div></Link>
                    <Link to='/Contact'><div>Contact</div></Link>
                    
                </div>
                <div className='flex lg:hidden gap-3 ml-auto uppercase text-slate-700 font-semibold dark:text-[#ff9021] pt-1'>
                    <Link to='/'><div><HomeIcon /></div></Link>
                    <Link to='/About'><div><BookIcon /></div></Link>
                    <Link to='/About'><div><ContactPageIcon /></div></Link>
                </div>
                <div className='flex ml-auto gap-3 dark:text-[#ff9021]'>
                    
                    {
                        isAuthenticated ? <div className='flex flex-row'>
                            <div className='mr-2 gap-3 ml-auto uppercase text-slate-700 font-semibold dark:text-[#ff9021] pt-1'>
                            <Link to='/Write'><div className='lg:hidden '><EditNoteIcon /></div></Link>
                            <Link to='/Write'><div className='hidden lg:block'>Write</div></Link>
                            </div>
                            <button className=' bg-violet-700 w-16 rounded-sm text-white hover:cursor-pointer hover:bg-violet-900 shadow-sm shadow-violet-500 dark:bg-[#ff9021] dark:hover:bg-orange-700 data:shadow-md dark:shadow-[#FFE5B4] flex pt-1' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                <div className='flex p-1 pl-2 w-fit'>
                                    <img src={user.picture} alt={user.name} className='rounded-full h-6 w-6'/>
                                </div>
                                <div className='lg:block hidden'>
                                    <LogoutIcon />
                                </div>
                            </button>
                        </div>:<button className=' bg-violet-700 w-16 rounded-sm text-white hover:cursor-pointer hover:bg-violet-900 shadow-sm shadow-violet-500 dark:bg-[#ff9021] dark:hover:bg-orange-700 data:shadow-md dark:shadow-[#FFE5B4]' onClick={() => loginWithRedirect()}>
                        <div className='lg:block hidden'>Login</div>
                        <div className='block lg:hidden'>
                            <LoginIcon />
                        </div>
                    </button>
                    }
                    <div className='pt-1'><SearchIcon /></div>

                    <div><Themetoggle /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
