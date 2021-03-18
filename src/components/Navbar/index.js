import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaBars,  FaShoppingCart, FaHeart } from 'react-icons/fa'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { Container } from './style.js'
import { useDispatch, useSelector} from 'react-redux'

import Cart from '../Cart/index'
import Lovers from '../Lovers/index'
export default function Navbar(){
    const [hover, setHover] = useState(false)
    const [deslogado, setDeslogado] = useState(true)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.clickState.open)
    const lovers = useSelector(state => state.lovers.open)
    const cardList = useSelector(state=>state.addCart.cart)

    useEffect(()=>{
        localStorage.getItem('logado') &&  setDeslogado(false)

    },[deslogado])
    const logout = ()=>{
        localStorage.removeItem("logado")
        setDeslogado(true)
    }

    return( 
        <>
           <Container hover={hover} logado={deslogado} >
               <div className="container flex">
                <Cart cart={cart} />
                <Lovers />   
                    <div className="logo"><Link to="/"><h1>Empire</h1></Link></div>
                                          
                            <nav className="menu">
                                <span ><FaHeart onClick={()=>dispatch({type:"LOVERS_OPEN"})}  color="red"/></span>
                                <span onClick={()=> dispatch({type:'CART_OPEN'})}><FaShoppingCart /> {cardList.length > 0 && <span className="quant">{cardList.length}</span>}</span>
                                { localStorage.getItem('logado') ?
                                
                                    <span onClick={()=>logout()}><RiLogoutCircleRLine/></span>
                                :
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/cadastrar">Cadatro</Link>
                                </>
                                }
                            </nav>
                    
               </div>
           </Container>
        </>
    )
}