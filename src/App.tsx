import './App.css'
import Home from './pages/Home/Home'
import Demo from './pages/Demo/Demo'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home name="Home" />} />
          <Route path="/demo" element={<Demo name="Demo" />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
