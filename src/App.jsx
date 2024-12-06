import React from 'react'
import './App.css'
import './assets/css/xsmall.css'
import './assets/css/small.css'
import './assets/css/medium.css'
import './assets/css/large.css'
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import Ashva from './pages/Ashva'
import Adbhut from './pages/Adbhut'
import Arav from './pages/Arav'
import TestCentre from './pages/TestCentre'
import Footer from './components/Footer'
import TeamFacilities from './pages/TeamFacilities'
import OurStory from './pages/OurStory'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import SalesIQ from  './components/SalesIQ'
import PartsServices from './pages/PartsServices'
import DealerOppor from './pages/DealerOppor'
import Ashva6x6 from './pages/Ashva6x6'
import Terms from './pages/Terms'
import Equal_opportunities from './pages/Equal_opportunities'
import Warranty_policy from './pages/Warranty_policy'

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path='/' element={<Homepage />} />
        <Route path='ashva' element={<Ashva />} />
        <Route path='ashva_6x6' element={ <Ashva6x6 /> } />
        <Route path='adbhut' element={<Adbhut />} />
        <Route path='arav' element={<Arav />} />
        <Route path='test-centre' element={<TestCentre />} />
        <Route path='our-story' element={<OurStory />} />
        <Route path='team' element={<TeamFacilities />} />
        <Route path='contact' element={<Contact />} />
        <Route path='parts_services' element={<PartsServices />} />
        <Route path='dealership_opportunity' element={<DealerOppor />} />
        <Route path='terms' element={<Terms />} />
        <Route path='equal_opportunities' element={<Equal_opportunities />} />
        <Route path='warranty_policy' element={<Warranty_policy />} />
      </Routes>
      <SalesIQ />
      <Footer />
    </React.Fragment>
  )
}

export default App
