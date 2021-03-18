import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { RiCloseCircleFill } from 'react-icons/ri'
import { useDispatch,useSelector } from 'react-redux'
import { Container } from './styled'


export default function Cart(){
    const cart = useSelector(state => state.clickState.open)
    const cardList = useSelector(state=>state.addCart.cart)
    const cardList2 = useSelector(state=>state.addCart.subtotal)
    const [quant,setQuant] = useState(1)
    const [deslogado, setDeslogado] = useState(true)
    const [subtotal,setSubTotal] = useState(0)
    const dispatch = useDispatch()

    useEffect(()=>{
        localStorage.getItem('logado') &&  setDeslogado(false)
    },[])

    const handleAdd = (item)=>{
        dispatch({type:"ADD_CART",payload:{cart:[item]}})
        

        setSubTotal(0)
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let total = [];
        cardList.map(cada=>{
            let price = cada.price

            let quant = Number(cada.quant)
            total.push(price * quant)
        })
        total.reduce(reducer)
        setSubTotal(total)
    }
    
    const handleRemove = (id)=>{
        dispatch({type:"REMOVE_CART",payload:{cart:[{id:id}]}})


    }

    
    return(
        <Container cart={cart}>
            <RiCloseCircleFill onClick={()=> dispatch({type:'CART_CLOSE'})} className="close" size="30px"/>
            <h1>Carrinho</h1>

            <div className="contItens">
                <ul>
                    {cardList.map(cada=>{
                        return(
                            <>
                                <li key={cada.id}>
                                    <img src={cada.image} alt="image item"/>
                                    <div className="desc">
                                        <strong>{cada.name}</strong>
                                        <span>R$ {cada.price}</span>
                                        <div>
                                            <button onClick={()=>handleAdd(cada)}>+</button>
                                            <span>{cada.quant}</span>
                                            <button onClick={()=>handleRemove(cada.id)}>-</button>
                                        </div>
                                        
                                    </div>
                                </li>
                    
                            
                            </>
                        )
                    })}
                    
                    
                </ul>

                <div className="total">
                    { cardList.length !== 0 ?
                        <>
                            <strong>Subtotal: <span>{!cardList2 ? " ":  cardList2.toFixed(2)}</span></strong>
                            <strong>Desconto (10%): <span>{((cardList2 * 10)/100).toFixed(2)}</span></strong>
                            <strong>Total: {(cardList2 - ((cardList2 * 10)/100).toFixed(2)).toFixed(2)}</strong>

                            <Link onClick={()=> dispatch({type:'CART_CLOSE'})} to={deslogado ? "/login" : "/cart"}>Fechar compra</Link>
                        </>
                        :
                        <>
                            <strong>Carrinho vazio</strong>
                        </>
                    }
                </div>
            </div>
        </Container>

    )
}