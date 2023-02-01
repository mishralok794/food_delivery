import { SearchRounded } from '@mui/icons-material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import React from 'react'
import './header.css'


function Header() {
  return (
    <header className='header-parent'>

      <div className='header-child'>

        <div className='img'>
          <img className='header-foodLogo' src='https://firebasestorage.googleapis.com/v0/b/blog-cf1e3.appspot.com/o/foodDilevery%2Ffood%2Fkindpng_7466928.png?alt=media&token=a1fcbda1-8d1c-4142-8b3a-63772769f4ef' alt='foodLogo' />
        </div>

        <div className='inputBox'>
          <SearchRounded className='serachIcon' />
          <input type='text' placeholder='search item' />
        </div>

        <div className='shoppingCart'>
          <ShoppingCartRoundedIcon className='cartIcon' />
          <div className='header-ItemCount'>
            <p>2</p>
          </div>
        </div>

        <div className='profilePic'>
        <img className='User-profilePic' src='https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/156704901_2906159942990034_4643734074696163690_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HsGfldBGU3IAX9gDizV&_nc_ht=scontent-del1-1.xx&oh=00_AfCuXTO8RtDDlN3jTvc9czchnoE41r8bBHzp8yPgjdXJjA&oe=63FEF571'  alt='/'/>
        
        </div>

        <div className='toggleMenu'>
        <BarChartRoundedIcon className='toggleIcon'/>
        </div>

      </div>
    </header>
  )
}

export default Header