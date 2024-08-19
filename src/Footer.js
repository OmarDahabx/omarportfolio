import React from 'react';
import { NavLink } from 'react-router-dom';

 const Footerr = ()=> {
  return (
    <div>
        <hr className='hr-between'/>
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center linko-text'>
                        <h1>OMAR ESSAM</h1>
                    </div>

                    <div className='col-md-12 linko text-center'>
                        <NavLink href="https://www.facebook.com/omar.aboeldahab.92" className="lin"><i className="fa-brands fa-facebook-f"></i></NavLink>
                        <NavLink href="https://instagram.com/omardahab_" className="lin"><i className="fa-brands fa-instagram"></i></NavLink>
                        <NavLink href="https://api.whatsapp.com/send?phone=+201154251414&text=Hi%20Omar"><i className="fa-brands fa-whatsapp"></i></NavLink>
                        <NavLink href="https://x.com/omardahab_" className="lin"><i className="fa-brands fa-twitter"></i></NavLink>
                        <NavLink href="https://www.linkedin.com/in/omardahab/" className="lin"><i className="fa-brands fa-linkedin"></i></NavLink>
                        <NavLink href="https://github.com/OmarDahabx" className="lin"><i className="fa-brands fa-github"></i></NavLink>
                    </div>

                    <div className='col-md-12 endoffooter'>
                        <h5>© 2024 <span>Omar Essam</span>. some rights reserved</h5>
                    </div>

                </div>
            </div>
        </footer>
    </div>
  )
}
export default Footerr;