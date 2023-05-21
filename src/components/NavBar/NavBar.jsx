import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink,Link } from 'react-router-dom'

const NavBar = () => {
    const logoNav = "../src/assets/Dragon-head2.jpg"
    return (
            <header>
                <Link to={"/"}>
                    <img className='nav-logo' title='Home' src={logoNav} alt="Logo" />
                </Link>


                <nav>
                    <ul className='navItems'>
                        <li>
                            <NavLink to={"/categoria/accesorios"}>
                            Accesorios
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to={"/categoria/suplementos"}>
                            Suplementos
                            </NavLink>
                        </li>

                        

                        <li>
                            Contacto
                        </li>
                    </ul>
                </nav>

                <div>
                    <CartWidget />
                </div>
            </header>
    )
}

export default NavBar