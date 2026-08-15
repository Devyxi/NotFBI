import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './index.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Invite from './invite'
import Support from './support'
import About from './about'
import History from './history'
import Roadmap from './roadmap'
import PrivacyPolicy from './privacy'
import TOS from './tos'
import App from './App'
import NotFound from './404'

function WithLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<WithLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TOS />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Route>
        <Route path="/invite" element={<Invite />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)