import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className='header-logo' src="https://e7.pngegg.com/pngimages/518/95/png-clipart-amazon-com-logo-product-brand-trademark-amazon-web-services-logo-text-trademark.png" alt="Icon-amazon" />
            <div className='header__search'>
                <input className='header__searchInput' type="text" />
                {/* Logo */}
            </div>

            <div className='header__nav'>
                <div className='header__option'>

                </div>

                <div className='header__option'>

                </div>

                <div className='header__option'>

                </div>
            </div>
        </div>
    );
}

export default Header