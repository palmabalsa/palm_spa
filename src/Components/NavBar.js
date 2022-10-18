import { Link } from 'gatsby'
import React, {useState, useEffect} from 'react'
import * as styles from '../styles/navbar.module.css'

export default function NavBar() {
  return (
    <nav>
       <img src="/palmSpaLogo.png" alt="palm spa logo" className={styles.palmLogo}/>
        <div className={styles.hamburgerbutton }>
          <Link to="#">
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </Link>
        </div>

          <div className={styles.links}>
              <Link to="/">Home</Link>
              <Link to="/spa_menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
          </div>
    </nav>
  )
}

