import React from 'react'
import LayoutSidebar from './components/root/Sidebar'

import BackgroundLayer from '../shared/bg-layer'
// import CookiesCard from '../shared/cookiesCard'
import OfferBbanner from '../shared/offer-banner'
import Navbar from './components/root/Navbar'


const RootLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="antialiased bg-transparent">
            <BackgroundLayer />
            <Navbar />
            <LayoutSidebar />
            <main className="p-4 md:ml-64 h-auto pt-20">
                <OfferBbanner />
                {children}
            </main>
            {/* <CookiesCard type='modal' /> */}
        </div>

    )
}

export default RootLayout