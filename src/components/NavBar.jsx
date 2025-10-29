import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const Links = [
    { id: 1, link: '/', name: 'Home' },
    { id: 2, link: '/about', name: 'About' },
    {
      id: 3,
      link: '/services',
      name: 'Services',
      subLinks: [
        {
          name: 'Application Development',
          link: '/services/application-development',
        },
        { name: 'Web Design', link: '/services/web-design' },
        { name: 'AI Integration', link: '/services/ai-integration' },
      ],
    },
    { id: 4, link: '/portfolio', name: 'Portfolio' },
    { id: 5, link: '/experience', name: 'Experience' },
    { id: 6, link: '/blog', name: 'Blog' },
    { id: 7, link: '/contact', name: 'Contact' },
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>AiCode Labs</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {Links.map(({ id, link, name, subLinks }) => (
          <li
            key={id}
            className='relative px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-white duration-200'
            onMouseEnter={() => setActiveDropdown(id)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {!subLinks ? (
              <Link to={link}>{name}</Link>
            ) : (
              <>
                <span>{name}</span>
                {activeDropdown === id && (
                  <ul className='absolute top-4 left-0 bg-black text-gray-300 shadow-lg rounded mt-2 w-56 border border-gray-800'>
                    {subLinks.map((sub, index) => (
                      <li
                        key={index}
                        className='px-4 py-2 hover:bg-gray-800'
                      >
                        <Link to={sub.link}>{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden'>
          {Links.map(({ id, link, name, subLinks }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl relative'
            >
              {!subLinks ? (
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                >
                  {name}
                </Link>
              ) : (
                <>
                  <span
                    onClick={() =>
                      setActiveDropdown(activeDropdown === id ? null : id)
                    }
                  >
                    {name}
                  </span>
                  {activeDropdown === id && (
                    <ul className='flex flex-col mt-2 ml-4'>
                      {subLinks.map((sub, index) => (
                        <li
                          key={index}
                          className='py-2 text-2xl'
                        >
                          <Link
                            onClick={() => setNav(false)}
                            to={sub.link}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar
