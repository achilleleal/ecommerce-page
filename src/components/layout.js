import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

const ListLink = props =>
  <li className="inline-block mr-8 duration-300 transform hover:scale-110 hover:secondaryText">
    <Link to={props.to}>{props.children}</Link>
  </li>


const Header = () => 
  <header className="primaryBg flex items-center justify-between"> 
    <div className="py-2 mx-5">
      <Link to="/">
        <h1 className="text-2xl primaryText to-secondary-text title ">Chronos</h1>
      </Link>
    </div>
    <nav className="py-2 text-white">
      <ul className="float-right">
        <ListLink to="#about">About</ListLink>
        <ListLink to="/pricing">Register</ListLink>
        <ListLink to="/signin">Sign In</ListLink>
      </ul>
    </nav>      
  </header>


const Footer = () =>
    <footer className="primaryBg text-white text-center py-2">
      <h3>Made with <span role="img" aria-label="love">❤️</span> by Sebastián Leal, 2020</h3>
      <nav className="flex justify-center my-2">
        <a href="https://github.com/achilleleal/ecommerce-page">
          <Image filename="github-logo.png" className="w-10 duration-300 transform hover:scale-110"/>
        </a>
      </nav>
    </footer>


const Layout = ({ children }) => 
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>


export default Layout