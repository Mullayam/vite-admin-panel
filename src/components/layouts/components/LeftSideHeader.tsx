import AccountSwitcher from '@/components/shared/account-switcher'
import { Search } from '@/components/shared/search'
import React from 'react'
import HeaderLogo from './HeaderLogo'
import { useLayout } from '@/hooks/useLayout'

const LeftSideHeader = () => {
    const { currentLayout } = useLayout()
    return (
        <React.Fragment>
            <HeaderLogo  {...currentLayout === "root" && { className: "mr-0 md:mr-16" }} />
            <div className="ml-16 hidden md:block">
                <div className="flex items-center px-4">
                    <AccountSwitcher />
                    <Search />
                </div>
            </div>
        </React.Fragment>

    )
}

export default LeftSideHeader