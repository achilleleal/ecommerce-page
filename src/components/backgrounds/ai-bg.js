import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from 'gatsby'

const AIBackground = ({ className, children}) => (
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
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            {children}
          </BackgroundImage>
        )
      }}
    />
  )

export default AIBackground