import React,{useState} from 'react'
import { FaArrowLeft, FaShoppingCart,FaSpinner } from 'react-icons/fa'
import { BiHappyBeaming } from 'react-icons/bi'
import { Link, useHistory } from 'react-router-dom'
import { ContainerFora, ContPedido } from './styled'
import { useDispatch,useSelector } from 'react-redux'

import NavBar from '../../components/Navbar'

export default function CartScreen(){
    const [loading,setLoading] = useState(false)
    const [box,setBox] = useState(false)
    const cardList = useSelector(state=>state.addCart.cart)
    const cardList2 = useSelector(state=>state.addCart.subtotal)
    const dispatch = useDispatch()
    const history = useHistory()


    const fecharPedido = ()=>{
        setLoading(true)
        setBox(true)

        dispatch({type:"REMOVE_All"})

        setTimeout(()=>{
            setLoading(false)
        },350)
        
    }

    const handleAdd = (item)=>{
        dispatch({type:"ADD_CART",payload:{cart:[item]}})
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let total = [];
        cardList.map(cada=>{
            let price = cada.price

            let quant = Number(cada.quant)
            total.push(price * quant)
        })
        total.reduce(reducer)
     }
    
    const handleRemove = (id)=>{
        dispatch({type:"REMOVE_CART",payload:{cart:[{id:id}]}})

    }

    return(
        <>
            { box && 
            <ContPedido>
                <div className="box">
                    {
                        loading ?
                        <>
                            <FaSpinner className="spinner" size="40px"/>
                            <strong>Pedido está sendo finalizado</strong>
                        </>
                        :
                        <>
                            <BiHappyBeaming  size="40px"/>
                            <strong>Compra realizada com sucesso!</strong>
                            <button onClick={()=>{
                                setBox(false)
                                 history.push("/")}}>
                                Voltar
                            </button>
                        </>
                    }
                </div>
            </ContPedido>
            }
            <NavBar/>
        <ContainerFora>

                    <Link className="back" to="/"><FaArrowLeft/> Voltar</Link>
                    <h1>Carrinho <FaShoppingCart size="22px"/> ({cardList.length})</h1>
            <div className="cont">
                <ul>
                    {cardList.length > 0 ? cardList.map(cada=>{
                        return(<>
                            <li>
                                <img src={cada.image} alt="imagem do produto"/>
                                <div className="desc">
                                    <strong>{cada.name}</strong>
                                    <span>R${cada.price}</span>
                                </div>    
                                <div className="numeric">
                                <select>
                                {cada.numeric.map(item=>{
                                    return(
                                        <option >
                                            {item}
                                        </option>
                                    )
                                })}
                                </select>
                                </div>
                                <div className="quant">
                                    <button onClick={()=>handleAdd(cada)}>+</button>
                                    <span>{cada.quant}</span>
                                    <button onClick={()=>handleRemove(cada.id)}>-</button>
                                </div>
                            </li>
                        </>)})
                        : <strong>carrinho vazio :(</strong>
                    }
                </ul>  
            </div>
            <div className="price">
                <strong>Carrinho ({cardList.length})</strong>

                <span>Valor: {!cardList2 ? " ":  cardList2.toFixed(2)}</span>
                <span>Desconto (10%):{((cardList2 * 10)/100).toFixed(2)}</span>
                <span>Total: {(cardList2 - ((cardList2 * 10)/100).toFixed(2)).toFixed(2)}</span>
                <button onClick={()=>fecharPedido()}>Fechar pedido</button>
            </div>
        </ContainerFora>
     </>
    )
}