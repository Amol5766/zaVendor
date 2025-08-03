import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Landing from './pages/Landing'
import AddVendor from './pages/AddVendor'
import EditVendor from './pages/EditVendor'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'


const App = () => {

  return (
    <>
    <CustomCursor/>
      <Router>
        <ToastContainer />
        <Routes>

          <Route path="/" element={<Landing />} />

          <Route element={<Navbar/>}>
            <Route path="/AddVendor" element={<AddVendor />} />
            <Route path="/EditVendor" element={<EditVendor />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App