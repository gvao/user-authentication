import style from './Login.module.css'
import { useState  } from 'react'
import { Link } from 'react-router-dom'
import { useSend } from '../../hooks/useSend'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {sendRequest, error:sendError, loading} = useSend()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const user = {
      email,
      password
    }

    try {
      await sendRequest(user, 'http://localhost:3000/api/login')
      console.log(user);
    } catch (error) {
      console.log(sendError);
    }


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

        {!loading 
        ? <button className='btn'>Cadastrar</button> 
        : <button className='btn' disabled >Aguarde...</button>
        }
           
        </form>
       <Link to='/register'><button className='btn_resgiter'>Criar Cadastro</button></Link>
    </div>
  )
}

export default Login