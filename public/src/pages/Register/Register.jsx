import style from './Register.module.css'

const Register = () => {
  return (
    <div className={style.resgister}>
        <p>Olá, seja bem vindo(a), vamos criar seu cadastro ?</p>
        <form>
        <label>
            <span>Nome</span>
            <input type="text" placeholder='Digite seu Nome' />
            </label>
            <label>
            <span>E-mail</span>
            <input type="email" placeholder='Digite seu E-mail' />
            </label>
            <label>
            <span>Senha</span>
            <input type="password" placeholder='Digite sua senha' />
            </label>
            <label>
            <span>Confirmar senha</span>
            <input type="password" placeholder='Digite sua senha' />
            </label>
            <button className='btn'>Entrar</button>
        </form>
    </div>
  )
}

export default Register