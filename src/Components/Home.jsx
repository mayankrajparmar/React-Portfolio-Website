import React from 'react'
import Navbar from './Navbar';
import "./Home.css"
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from 'react-router-dom';

function Home() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "Programmer.",
      "Software Engineer.",
      "Freelancer.",
    ],
    loop: true,
    typeSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <>
    <Navbar/>
      <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Mayank Raj Parmar</div>
                <div className="text-3">And I'm a <span className="typing">{text}</span>
                <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#a600ffcd"
              /></div>
                <div className='social-media'>
                  <Link to="https://github.com/mayankrajparmar"><i className='bx bxl-github' ></i></Link>
                  <Link to="https://www.instagram.com/codewithmayank/"><i className='bx bxl-instagram-alt'></i></Link>
                  <Link to="https://www.linkedin.com/in/mayank-raj-parmar/"><i className='bx bxl-linkedin' ></i></Link>
                  <Link to="https://twitter.com/imayankparmar"><i className='bx bxl-twitter' ></i></Link>
                </div>
            </div>
        </div>
    </section>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home
