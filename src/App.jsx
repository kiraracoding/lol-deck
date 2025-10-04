import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react'
import NavBar from './components/NavBar.jsx';
import MyChampionsPage from './pages/MyChampionsPage.jsx';
import AllChampionsPage from './pages/AllChampionsPage.jsx';
import ByRolePage from './pages/ByRolePage.jsx';
import ByTagPage from './pages/ByTagPage.jsx';
import ByDifficultyPage from './pages/ByDifficultyPage.jsx';


function AppWithRouter() {

  return(
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MyChampionsPage/>} />
        <Route path="/all" element={<AllChampionsPage/>} />
        <Route path="/by-role" element={<ByRolePage/>} />
        <Route path="/by-tag" element={<ByTagPage/>} />
        <Route path="/by-difficulty" element={<ByDifficultyPage/>} />
      </Routes>
    </>
  );
}

function App() {

  return (
    <>
      <Router>
        <AppWithRouter/>
      </Router>
    </>
  )
}

export default App
