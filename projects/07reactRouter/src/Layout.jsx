import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

/***
 * To fix a layout, having a constant Header and Footer. 
 * So that we don't have to call Header and Footer in every component.
 */
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
