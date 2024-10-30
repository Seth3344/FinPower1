import React from 'react'
import { Wallet, TrendingUp, CreditCard, PiggyBank } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to FinPower</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard icon={<Wallet />} title="Total Balance" value="$12,345.67" />
        <DashboardCard icon={<TrendingUp />} title="Monthly Savings" value="$1,234.56" />
        <DashboardCard icon={<CreditCard />} title="Credit Score" value="750" />
        <DashboardCard icon={<PiggyBank />} title="Retirement Savings" value="$98,765.43" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickActionButton text="Set Budget" />
          <QuickActionButton text="Track Expenses" />
          <QuickActionButton text="Invest" />
          <QuickActionButton text="Learn" />
        </div>
      </div>
    </div>
  )
}

const DashboardCard = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
    <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
    <div>
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
)

const QuickActionButton = ({ text }) => (
  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
    {text}
  </button>
)

export default Dashboard