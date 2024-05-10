import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar'
import { getLoggedInUser } from "@/lib/actions/user.actions"
const Home = async () => {
   const loggedIn = await getLoggedInUser()
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                type="Greeting"
                title="Welcome"
                user={loggedIn?.name}
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