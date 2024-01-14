import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <>
      <footer>
        <div className="footerTop">
          <div className='leftRight'>
            <div className="footerTopLeft">
              <h4>Other Pages</h4>
              <p className='home'>Home</p>
              <p className='gallery'>Gallery</p>
              <p className='shortcodes'>Shortcodes</p>
              <p className='about'>About</p>
              <p className='languages'>Languages</p>
            </div>
            <div className='footerTopRight'>
              <img src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/54/2014/02/colorlib-logo.png" alt="" />
              <p>Awesome and completely free WordPress WooCommerce themes to take your ecommerce website to the next level.</p>
              <p>If you are having problems with theme setup, please feel free to use Colorlib support forum.</p>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className='bottomText'>
            <ul>
              <li>Home</li>
              <li>Gallery</li>
              <li>Shortcodes</li>
              <li>About</li>
              <li>Languages</li>
            </ul>
            <p>Dazzling Demo All rights reserved. Theme by Colorlib Powered by WordPress</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer