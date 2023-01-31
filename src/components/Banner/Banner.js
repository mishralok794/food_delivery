import React from 'react'
import './banner.css'

function Banner() {
  return (
    <div className='parent-banner'>
    
    
    <div className='child-banner'>
    <div className='banner-content'>
    <h3>Hello Family</h3>
    <p> Get Free Discount At Every <spam>'$&nbsp;20'</spam> Purchase</p>
   <a href='/'>  <button  className='banner-button'>Learn More</button>  </a> 
    </div>
    <img className='dilevery-img' src='https://firebasestorage.googleapis.com/v0/b/blog-cf1e3.appspot.com/o/foodDilevery%2Ffood_dil.png?alt=media&token=ce433dc9-5606-483a-9764-00c807c55d51' alt='/'/>
    </div>
    
    
    </div>
  )
}

export default Banner