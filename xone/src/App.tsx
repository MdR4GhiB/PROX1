import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Importing pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'

// Importing auth page
import Login from './auth/Login'
import Signup from './auth/Signup'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Pages Route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />

          {/* Auth Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

          {/* 404 page not found */}
          {/* <Route path="*" element={<h1>404 Page Not Found</h1>} /> */}
      </BrowserRouter>
    </>
  )
}

export default App
