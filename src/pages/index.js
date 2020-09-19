import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AIBackground from "../components/backgrounds/ai-bg"
import SignUpCard from '../components/signup'


const IndexPage = () => 
  <Layout>
    <SEO title="Home" />
    <AIBackground className="bg-gradient-to-b from-gray-900 to-transparent">
      <div className="p-5 relative z-10">
        <div className="bg-yellow">
          <h2 className="text-white text-center text-2xl">
            Are you ready to see what the future has in store for you?
          </h2>
        </div>
        <div className="flex justify-center mt-5">
          <SignUpCard />
        </div>
      </div>
    </AIBackground>
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