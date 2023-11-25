import React from 'react'
import { Link } from 'react-router-dom'
import LayoutSidebar from './components/Sidebar'
import LayoutUserDropDown from './components/UserDropDown'
import Apps from './components/Apps'
import Notifications from './components/Notifications'
import AccountSwitcher from '../shared/account-switcher'
import { Search } from '../shared/search'
import { ThemeToggle } from '../theme/theme-toggle'
import BackgroundLayer from '../shared/bg-layer'
import HeaderLogo from './components/HeaderLogo'
import CookiesCard from '../shared/cookiesCard'


const RootLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="antialiased bg-transparent">
            <BackgroundLayer />
            <nav className="bg-transparent border-b border-gray-200 px-4 py-2.5  dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center">
                        <button
                            data-drawer-target="drawer-navigation"
                            data-drawer-toggle="drawer-navigation"
                            aria-controls="drawer-navigation"
                            className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <svg
                                aria-hidden="true"
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Toggle sidebar</span>
                        </button>
                        <HeaderLogo className='mr-16' />
                        <div className="ml-16 hidden md:block">
                            <div className="flex items-center px-4">
                                <AccountSwitcher />
                                <Search />
                                <Link
                                    to="/settings"
                                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden lg:block md:block px-4"
                                >
                                    Settings
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <Notifications />
                        <Apps />
                        <ThemeToggle className="hidden lg:block md:block" />
                        <LayoutUserDropDown />
                    </div>
                </div>
            </nav>

            <LayoutSidebar />
            <main className="p-4 md:ml-64 h-auto pt-20">
                {children}
            </main>
            <CookiesCard type='modal'/>
        </div>

    )
}

export default RootLayout