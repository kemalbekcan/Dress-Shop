import { Link } from 'react-router-dom'
function Header () {
    return <header>
            <div className='logo'>
                <Link to="/" >Laura's Closet</Link>
            </div>
            <div className='search'>
                <input type="search" defaultValue="Search" />
            </div>
            <nav className='navbar'>
                <ul className='navbar-lists'>
                    <li className='navbar-lists-list'>
                        <a className='navbar-lists-list__item' href="">Store</a>
                    </li>
                    <li className='navbar-lists-list'>
                        <a className='navbar-lists-list__item' href="">Account</a>
                    </li>
                    <li className='navbar-lists-list'>
                        <a className='navbar-lists-list__item' href="">Wish List</a>
                    </li>
                    <li className='navbar-lists-list'>
                        <a className='navbar-lists-list__item' href="">Basket</a>
                    </li>
                </ul>
            </nav>
    </header>
}

export default Header