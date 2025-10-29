import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Services from './components/Pages/Services/Services'
import ApplicationDevelopment from './components/Pages/Services/Categories/ApplicationDevelopment'
import Contact from './components/Contact'
import Experience from './components/Experience'
import NavBar from './components/NavBar'
import Portfolio from './components/Pages/Portfolio/Portfolio'
import SocialLinks from './components/SocialLinks'
import Blog from './components/Blog'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
         {/* Parent Services route */}
        <Route path='/services' element={<Services />}>
          {/* Nested sub-routes */}
          <Route path='application-development' element={<ApplicationDevelopment />} />
          {/* Add more sub-pages here */}
        </Route>
        <Route
          path='/portfolio'
          element={<Portfolio />}
        />
        <Route
          path='/experience'
          element={<Experience />}
        />
        <Route
          path='/blog'
          element={<Blog />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
      </Routes>
      <SocialLinks />
    </Router>
  )
}

export default App
