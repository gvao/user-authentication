import style from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
        
        <NavLink to='/' className={style.logo}>Meu <span>Logo</span></NavLink>
        <ul className={style.lists_links}>
            <li>
                <NavLink to='/' className={({isActive}) => (isActive ? style.active : '')}>Entrar</NavLink>
            </li>
            <li>
                <NavLink to='/register'className={({isActive}) => (isActive ? style.active : '')}>Cadastrar</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar