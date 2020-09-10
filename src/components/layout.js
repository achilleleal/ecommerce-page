import React from "react"
import { Link } from "gatsby"

const Header = () => 
  <header className="primaryBg text-white"> 
    <div className="text-center py-2">
      <h1 className="text-5xl text-green-400">Clothes Mart</h1>
    </div>
    <div className="secondaryBg flex justify-around py-2 text-green-300">
      <Link to="/" className="link">Home</Link>
      <Link to="/" className="link">About</Link>
      <Link to="/" className="link">Contact</Link>
    </div>      
  </header>

const Footer = () =>
  <footer className="primaryBg text-white py-2">
    <div className="text-center">
      <h3>Made with ❤️ by Sebastián Leal, 2020</h3>
    </div>
  </footer>


const Layout = ({ children }) => 
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>



export default Layout
