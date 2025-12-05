import React from 'react'
import { motion } from 'framer-motion'
import './PhotoPage.css'

const PhotoPage = ({ name, images }) => {
  return (
    <motion.div
      className="page photo-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="photo-background"
        style={{ backgroundImage: `url(${images[0]})` }}
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />

      <div className="photo-overlay" />

      <motion.div
        className="photo-content"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Main Photo Frame */}
        <motion.div
          className="photo-frame main-frame"
          initial={{ rotate: -5, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            delay: 1,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          <motion.div
            className="frame-inner"
            style={{ backgroundImage: `url(${images[0]})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="frame-border" />
        </motion.div>

        {/* Additional Photo Frames - Animated Gallery */}
        <div className="photo-gallery">
          {images.slice(1).map((img, index) => {
            // Position calculations for better layout
            const positions = [
              { left: '8%', top: '12%' },
              { left: '78%', top: '18%' },
              { left: '12%', top: '65%' },
              { left: '75%', top: '68%' }
            ];
            
            return (
              <motion.div
                key={index}
                className="photo-frame gallery-frame"
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  rotate: (index % 2 === 0 ? -180 : 180)
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: [(index % 2 === 0 ? -10 : 10), 0]
                }}
                transition={{
                  delay: 1.5 + (index * 0.3),
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                }}
                whileHover={{ 
                  scale: 1.15,
                  rotate: (index % 2 === 0 ? -5 : 5),
                  zIndex: 100,
                  transition: { duration: 0.3 }
                }}
                style={{
                  left: positions[index]?.left || '50%',
                  top: positions[index]?.top || '50%',
                }}
              >
                <motion.div
                  className="frame-inner"
                  style={{ backgroundImage: `url(${img})` }}
                />
                <div className="frame-border" />
              </motion.div>
            );
          })}
        </div>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="photo-caption"
        >
          Making Memories with {name}
        </motion.h2>

        <motion.div
          className="floating-emojis"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {['🎉', '🎈', '🎁', '🌟', '💝', '🎊'].map((emoji, i) => (
            <motion.div
              key={i}
              className="floating-emoji"
              style={{
                left: `${15 + i * 14}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="sparkles"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            ✨
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default PhotoPage
