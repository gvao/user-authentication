import { useState  } from 'react'
import style from './Register.module.css'

import { useSend } from '../../hooks/useSend'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmePassword] = useState('')
  const [error,setError] = useState('')
  const [registered, setRegistered] = useState('')

  

  const {sendRequest, error:sendError, loading} = useSend()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setRegistered('')
    setError('')
    const user = {
      name,
      email,
      password
    }

    if (password !== confirmPassword) {
       setError('As senhas precisam ser iguais!') 
       return
    } 

    try {
       sendRequest(user, 'http://localhost:3000/api/signup')
      console.log(user);

    } catch (error) {
      console.log(sendError);
    }

    
    setRegistered('Usuário cadastrado com sucesso!');
  }

 
  return (
    <div className={style.resgister}>
      <form onSubmit={handleSubmit}>
      <h1>Criar cadastro</h1>
      <h5>Olá, seja bem vindo(a), vamos criar seu cadastro ?</h5>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            placeholder='Digite seu Nome'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required/>
        </label>

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

        <label>
          <span>Confirmar senha:</span>
          <input
            type="password"
            placeholder='Confirme sua senha'
            name='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmePassword(e.target.value)} 
            required/>
        </label>

        
        {!loading 
        ? <button className='btn'>Cadastrar</button> 
        : <button className='btn' disabled >Aguarde...</button>
        }

        {error ? (
          <p className='error'>{error}</p>
        ) : (
          registered.length > 0 && <p className='registered'>{registered}</p>
        )}
      </form>
    </div>
  )
}

export default Register