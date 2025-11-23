"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from "@/components/pages/welcome"
import CodeGate from "@/components/pages/code-gate"
import Game from "@/components/pages/game"
import Final from "@/components/pages/final"
import Surprise from "@/components/pages/surprise"

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/code" element={<CodeGate />} />
        <Route path="/game" element={<Game />} />
        <Route path="/final" element={<Final />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </Router>
  )
}
