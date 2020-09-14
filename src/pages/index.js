import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpCard from '../components/signup'


const IndexPage = () => 
  <Layout>
    <SEO title="Home" />
    <div className="secondaryBg p-5">
        <h2 className="text-white text-center text-2xl"> Are you ready to see what the future has in store for you?</h2>
        <div className="flex justify-center mt-5">
            <SignUpCard />
        </div>
    </div>
    
    <div>
      {/* Hero Banner */}
    </div>
    <div>
      {/* Features */}
    </div>
    <div>
      {/* Pricing */}
    </div>
    
  </Layout>


export default IndexPage
