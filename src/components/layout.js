import * as React from 'react'
import Header from './header.js'
import Footer from './footer.js'
import './layout.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="main-container">
      <Header page={pageTitle} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout
