import React,{ useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container } from './styled'
import { FaArrowLeft } from 'react-icons/fa'
export default function LoginScreen(){
    const [fields,setFields] = useState({})
    const [msg,setMsg] = useState()

    const history = useHistory()

    const handleLogin = (fieldsRes)=>{
        setMsg("")
        let { email,password } = fieldsRes

        if(!email || !password){
            setMsg("Preencha todos os campos!")
            return
            
        }

        let user = JSON.parse(localStorage.getItem('user'))

        if(user.email !== email || user.password !== password){
            setMsg("Email ou Password invalido!")
            return
        }

        setMsg("Login realizado com sucesso!")
        localStorage.setItem('logado',JSON.stringify(user))
        setTimeout(()=>{history.push("/")},300)
        return
        
    }

    return(
        <Container>
                {msg}
            <div className="cont">
            <Link className="iconArrow" to="/"><FaArrowLeft/></Link>
                <h1>Login</h1>
                <input onChange={(e)=>setFields({...fields,email:e.target.value})} type="email" placeholder="Digite seu email..."/>
                <input onChange={(e)=>setFields({...fields,password:e.target.value})} type="password" placeholder="**********"/>
                <button onClick={()=>handleLogin(fields)}>Entrar</button>
                <Link to="/cadastrar">Deseja se cadastrar?</Link>
            </div>

        </Container>
    )
}