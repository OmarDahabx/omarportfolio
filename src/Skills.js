import React from 'react'
import './App.css';


 const Skills = ()=> {
  return (
    <div>
        <hr className='hr-between'/>
        <div className='skills-sec' id="skills">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h2>Skills</h2>
                    </div>
                </div>

                <div className='all-skills row'>
                    <div className="col-md-12">
                        <div className="row youh">
                            <div className='skills col-md-4'> <span>HTML & HTML5</span>  <span><i className="fab fa-html5 html-icon"></i></span> </div>
                            <div className='skills col-md-4'> <span>CSS & CSS3</span>  <span><i className="fa-brands fa-css3-alt css-icon"></i></span> </div>
                            <div className='skills col-md-4'> <span>JAVASCRIPT</span>  <span><i className="fa-brands fa-node js-icon"></i></span> </div>
                            <div className='skills col-md-4'> <span>BOOTSTRAB</span>  <span><i className="fa-brands fa-bootstrap boots-icon"></i></span> </div>
                            <div className='skills col-md-4'> <span>React</span>  <span><i className="fa-brands fa-react react-icon"></i></span> </div>
                            <div className='skills col-md-4'> <span>GitHub</span>  <span><i className="fa-brands fa-github github-icon"></i></span> </div>
                            </div>
                            </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Skills;