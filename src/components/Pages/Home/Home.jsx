import { Link } from 'react-scroll'
import MyPic from '../../../Images/mypic.jpg'

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white pt-24'>
            I'm a Software Engineer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Hello, my name is Neyan Saif and I am a software engineer with 2
            years of experience in web development. Throughout my career, I have
            gained expertise in a variety of technologies, including HTML, CSS,
            Bootstrap, Tailwind, Material UI, React, Node.js, Express, MongoDB,
            and Mongoose.
          </p>
          <div>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit font-bold py-3 px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div className='rounded'>
          <img
            src={MyPic}
            alt='My Profile pic'
            width='500wh'
            className='rounded-2xl mx-auto w2/3'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
