import React from "react"
import Layout from "../Components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>

        <div className={styles.leaves}>
          <img src="/palmSpaLogo.png" alt="palm spa logo" style={{ maxWidth: '50%'}}/>

        <p>  A boutique spa experience on the shores of Lake Taupo </p>
        </div>

        <div class={styles.massageimages}>
            <img src="/oil-massage.png" alt="massage oil" style={{ maxWidth: '100%'}}/>
            <img src="/massage.jpg" alt="massage" style={{ maxWidth: '100%'}} />
            <img src="/hot-stone-massage.png" alt="hot stone massage" style={{ maxWidth: '100%'}}/>
        </div>
      </div>
    </Layout>
  )
}