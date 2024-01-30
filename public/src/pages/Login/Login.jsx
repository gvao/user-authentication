import { Link } from 'react-router-dom'

import style from './Login.module.css'
import { Input } from '../../components/Input'

const Login = () => {

  return (
    <div className={style.login}>
      <h1>Entrar</h1>
      <form>
        <Input label={"E-mail"} type={'email'} placeholder={'Digite seu E-mail'} />
        <Input label={"Senha"} type={'password'} placeholder={'Digite sua senha'} />
        <button className='btn'>Entrar</button>
      </form>
      <p></p>
      <Link to='/register'><button>Criar Cadastro</button></Link>
    </div>
  )
}

export default Login