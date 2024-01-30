import style from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const isActive = ({isActive}) => (isActive ? style.active : '')
  return (
    <nav className={style.navbar}>
        
        <NavLink to='/' className={style.logo}>Meu <span>Logo</span></NavLink>
        <ul className={style.lists_links}>
            <li>
                <NavLink to='/' className={isActive}>Entrar</NavLink>
            </li>
            <li>
                <NavLink to='/register'className={isActive}>Cadastrar</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar