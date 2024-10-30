import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home, DollarSign, CreditCard, Briefcase, BookOpen } from 'lucide-react'
import Dashboard from './components/Dashboard'
import Budget from './components/Budget'
import CreditCards from './components/CreditCards'
import Investments from './components/Investments'
import Learn from './components/Learn'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <nav className="bg-blue-600 text-white w-64 space-y-6 py-7 px-2">
          <div className="flex items-center space-x-2 px-4">
            <DollarSign size={24} />
            <span className="text-2xl font-extrabold">FinPower</span>
          </div>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="flex items-center space-x-2 py-2 px-4 hover:bg-blue-700 rounded">
                <Home size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/budget" className="flex items-center space-x-2 py-2 px-4 hover:bg-blue-700 rounded">
                <DollarSign size={20} />
                <span>Budget</span>
              </Link>
            </li>
            <li>
              <Link to="/credit-cards" className="flex items-center space-x-2 py-2 px-4 hover:bg-blue-700 rounded">
                <CreditCard size={20} />
                <span>Credit Cards</span>
              </Link>
            </li>
            <li>
              <Link to="/investments" className="flex items-center space-x-2 py-2 px-4 hover:bg-blue-700 rounded">
                <Briefcase size={20} />
                <span>Investments</span>
              </Link>
            </li>
            <li>
              <Link to="/learn" className="flex items-center space-x-2 py-2 px-4 hover:bg-blue-700 rounded">
                <BookOpen size={20} />
                <span>Learn</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <main className="flex-1 p-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App