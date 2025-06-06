import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Lookbook from './components/Lookbook'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lookbook />} />
        <Route path="/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
