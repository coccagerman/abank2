import { Link } from 'react-router-dom'

const Menu = ({showMenu, setShowMenu}) => {

    return (
        <nav className={`menu ${!showMenu ? null : 'menu-active'}`}>
            <ul>
                <li><Link onClick={()=> setShowMenu(!showMenu)} to='/'>Home</Link></li>
                <li><Link onClick={()=> setShowMenu(!showMenu)} to='/deposit'>Deposit</Link></li>
                <li><Link onClick={()=> setShowMenu(!showMenu)} to='/transfer'>Transfer</Link></li>
                <li><Link onClick={()=> setShowMenu(!showMenu)} to='/movements'>Movements</Link></li>
            </ul>
        </nav>
    )
}

export default Menu