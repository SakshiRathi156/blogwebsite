import React from 'react';
import { ReactTyped as Typed } from 'react-typed';


function About(){
    return(
        <div>
        <div className='aboutcontent'>
            <h3>
                Hello, It's Me
            </h3>
            <h1 className='aboutname'>
                Sakshi Rathi
            </h1>
            <h3>
                And I'm a <span className='multiple'>
                <Typed
                            strings={['Full Stack Developer', 'UI/UX Designer', 'Programmer','Blogger']}
                            typeSpeed={50}
                            backSpeed={30}
                            loop
                        />
                </span>
            </h3>
            <p className='paragraph'>I find solace in sharing my thoughts through my blog, hoping to uplift others along the way. 
                <br></br>If you need a reminder that everything is going to be okay, you've found the right place. 
                <br></br>Let's navigate things together.</p>
        </div>
        <div className='socialmedia'>
        <a href='https://www.linkedin.com/in/sakshirathi156/' target='_blank' rel="noopener noreferrer"><i class='bx bxl-linkedin' ></i></a>
         <a href='https://www.instagram.com/sakshi.designhub/' target='_blank' rel='noopener noreferrer'><i class='bx bxl-instagram' ></i></a>
         <a href='mailto:sakshi.rathi2023@vitstudent.ac.in' target='_blank' rel='noopener noreferrer'><i class='bx bxl-gmail' ></i></a>
        </div>
        </div>
    );
}
export default About;