import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AIBackground from "../components/backgrounds/ai-bg"
import SignUpCard from '../components/signup'
import Widget from '../components/widget'


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
            <p>Chronos is an advanced AI that <Link to="#about" className="primaryText to-secondary-text underline">predicts the future</Link>. 
            From stock prices to who will do the half-time show of the next Super Bowl,
            no outcome will be unknown to you.</p>
          </div>
          <SignUpCard className="mx-auto md:mx-0 md:mr-auto"/>
        </div>
      </div>
    </AIBackground>
    <div className="my-4 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Widget title='Get Started' to="" icon='start.png'>
        Whether you're new to AI or an experienced developer, it's easy to learn and use Chronos. 
      </Widget>
      <Widget title='Docs' to="" icon='docs.png'>
        Our in-depth docs will help you bring any of your ideas to life fast.
      </Widget>
      <Widget title='Pricing' to="" icon='price-tag.png'>
        Working solo or on a team? Chronos has different plans to cover all of your developing needs.
      </Widget>
      <Widget title='Jobs' to="" icon='job-search.png'>
        Looking for work or have a Chronos related position that you're trying to hire for? Our community-run job board is the place to go.
      </Widget>
      
    </div>
    <div id="about"> {/* Features */}
      {/* <h1 className="text-center text-3xl">Get started with Chronos</h1>
      <p>Chronos is an AI.</p>
       */}
    </div>
    <div>
      {/* Pricing */}
    </div>
    
  </Layout>


export default IndexPage