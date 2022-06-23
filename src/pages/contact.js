import * as React from "react"
import Layout from '../components/layout'
import contactPic from '../images/portfolio/rumsonTv/tv_room_1.jpg'
import pagoda from '../images/contact/LindaBensonContactsPagoda.png'

const Contact = () => {

  return (
    <Layout pageTitle="contact">

    <div class="contact-container">

      <div id="contactInfo">
          <h2>Contact Information</h2>
          <p>Linda Benson Interiors<br/>39 Bissel Road<br/>Lebanon, NJ, 08833</p>
          <div id="pagoda"><img src={pagoda} alt="Linda Benson Interiors Logo"/></div>
          <p>Email: <a href="mailto:Linda@lindabensoninteriors.com">Linda@lindabensoninteriors.com</a>  </p>
      </div>

      <div id="contactPic">
        <img src={contactPic} alt="Linda's Work"/>
      </div>
  </div>

    </Layout>
  )
}

export default Contact
