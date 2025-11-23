"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingHeart {
  id: number
  left: number
  duration: number
  delay: number
}

export default function FloatingHearts({ count = 10 }) {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    const newHearts = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
    }))
    setHearts(newHearts)
  }, [count])

  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "100vh", x: 0, opacity: 0 }}
          animate={{
            y: "-100vh",
            x: (Math.random() - 0.5) * 100,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "easeInOut",
          }}
          className="fixed pointer-events-none text-2xl md:text-4xl"
          style={{ left: `${heart.left}%` }}
        >
          💕
        </motion.div>
      ))}
    </>
  )
}
