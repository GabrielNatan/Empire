import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaBars,  FaShoppingCart, FaHeart } from 'react-icons/fa'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { Container } from './style.js'
import { useDispatch, useSelector} from 'react-redux'

import Cart from '../Cart/index'
import Lovers from '../Lovers/index'
export default function Navbar(){
    const [hover, setHover] = useState(false)
    const [deslogado, setDeslogado] = useState(false)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.clickState.open)
    const lovers = useSelector(state => state.lovers.open)
    const cardList = useSelector(state=>state.addCart.cart)

    
    const logout = ()=>{
        localStorage.removeItem("logado")
        setDeslogado(true)
    }

    return( 
        <>
           <Container hover={hover} >
               <div className="container flex">
                <Cart cart={cart} />
                <Lovers />   
                    <div className="logo"><Link to="/"><h1>Empire</h1></Link></div>
                    { localStorage.getItem('logado') ?
                        <>
                            <nav className="menu">
                                <span ><FaHeart onClick={()=>dispatch({type:"LOVERS_OPEN"})}  color="red"/></span>
                                <span onClick={()=> dispatch({type:'CART_OPEN'})}><FaShoppingCart /> {cardList.length > 0 && <span className="quant">{cardList.length}</span>}</span>
                                <span onClick={()=>logout()}><RiLogoutCircleRLine/></span>
                                
                            </nav>
                        </>
                        :
                        <>
                            <nav>
                                <Link to="/login">Login</Link>
                                <Link to="/cadastrar">Cadatro</Link>
                            </nav>
                        </>

                    }
               </div>
           </Container>
        </>
    )
}