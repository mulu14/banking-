import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
   const loggedIn = {firstName : 'Mulugeta'}
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
            </header>
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250}
            />
        </div>
    </section>
  )
}

export default Home