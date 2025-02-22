import React from 'react'
import logo from '../assets/Logo.svg'
import { FaFacebook, FaGithub, FaInstagram, FaLink, FaLinkedin, FaSquare } from 'react-icons/fa'
import { FaSquareXTwitter, FaX } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home' >
            <img src={logo} className='mx-2'width={50} height={33} alt='Logo' />
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/yasith-rashan-a44b54295/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
                <FaLinkedin />
            </a>

            <a href='https://www.linkedin.com/in/yasith-rashan-a44b54295/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/yasith-rashan-a44b54295/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'>
                <FaInstagram />
            </a>

            <a href='https://www.linkedin.com/in/yasith-rashan-a44b54295/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'>
                <FaFacebook />
            </a>

            <a href='https://www.linkedin.com/in/yasith-rashan-a44b54295/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'>
                <FaSquareXTwitter />
            </a>

        </div>
        
    </div>
  )
}

export default Navbar