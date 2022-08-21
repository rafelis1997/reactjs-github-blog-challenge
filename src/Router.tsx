import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

import { AnimatePresence } from 'framer-motion'

export function Router() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:issueNumber" element={<Post />} />
      </Routes>
    </AnimatePresence>
  )
}
