import Image from 'next/image'
import styles from './page.module.css'

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
                
                <div>I am a passionate</div>
                <span id="element"></span>
            
            <div className="buttons">
                <button className="btn">Download Resume</button>
                <button className="btn">Visit Github</button>
            </div>
            </div>
            <div className="rightSection">
                <img src="develop.png" alt=""/>
            </div>
        </section>
        <hr/>
        <section className="secondSection">
            <span className="text-gray">what I have done so far</span>
            <h1>Work Experience</h1>
            <div className="box">

                <div className="vertical">
                    <img className="img-top" src="developer.png" alt=""/>
                    <div className="vertical-title">
                        HTML Developer (2021-2023)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis libero aperiam
                        nobis
                        aliquid minus. Placeat eaque cumque maiores eligendi recusandae obcaecati aspernatur.
                    </div>
                </div>


                <div className="vertical">
                    <img className="img-top" src="developer.png" alt=""/>
                    <div className="vertical-title">
                        Node.js Developer (2021-2023)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis libero aperiam
                        nobis
                        aliquid minus. Placeat eaque cumque maiores eligendi recusandae obcaecati aspernatur.
                    </div>
                </div>

                <div className="vertical">
                    <img className="img-top" src="developer.png" alt=""/>
                    <div className="vertical-title">
                        HTML Developer (2021-2023)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis libero aperiam
                        nobis
                        aliquid minus. Placeat eaque cumque maiores eligendi recusandae obcaecati aspernatur.
                    </div>
                </div>

                <div className="vertical">
                    <img className="img-top" src="developer.png" alt=""/>
                    <div className="vertical-title">
                        HTML Developer (2021-2023)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis libero aperiam
                        nobis
                        aliquid minus. Placeat eaque cumque maiores eligendi recusandae obcaecati aspernatur.
                    </div>
                </div>

                <div className="vertical">
                    <img className="img-top" src="developer.png" alt=""/>
                    <div className="vertical-title">
                        HTML Developer (2021-2023)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis libero aperiam
                        nobis
                        aliquid minus. Placeat eaque cumque maiores eligendi recusandae obcaecati aspernatur.
                    </div>
                </div>

                <div className="vertical">
                    <img className="img-top" src="developer.png" alt=""/>
                    <div className="vertical-title">
                        HTML Developer (2021-2023)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis libero aperiam
                        nobis
                        aliquid minus. Placeat eaque cumque maiores eligendi recusandae obcaecati aspernatur.
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="f4">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
        <div className="footer-rights">
            Copyright &#169; www.ritiksportfolio.com | All Rights Reserved
        </div>
    </footer>

    </>
  )
}
