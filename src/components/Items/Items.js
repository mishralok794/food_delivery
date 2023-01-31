import React from 'react'
import './items.css'
import { useState } from 'react';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Rating from '@mui/material/Rating';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

function Items() {
     let [value, setValue] = useState()
     let item = new Array(20).fill(10)


     return (
          <div className='parent-items'>

               <div className='category-all-item'>
                    <h4>Menu Category</h4>
                    <p>View All &nbsp; <li className='category-all-item-li'><DoubleArrowRoundedIcon /></li></p>
               </div>

               <div className='child-items'>
                    {
                         item.map((d) => {

                              return (<div className='Items-first-row'>
                                   <img className='first-row-item-img' src='https://static.vecteezy.com/system/resources/previews/008/507/708/original/classic-cheeseburger-with-beef-patty-pickles-cheese-tomato-onion-lettuce-and-ketchup-mustard-free-png.png' alt='/' />
                                   <h4>Burger</h4>
                                   <li><ChevronRightRoundedIcon /></li>
                              </div>)
                         })
                    }

               </div>



               <div className='second-child'>
               {
                    item.map((d) => {

                         return (
                                   <div className='Items-second-row'>

                                        <div className='Items-second-row-items-img-rating-type'>
                                             <img className='Item-second-row-img' src='https://freepngimg.com/thumb/drinks/9-2-drink-png-6-thumb.png' alt='/' />

                                             <div className='Items-second-row-contents'>
                                                  <h4>Soft Drinks</h4>

                                                  <Rating
                                                       name='simple-controlled'
                                                       value={value}
                                                       onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                       }}
                                                  />
                                                  <p><spam>$</spam>{10}</p>
                                             </div>
                                        </div>
                                        <div className='Items-second-row-fav-add' >
                                             <FavoriteRoundedIcon />
                                             <AddCircleRoundedIcon />
                                        </div>

                                   </div>
                              

                         )
                    })
               }

               </div>




          </div>
     )
}

export default Items