import React from 'react'
import './items.css'
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function Items() {

     let item=new Array(20).fill(10)
   

     return (
          <div className='parent-items'>

               <div className='category-all-item'>
                    <h4>Menu Category</h4>
                    <p>View All &nbsp; <li className='category-all-item-li'><DoubleArrowRoundedIcon /></li></p>
               </div>

               <div className='child-items'>
            {
               item.map((d)=>{

               return   (<div className='Items-first-row'>
                         <img className='first-row-item-img' src='https://static.vecteezy.com/system/resources/previews/008/507/708/original/classic-cheeseburger-with-beef-patty-pickles-cheese-tomato-onion-lettuce-and-ketchup-mustard-free-png.png' alt='/' />
                         <h4>Burger</h4>
                         <li><ChevronRightRoundedIcon /></li>
                    </div>)
               })
          }
               </div>

          </div>
     )
}

export default Items