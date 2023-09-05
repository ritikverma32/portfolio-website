import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>  
      <header>
        <nav>
            <div className="left">Ritik's portfolio</div>
            <div className="right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section className="first">
            <div className="leftSection">
                
                <div>Hi! My name is <span className="purple">Ritik Verma.</span></div>
                
                <div>I am a passionate Frontend Developer.</div>
                <span id="element"></span>
            
            <div className="buttons">
                <button className="btn">Download Resume</button>
                <a href='https://github.com/ritikverma32'>
                <button className="btn" >Visit Github</button>
                </a>
            </div>
            </div>
            <div className="rightSection">
                <img src="develop.png" alt=""/>
            </div>
        </section>
        <hr/>
        <section className="secondSection">
            <span className="text-gray">Projects I have done so far</span>
            <h1>Work Experience</h1>
            <div className="box">

                <div className="vertical">
                  
                    <img className="img-top" src="myntra.png" alt=""/>
                    
                    <a href='https://silly-douhua-fbdf31.netlify.app/'>
                    <div className="vertical-title">
                        Myntra clone
                    </div>
                    </a>
                    <div className="vertical-desc">
                    Made Homepage of myntra site using HTML and CSS.
                    </div>
                </div>


                <div className="vertical">
                    <img className="img-top" src="paneer.png" alt=""/>
                    <a href='https://www.figma.com/file/1uIDnvnOy0tBMxwb2cNNV6/Food-app-2.O?type=design&mode=design&t=48NHaOFu63MmxSa6-0'>
                    <div className="vertical-title">
                        
                    Food app UI     
                    </div>
                    </a>
                    <div className="vertical-desc">
                    Designed user interface for an food app.
                    </div>
                </div>

                <div className="vertical">
                    <img className="img-top" src="logo512.png" alt=""/>
                    <div className="vertical-title">
                    Todos list
                    </div>
                    <div className="vertical-desc">
                    A simple Todos list using html, css, react and jsx
                    </div>
                </div>

                <div className="vertical">
                    <img className="img-top" src="flipkart.png" alt=""/>
                    <a href='https://quiet-narwhal-a1621e.netlify.app/'>
                    <div className="vertical-title">
                        Flipkart homepage
                    </div>
                    </a>
                    <div className="vertical-desc">
                    
                        I have tried to copy the homepage of flipkart with the help of pure html and css.
                    </div>
                </div>

                <div className="vertical">
                    <img className="img-top" src="logo.png" alt=""/>
                    <a href='https://deft-faun-5cbef2.netlify.app/'>
                    <div className="vertical-title">
                    spotify clone
                    </div>
                    </a>
                    <div className="vertical-desc">
                    Homepage of a music player site
                    </div>
                </div>

                <div className="vertical">
                    <img className="img-top" src="developer.png" alt=""/>
                    <a href='https://ritiksportfolio.netlify.app/'>
                    <div className="vertical-title">
                        Portfolio-site
                    </div>
                    </a>
                    <div className="vertical-desc">
                        I have created my personal portfolio website using HTML, CSS and Next.js .
                    </div>
                </div>




            </div>
        </section>

    </main>

    <footer>
        <div className="footer">
            <div className="f1">
                <h3>Ritik's Portfolio</h3>
            </div>
            <div className="f2">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="f3">
                <ul>
                    <li>Sitemap</li>
                    <li>Important Links</li>
                    <li>Chat with us</li>
                    
                </ul>
            </div>
            {/* <div className="f4">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div> */}
        </div>
        <div className="footer-rights">
            Copyright &#169; www.ritiksportfolio.com | All Rights Reserved
        </div>
    </footer>

    </>
  )
}
