import React from 'react'
import { motion } from 'framer-motion'
import './WishPage.css'

const WishPage = ({ name }) => {
  const text = `Happy Birthday ${name}!`
  const letters = text.split('')

  return (
    <motion.div
      className="page wish-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -1000 }}
      transition={{ duration: 1 }}
    >
      <div className="balloons">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="balloon"
            style={{
              left: `${10 + i * 12}%`,
              background: `hsl(${i * 45}, 100%, 65%)`,
            }}
            initial={{ y: window.innerHeight + 100 }}
            animate={{
              y: [window.innerHeight + 100, -20, 0, -20, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              times: [0, 0.7, 0.8, 0.9, 1],
              ease: "easeOut"
            }}
          >
            <div className="balloon-string" />
          </motion.div>
        ))}
      </div>

      <motion.div className="wish-content">
        <motion.div
          className="birthday-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2 + index * 0.05,
                type: "spring",
                stiffness: 200
              }}
              className={letter === ' ' ? 'space' : ''}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="hearts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="heart"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 30}px`,
              }}
              animate={{
                y: [0, -window.innerHeight - 100],
                x: [0, (Math.random() - 0.5) * 100],
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut"
              }}
            >
              💖
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="sparkle-effect"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1], rotate: 360 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          ✨
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default WishPage
