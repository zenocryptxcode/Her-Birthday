"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface HeartPopperProps {
  id: number
  x: number
  y: number
  onPop: (id: number) => void
}

export default function HeartPopper({ id, x, y, onPop }: HeartPopperProps) {
  const [popped, setPopped] = useState(false)

  const handleClick = () => {
    setPopped(true)
    setTimeout(() => onPop(id), 300)
  }

  if (popped) {
    return (
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute"
        style={{ left: `${x}%`, top: `${y}%` }}
      >
        <div className="text-4xl">💥</div>
      </motion.div>
    )
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        y: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
      }}
      className="absolute text-5xl md:text-6xl cursor-pointer"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      💗
    </motion.button>
  )
}
