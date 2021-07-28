import { useState } from 'react'
import { Link } from "react-router-dom"
import Menu from './menu/Menu'
import logo from '../../assets/logo.png'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <header>
            <Link to='/'>
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='logo' />
                    <p>Abank</p>
                </div>
            </Link>

            <div className='hamburguer-icon' onClick={() => setShowMenu(!showMenu)}>
                <div className={!showMenu ? 'line' : 'line top'}></div>
                <div className={!showMenu ? 'line' : 'line center'}></div>
                <div className={!showMenu ? 'line' : 'line bottom'}></div>
            </div>

            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        </header>
    )
}

export default Header