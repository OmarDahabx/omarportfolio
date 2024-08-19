import React from 'react';
import omarImg from './assets/omar.jpg';

const About = () => {
  return (
    <div>
      <div className='about' id="about">
        <div className='container abou'>
          <div className='row about-contant'>
            <div className='col-md-6 mt-3 ayoo-img'>
              <img src={omarImg} alt="Omar" className='img-fluid'/>
            </div>
            <div className='col-md-6 mt-5 pt-4 ayoo' id="daroh2">
                <h2 className="ufff">About Me</h2>
                <h5>Developer & <span>Designer</span></h5>
                <p>
                As a dynamic and enthusiastic individual, I thrive on continuous learning and possess an unwavering passion for creating exceptional digital experiences. With over a year of hands-on experience in web design, graphic design, and web development, I bring a unique blend of creativity, technical expertise, and a relentless drive for excellence href every project I undertake.
                <br/><br/>
                <span>Web Development:</span><br/>
                I excel in HTML5, CSS3, JavaScript, and Bootstrap, specializing in crafting visually stunning and responsive websites. From front-end design href seamless back-end integration, I ensure optimal performance and an outstanding user experience.
                <br/><br/>
                <span>Technical Skills:</span><br/>
                HTML5, CSS3, JavaScript, Bootstrap, Adobe Photoshop, Responsive Web Design, UI/UX Design, WordPress, Tailwind, React Js.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;