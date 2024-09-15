// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './index.css';
// import image from './image.png';

// function HomePage() {
//     const navigate = useNavigate(); // useNavigate hook from react-router-dom

//     useEffect(() => {
//         const handleMouseMove = (event) => {
//             const pupils = document.querySelectorAll('.pupil');
//             const eyes = document.querySelectorAll('.eyes');

//             eyes.forEach((eye, index) => {
//                 const eyeRect = eye.getBoundingClientRect();
//                 const eyeCenterX = eyeRect.left + eyeRect.width / 2;
//                 const eyeCenterY = eyeRect.top + eyeRect.height / 2;
//                 const pupil = pupils[index];

//                 const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
//                 const maxOffset = eyeRect.width / 6;
//                 const offsetX = Math.cos(angle) * maxOffset;
//                 const offsetY = Math.sin(angle) * maxOffset;
//                 const finalX = Math.max(-maxOffset, Math.min(maxOffset, offsetX));
//                 const finalY = Math.max(-maxOffset, Math.min(maxOffset, offsetY));

//                 pupil.style.transform = `translate(${finalX}px, ${finalY}px)`;
//             });
//         };

//         const handleClick = () => {
//             const mainface = document.getElementById('mainface');
//             if (mainface) {
//                 mainface.style.transform = 'translateY(-100vh)';
//                 setTimeout(() => {
//                     navigate('/blog'); // Navigate to the blog page after animation
//                 }, 500); // Adjust delay based on the duration of the animation
//             }
//         };

//         document.addEventListener('mousemove', handleMouseMove);
//         const ctaButton = document.getElementById('cta');
//         if (ctaButton) {
//             ctaButton.addEventListener('click', handleClick);
//         }

//         return () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//             if (ctaButton) {
//                 ctaButton.removeEventListener('click', handleClick);
//             }
//         };
//     }, [navigate]);

//     return (
//         <section>
//             <div id="mainface">
//                 <div className="mygraphic">
//                     <div id="leftear" className="ears"></div>
//                     <div id="rightear" className="ears"></div>
//                     <div id="leftside" className="hairs"></div>
//                     <div id="rightside" className="hairs"></div>
//                     <div id="frontside" className="hairs"></div>
//                     <div id="flicks" className="hairs"></div>
//                     <div className="necks"></div>
//                     <div className="face">
//                         <div className="mouth"></div>
//                         <div id="lefteye" className="eyes"></div>
//                         <div id="righteye" className="eyes"></div>
//                         <div id="rightpupil" className="pupil"></div>
//                         <div id="leftpupil" className="pupil"></div>
//                     </div>
//                     <div className="shoulder"></div>
//                 </div>
//             </div>
//             <button id="cta" className="ctabtn">Step Inside</button>
//             <img className='mainimg' src={image} alt='..' />
//         </section>
//     );
// }

// export default HomePage;

import React from 'react';
import './index.css';
import image from './image.png';

function HomePage() {
    return (
        <div className='home'>
            <img className='mainimg' src={image} alt='..' />
            <p className="wlm">Welcome</p>
        </div>
    );
}

export default HomePage;
