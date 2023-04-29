import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    const logoNav = "../src/assets/dragonnav.png"
    return (
            <header>
                <div>
                    <img className='nav-logo' src={logoNav} alt="Logo" />
                </div>

                <nav>
                    <ul className='navItems'>
                        <li>Tienda</li>
                        <li>Nosotros</li>
                        <li>Contacto</li>
                    </ul>
                </nav>

                <div>
                    <CartWidget />
                </div>
            </header>
    )
}

export default NavBar