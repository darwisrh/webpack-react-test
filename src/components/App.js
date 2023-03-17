import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Components
import Home from './Home'
import DynamicPage from './DynamicPage'
import NoMatch from './NoMatch'

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dynamic' element={<DynamicPage />} />
            <Route path='/*' element={<NoMatch />} />
         </Routes>
      </Router>
   )
}

export default App