import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from 'gatsby'
import Particles from "react-particles-js"

const particleParams = {
  "particles": {
      "number": {
          "value": 300,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      }
  }
}

const AIBackground = ({ className, children }) => (
    <StaticQuery
      query={graphql`
        query {
          ai: file(relativePath: { eq: "ai.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.ai.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <div className={className}>
            <Particles params={particleParams} className="particles"/>
            {children}
            </div>
          </BackgroundImage>
        )
      }}
    />
  )

export default AIBackground