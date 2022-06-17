import * as React from 'react'
import Header from './header.js'
import Footer from './footer.js'

const Layout = ({ pageTitle, children }) => {
  return (
    <div class="main-container">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout
