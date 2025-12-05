import React from 'react'
import { motion } from 'framer-motion'
import './FinalPage.css'

const FinalPage = ({ name, message }) => {
  return (
    <motion.div
      className="page final-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="gradient-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      <motion.div
        className="final-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="gift-box"
          initial={{ y: -100, rotate: -180 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{
            delay: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          🎁
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="final-heading"
        >
          Dear {name},
        </motion.h1>

        <motion.div
          className="message-card"
          initial={{ y: 100, opacity: 0, rotateX: 90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p
            className="wish-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {message}
          </motion.p>

          <motion.div
            className="signature"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 }}
          >
            <p>With love & best wishes,</p>
            <p className="signature-name">Always in your heart 💕</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="celebration-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
        >
          {['🎊', '🎉', '🎈', '🎂', '🌟', '💖', '🎁', '✨'].map((icon, i) => (
            <motion.div
              key={i}
              className="celebration-icon"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="floating-particles"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * -50, (Math.random() - 0.5) * 50],
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default FinalPage
