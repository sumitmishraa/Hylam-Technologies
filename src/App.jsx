import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home     from './pages/Home'
import Services from './pages/Services'
import About    from './pages/About'
import WhyUs    from './pages/WhyUs'
import Contact  from './pages/Contact'

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: 72 }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/services" element={<Services />} />
          <Route path="/about"    element={<About />}    />
          <Route path="/why-us"   element={<WhyUs />}    />
          <Route path="/contact"  element={<Contact />}  />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
