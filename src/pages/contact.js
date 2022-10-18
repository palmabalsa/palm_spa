import React from 'react'
import Layout from '../Components/Layout'
import * as styles from '../styles/contact.module.css'

export default function contact() {
  return (
    <Layout>
    <div className={styles.contact}>
      <div className={styles.contactInfo}> 
        <h1>CONTACT</h1>  
          <p style={{textAlign: 'center'}}> Palm Spa is located at Rainbow Point, Taupo, NZ. <br/>
          Please call, text, or email, to book. <br/>
          We look forward to hearing from you. </p>
       <br/>
          <p>Ph: 027 356 0303 <br/>
          oasis.health.therapies@gmail.com </p>
        </div>
          <div className={styles.hours}>
          <p style={{textAlign:'center', paddingTop: '15px'}}>HOURS: </p>
          <p> Monday: 10.00 - 5.00 </p>
          <p> Tuesday: 10.00 - 5.00 </p>
          <p>Wednesday: 10.00 - 6.00 </p>
          <p>Thursday:  10.00 - 6.00 </p>
          <p>Friday: 10.00 - 5.00 </p>
          </div>
        </div>
    </Layout>
  )
}
