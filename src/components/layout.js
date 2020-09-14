import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ListLink = props =>
  <li className="inline-block mr-8 duration-300 transform hover:scale-110 hover:secondaryText">
    <Link to={props.to}>{props.children}</Link>
  </li>

const Header = () => 
  <header className="primaryBg flex items-center justify-between"> 
    <div className="py-2 mx-5">
      <Link to="/">
        <h1 className="text-2xl primaryText title">Chronos</h1>
      </Link>
    </div>
    <div className="py-2 text-white">
      <ul className="float-right">
        <ListLink to="#about">About</ListLink>
        <ListLink to="/pricing">Register</ListLink>
        <ListLink to="/signin">Sign In</ListLink>
      </ul>
    </div>      
  </header>

const Footer = () =>{

  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github-logo.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return(
    <footer className="primaryBg text-white text-center py-2">
      <h3>Made with <span role="img" aria-label="love">❤️</span> by Sebastián Leal, 2020</h3>
      <a href="https://github.com/achilleleal/ecommerce-page">
        <Img fixed={data.github.childImageSharp.fixed} className="duration-300 transform hover:scale-110"/>
      </a>
    </footer>
  )
}


const Layout = ({ children }) => 
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>

export default Layout