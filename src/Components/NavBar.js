import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/navbar.module.css'

export default function NavBar() {
  return (
    <nav>
      <div className={styles.palmLogo}>
      <img src="/palm_logo_24_.png" alt="palm spa logo"/>

      </div>
        {/* <div className={styles.hamburgerbutton }>
          <Link to="#">
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </Link>
        </div> */}

          <div className={styles.links}>
              <Link to="/">Home</Link>
              <Link to="/spa_menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Book</Link>
          </div>
    </nav>
  )
}

