import style from './Login.module.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className={style.login}>
        <h1>Entrar</h1>
        <form>
            <label>
            <span>E-mail</span>
            <input type="email" placeholder='Digite seu E-mail' />
            </label>
            <label>
            <span>Senha</span>
            <input type="password" placeholder='Digite sua senha' />
            </label>
            <button className='btn'>Entrar</button>
        </form>
        <p></p> 
       <Link to='/register'><button>Criar Cadastro</button></Link>
    </div>
  )
}

export default Login