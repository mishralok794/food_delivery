import React, { useEffect } from 'react'
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
     let [drinks,setDrinks]=useState(null);
     let [fastFood,setfastFood]=useState(null);
     
     useEffect(() => {

          fetch("drinks.json")
               .then(res => res.json())
               .then(res => {
                    setDrinks(res);
                    // console.log(res);
               })

               fetch("fastFood.json")
               .then(respond => respond.json())
               .then(result => {
                    setfastFood(result);
                    // console.log(result,"fastfood")
               })

     }, [])

     return (
          <div className='parent-items'>

               <div className='category-all-item'>
                    <h4>Menu Category</h4>
                    <p>View All &nbsp; <li className='category-all-item-li'><DoubleArrowRoundedIcon /></li></p>
               </div>

               <div className='child-items'>
                    { fastFood &&
                         fastFood.map((d) => {

                              return (<div className='Items-first-row'>
                                   <img className='first-row-item-img' src={d.image} alt='/' />
                                   <h5>{d.name.slice(0,4)}</h5>
                                   <li><ChevronRightRoundedIcon /></li>
                              </div>)
                         })
                    }

               </div>



               <div className='second-child'>
                    { drinks &&
                         drinks.map((d) => {

                              return (
                                   <div key={d.id} className='Items-second-row'>

                                        <div className='Items-second-row-items-img-rating-type'>
                                             <img className='Item-second-row-img' src={d.image} alt='/' />

                                             <div className='Items-second-row-contents'>
                                                  <h4>Soft Drinks</h4>

                                                  <Rating
                                                       name='simple-controlled'
                                                       value={value}
                                                       onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                       }}
                                                  />
                                                  <p><spam>$</spam> &nbsp;{d.price?d.price:10}</p>
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