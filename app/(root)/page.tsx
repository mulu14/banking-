import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar'
const Home = () => {
   const loggedIn = {firstName : 'Tumsido', lastName: 'Homacho', email: "bank@testo"}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                type="Greeting"
                title="Welcome"
                user={'Mulugeta' || 'Guest'}
                subtext="Access and mange your account and transactions efficiently."
                />
                <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250}
            />
            </header>
        </div>
        <RightSidebar
            user = {loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.00}, {currentBalance: 500}]}
          />
    </section>
  )
}

export default Home