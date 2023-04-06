import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <>
      <footer>
        <span>Created By <Link to="https://about.me/mayankrajparmar">Mayank Raj Parmar</Link> | <span className="far fa-copyright"></span> 2023 All rights reserved.</span>
    </footer>
    </>
  )
}

export default Footer
