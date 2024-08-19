import React from "react";
import mess from './assets/mess.json';
import Lottie from "lottie-react";
const Contact = () => {
  return (
    <div>
      <hr className="hr-between"/>
      <div className="contact-sec" id="contact">
        <div className="container con-spc">
            <div className="contact-text">
          <h2>
            <span>
              <i className="fa-regular fa-envelope"></i>
            </span>
            Contact us.
          </h2>
          <p>
            Contact us for more information and Get notified when I publish
            something new.
          </p>
          </div>

          <div className="row main-contact">
            <div className="col-md-6">
                <form>
                    <label for="mail">Emaill Adress : 
                    <input type="mail" name="mail" placeholder="Emaill Adress"></input>
                    </label>
                    
                    <label for="message">Your message : 
                    <textarea placeholder="Message"></textarea>
                    </label>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="col-md-6">
              <Lottie animationData={mess}/>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
