import React from 'react'

const HomeLand = ()=> {
  return (
    <div>
        <div className='Land' id="land">
          <div className='container lano'>
            <div className='row don'>
                <div className='col-md-6 contantt'>
                <h4>Hey, my name is</h4>
                <h1>Omar<span>Essam</span></h1>
                <h3>I'am a Web Developer.</h3>

                <div className='sendme-lett'>
                  <form>
                    <input type='mail' name='mail' placeholder='Enter Your Email'></input>
                    <input type='submit' name='submit' value="Send"></input>
                  </form>
                </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default HomeLand;