// Wrap this component around app compoennt to apply layout/styles to every page

import React from 'react'
import Nav from './Nav'
import Header from './Header'

import styles from '../styles/Layout.module.css'

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
