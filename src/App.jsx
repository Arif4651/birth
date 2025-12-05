import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import WelcomePage from './components/WelcomePage'
import WishPage from './components/WishPage'
import PhotoPage from './components/PhotoPage'
import FinalPage from './components/FinalPage'
import img2 from './components/img2.jpeg'
import img3 from './components/img3.jpeg'
import img4 from './components/img4.jpeg'
import img5 from './components/img5.jpeg'
import img6 from './components/img6.jpeg'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [personName, setPersonName] = useState("Maisha Baby") // Change this name
  const [wishMessage, setWishMessage] = useState("HAppy Birthday to youu pakhii tah..May your birthday be filled with endless joy, laughter, and unforgettable moments. You deserve all the happiness in the world!U thought i forgot?? Neverrr.. bolo eta ki hote pare nki?? Assa ebar tahole treat dio.I love you baby tahh,.. Good Night And ghumao") // Custom wish message
  const images = [img2, img3, img4, img5, img6]

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const pages = [
    <WelcomePage key="welcome" />,
    <WishPage key="wish" name={personName} />,
    <PhotoPage key="photo" name={personName} images={images} />,
    <FinalPage key="final" name={personName} message={wishMessage} />
  ]

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {pages[currentPage]}
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      {currentPage > 0 && (
        <motion.button
          className="nav-arrow prev-arrow"
          onClick={prevPage}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>
      )}
      
      {currentPage < 3 && (
        <motion.button
          className="nav-arrow next-arrow"
          onClick={nextPage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.button>
      )}
      
      <div className="page-indicator">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => setCurrentPage(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

export default App
