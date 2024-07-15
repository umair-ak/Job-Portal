import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
    {/*Call to action section */}
    <section className='container m-auto pt-40 mb-28'>
    <div className='flex flex-wrap justify-evenly'>
    <div className='mt-5 pt-10 mb-20 content-center flex flex-col'>
    
    <h2 className='text-7xl pb-5'>Job Portal</h2>
    <p className='text-2xl'>One stop solution for your job hunt.</p>
    
    {/*Buttons */}
    <div className='mt-5'>
    <Link to='/signup'>
    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:border-gray-600 dark:hover:text-gray-950 dark:focus:ring-gray-700">Register</button></Link><Link to='/login'><button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Login</button></Link>
    </div>
    
    </div>
    <div>
    <img className='rounded' src='./main.png' />
    </div> 
    </div>
    </section>
    
    {/*Features section */}
    <section className='bg-slate-300 pb-20'>
    <div className='container m-auto text-center'>
    <h2 className='text-7xl p-10 pt-20 '>Features</h2>
    <div className='flex flex-wrap justify-evenly'>

          <div className='flex flex-col items-center text-3xl p-10'>
          <GroupsIcon sx={{fontSize:"7rem"}}/>
          Connect with Others
        </div>

    <div className='flex flex-col items-center text-3xl p-10'>
    <LightbulbIcon sx={{fontSize:"7rem"}}/>
    Get Inspired
    </div>

    <div className='flex flex-col items-center text-3xl p-10'>
    <RocketLaunchIcon sx={{fontSize:"7rem"}}/>
    Increase your Reach
    </div>
    
    </div>
    
    </div>
    </section>
    
    {/*about us section */}
    <section className='container m-auto pt-20 mb-20 min-h-full'>
    <h2 className='text-7xl pb-5 m-5'>About ProBlogger</h2>
    <p className='text-2xl m-3'>
    Welcome to ProBloggers, where words come alive and ideas find their digital home.
    Dive into thought-provoking articles, practical tips, and captivating stories. Whether you’re a seasoned blogger or a curious reader, we’ve got something for you.
    Our team of passionate writers covers diverse topics—travel, lifestyle, tech, wellness, and more. Expect well-researched insights and fresh perspectives.
    We believe in the power of collaboration. Let’s create together! If you’re a guest writer, photographer, or artist, reach out—we’d love to feature your work.
    Explore our articles, drop comments, and follow us on Social Media Links. Let’s embark on this blogging adventure together!
<br/>
Happy reading! 
    </p>

    <Link to='/login'><button type='button' className='m-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:border-gray-600 dark:hover:text-gray-950 dark:focus:ring-gray-700'>Get Started</button></Link>
    </section>
    
    
           
    </div>
  )
}
