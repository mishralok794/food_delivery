import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material'
import React, { useEffect } from 'react'
import './menu.css'

const Menu = () => {

     useEffect(() => {
          let menuLi = document.querySelectorAll('.menuIcon-li spam ') // youu can add class name as u fill here 
          console.log(menuLi)
          function menuHandler() {
               console.log("hey there")
               //     console.log(this.classList)
               menuLi.forEach((a) => a.classList.remove("active"));
               this.classList.add("active")
          }

          menuLi.forEach((data) => data.addEventListener("click", menuHandler))
     }, [])
     return (
          <div className='parent-menu'>


               <ul >

                    <li className='menuIcon-li'>
                         <a href='/'></a>
                         <spam><HomeRounded /></spam>
                    </li>


                    <li className='menuIcon-li'>
                         <a href='/'></a>
                         <spam><Chat /></spam>
                    </li>

                    <li className='menuIcon-li'>
                         <a href='/'></a>
                         <spam><Favorite /></spam>
                    </li>

                    <li className='menuIcon-li'>
                         <a href='/'></a>
                         <spam><AccountBalanceWalletRounded /></spam>
                    </li>

                    <li className='menuIcon-li'>
                         <a href='/'></a>
                         <spam><SummarizeRounded /></spam>
                    </li>

                    <li className='menuIcon-li'>
                         <a href='/'></a>
                         <spam><Settings /></spam>
                    </li>

                    <li className='Menu-circle'>
               </li>
               </ul>

               

          </div>
     )
}

export default Menu