import * as React from "react"
import Layout from '../components/layout'
import showcasePhoto from '../images/statelyHomes/LINDA_006-1.jpg'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div class="showcase">
          <img src={showcasePhoto} alt="Linda Benson Showcase" />
      </div>
    </Layout>
  )
}

export default IndexPage
