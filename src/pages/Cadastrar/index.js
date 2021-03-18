import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { Container } from './styled'

export default function LoginScreen(){
    const [fields, setFields] = useState({})
    const [msg, setMsg] = useState()
    
    const register = (fieldsRes)=>{
        setMsg("")
        
        let {name,password, email, passwordConfirm} = fieldsRes

        if(password !== passwordConfirm){
            setMsg("Confirmação de senha incorreta, tente novamente.")
            return
        }
        
        localStorage.setItem("user", JSON.stringify({name,email,password}))
        setMsg("Cadastro realizado com sucesso")
    }

    return(
        <Container>
            <p>{msg}</p>
            <div className="cont"> 
            <Link className="iconArrow" to="/"><FaArrowLeft/></Link>
                <h1>Cadastrar</h1>
                <input onChange={(e)=>{setFields({...fields,nome:e.target.value})}} type="text" placeholder="Digite seu Nome..."/>
                <input onChange={(e)=>{setFields({...fields,email:e.target.value})}} type="email" placeholder="Digite seu email..."/>
                <input onChange={(e)=>{setFields({...fields,password:e.target.value})}} type="password" placeholder="**********"/>
                <input onChange={(e)=>{setFields({...fields,passwordConfirm:e.target.value})}} type="password" placeholder="**********"/>
                <button onClick={(e)=>register(fields)} >Entrar</button>
                <Link to="/login">Deseja realizar login?</Link>
            </div>

        </Container>
    )
}