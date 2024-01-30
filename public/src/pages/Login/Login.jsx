import style from './Login.module.css'
import { useState  } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email,
      password
    }
    console.log(user);
  }
  return (
    <div className={style.login}>
        <form onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <label>
          <span>E-mail:</span>
          <input
            type="email"
            placeholder='Digite seu E-mail'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required/>
        </label>

        <label>
          <span>Senha:</span>
          <input
            type="password"
            placeholder='Digite sua senha'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required/>
        </label>
            <button className='btn'>Entrar</button>
           
        </form>
       <Link to='/register'><button className='btn_resgiter'>Criar Cadastro</button></Link>
    </div>
  )
}

export default Login