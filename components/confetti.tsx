"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Confetto {
  id: number
  left: number
  delay: number
  duration: number
  color: string
}

export default function Confetti() {
  const [confetti, setConfetti] = useState<Confetto[]>([])

  useEffect(() => {
    const colors = ["bg-pink-400", "bg-purple-400", "bg-blue-400", "bg-rose-400"]
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 2 + Math.random() * 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setConfetti(newConfetti)
  }, [])

  return (
    <>
      {confetti.map((conf) => (
        <motion.div
          key={conf.id}
          initial={{ y: -10, opacity: 1, rotate: 0 }}
          animate={{ y: "100vh", opacity: 0, rotate: 360 }}
          transition={{
            duration: conf.duration,
            delay: conf.delay,
            ease: "easeIn",
          }}
          className={`fixed w-2 h-2 rounded-full pointer-events-none ${conf.color}`}
          style={{ left: `${conf.left}%` }}
        />
      ))}
    </>
  )
}
