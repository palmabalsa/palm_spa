import React from 'react'
import Layout from '../Components/Layout'
import * as styles from '../styles/about.module.css'

export default function about() {
  return (
    <Layout>
        <div className={styles.about}>
            <div className={styles.grid}>
              <div className={styles.text}>
                <h3 style={{ textAlign: 'center'}}>Palm Spa offers a unique relaxation experience</h3>

                <p style={{fontFamily: 'Noto Sans, sans-serif', fontSize: '0.8em'}}>Specialising in relaxation, our treatments are created to involve your 5 senses to help you deeply unwind.
                  <br/>
                Massage at Palm Spa combines a variety of relaxation and deep tissue techniques, tailored to suit your individual needs. 
                We use organic oils and the power of massage to relax the body and encourage your bodys own natural healing abilities.
                <br/>
                For our facials, we use Janesce and Verite skincare. These products are made using only natural and organic ingredients, using the power of plants to gently replenish and restore your skin.
                <br/><br/>
                Our treatments are a great way to take a restorative break for yourself and restore a sense of wellbeing. 
                Relax your body, calm your mind, and continue about your life with energy and vitality.<br/>
                Our treatments also make the perfect gift.
                <br/><br/>
                Please arrive 5-10 minutes early for a quick consult so we can ensure we meet your needs and make the most of your session.
                </p>

              </div>
              <div className={styles.image}>
                <img src="/oil-massage.png" alt="massage oil" />
              </div>
            </div>
        </div>
    </Layout>
  )
}
