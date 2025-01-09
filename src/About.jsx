import React from 'react'
import { BsEmojiGrin } from "react-icons/bs";
import './About.css';

function About() {
  return (
    <div className='aboutBack'>
        <h2>About-Me <br/>
        <a>--- <BsEmojiGrin /> ---</a>
        </h2>
        <div className='container'>
            <div className='blocGauche'>
                <img src='./mee.jpg'/>
                
                <h1>Hello,</h1>
                  <p>Je suis RAZAFINDRAKOTO Zely Karen, Etudiante en developpement web</p>
                  <p>
                   " Passionnée par le développement web, je suis motivée à apprendre et à réaliser des projets 
                    qui apportent de la valeur. Chaque jour est une opportunité pour évoluer et relever de nouveaux défis. "
                 </p>

                
            </div>
            <div className='blocDroite'>
               
                
                <h2 style={{marginTop:'5',marginBottom:'0',color:'black'}}> Skils</h2>
                <ol  style={{color:'black'}}>
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS
                  </li>
                  <li>
                    C
                  </li>
                  <li>
                    Un peu de:
                    <ul>
                      <li>
                        JS
                      </li>
                      <li>
                        REaCt
                      </li>
                    </ul> 
                  </li>
                </ol>
               
                

            </div>
        </div>
    </div>
  )
}

export default About