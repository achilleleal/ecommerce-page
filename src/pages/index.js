import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AIBackground from "../components/backgrounds/ai-bg"
import SignUpCard from '../components/signup'


const IndexPage = () => 
  <Layout>
    <SEO title="Home" />
    <AIBackground className="text-white bg-gradient-to-b from-black to-transparent">
      <div className="p-5 relative z-10">
        <div className="bg-yellow">
          <h2 className="text-center text-5xl">
            <span className="secondaryText">The future,</span> right on your hands
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-5">
          <div className="
          text-center md:text-left break-words 
          w-full  md:w-3/5
          mx-auto mb-5 
          text-xl md:text-2xl xl:text-3xl
          ">
            <p>Chronos is an advanced AI that <Link to="#about" className="underline duration-200 hover:text-blue-300" >predicts the future</Link>. 
            From stock prices to who will do the half-time show of the next Super Bowl,
            no outcome will be unknown to you.</p>
          </div>
          <SignUpCard className="mx-auto md:mx-0 md:mr-auto"/>
        </div>
      </div>
    </AIBackground>
    <div id="about">
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