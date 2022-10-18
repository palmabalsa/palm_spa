import React from 'react'
import Layout from '../Components/Layout'
import * as styles from '../styles/spamenu.module.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />;

export default function spa_menu() {
  return (
    <Layout>
      <div className={styles.background}>
        <div className={styles.container}>
            <h1 className={styles.title}>Spa Menu</h1>
            <div className={styles.massages}>
              <h2>MASSAGES</h2>
              <h3>Massages</h3>
              <p className={styles.info}>Oil massage using swedish techniques for ultimate relaxation</p>
               <p className={styles.price}>
                30 min: $60<br/>
                45 min: $80 <br/>
                60 min: $90 <br/>
                90 min: $120 
                </p> 
              <h3>Hot Stone Massage</h3>
              <p className={styles.info}>Rebalance your mind, body and soul as the hot stones melt away tense muscles, sore joints and bring balance back to your body</p>
              <p className={styles.price}>75 min: $140</p>
            </div>
            <div className={styles.facials}>
              <h2>FACIALS</h2>
              <h3>Petite Facial</h3>
              <p className={styles.info}>A sumptuous pick me up to refresh tired skin using Janesce products
                </p>
              <p className={styles.price}>30 min: $60</p>
              <br />
              <h3>Clarity Facial</h3>
              <p className={styles.info}>
                A luscious facial to replenish & deeply nourish your skin using Janesces products
                
                </p>
              <p className={styles.price}>1 hour: $100</p>
            </div>
            <div className={styles.packages}>
              <h2>PACKAGES</h2>
              <h3>Top to Toe</h3>
              <p className={styles.info}>Foot bath ritual, full body massage with Signature facial, feel fantastically radiant from top to toe</p>
              <p className={styles.price}>2 hours: $200</p>
              <br />
              <h3>Petite Top to Toe</h3>
              <p className={styles.info}>Back, neck & shoulder massage along with a Petite Facial </p>
              <p className={styles.price}>1 hour: $115</p>
              <br />
              <h3>Fassage</h3>
              <p className={styles.info}>A devine body brushing over the back followed with an exfoliating scrub then a back, neck and shoulder massage, combined with a 45 min deep cleansing facial</p>
              <p className={styles.price}>90 min: $150</p>
              <br />
              <h3>Ritual</h3>
              <p className={styles.info}>Devine pamper package commencing with a foot bath ritual, back, neck & shoulder massage followed by our signature facial - leaving your skin glowing.  Deeply hydrating.</p>
              <p className={styles.price}>90 min: $150</p>
            </div>
            <div className={styles.bodytreatments}>
              <h2 className={styles.treatmentTitle}>BODY TREATMENTS</h2>
              <div className={styles.treatment1}>
              <h3>Revitalising Experience</h3>
              <p className={styles.info}>A gentle body brushing over the back, with an exfoliating scrub followed by application of hot mud, wrapped, foot scrub & massage combined with a blissful scalp massage, completed by back neck and shoulder massage.</p>
              <p className={styles.price}>1 hour: $120</p>
              </div>
              <div className={styles.treatment2}>
              <h3>Hot Thermal Mud Wrap</h3>
              <p className={styles.info}>A deeply pampering all over body treatment which incorporates being smothered in hot mud, wrapped & cocooned whilst enjoying a manuka honey facial followed by a full body massage with essential oils leaving your skin silky smooth and hydrated</p>
              <p className={styles.price}>1 hour 45 min: $190</p>
              </div>
              <div className={styles.treatment3}>
              <h3>R n R</h3>
              <p className={styles.info}>Revive and Replenish your senses with a stimulating Body Polishing Wrap. Included is a head massage to d-stress, followed by a full body massage. A great pick me up for your skin. Add on a Petite Facial for $40 extra.</p>
              <p className={styles.price}>1 hour 45 min: $190</p>
              </div>
          </div>
          </div>
          </div>
        
    </Layout>
  )
}