import React from 'react'
import { Container } from './styled'
import { RiCloseCircleFill, RiShoppingCart2Fill } from 'react-icons/ri'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector} from 'react-redux'
export default function Lovers(){
    const lovers = useSelector(state => state.lovers.open)
    const loversRedux = useSelector(state=> state.addLovers.cart)

    const dispatch = useDispatch()

    const addCart = (item)=>{
        console.log(item)
        let { id,name,price,image,numeric } = item
        let cart = [{id,name,price,numeric,image,quant:1}]
        console.log(cart)
        dispatch({type: 'ADD_CART',payload:{cart}})
        dispatch({type: 'REMOVE_LOVERS',payload:{cart:[{id}]}})
    }

    const RemoveCart = (item)=>{
        let { id } = item
        dispatch({type: 'REMOVE_LOVERS',payload:{cart:[{id}]}})
    }

    return(
        <>
            <Container lovers={lovers}>
            <RiCloseCircleFill  onClick={()=>dispatch({type:"LOVERS_CLOSE"})} className="close" size="30px"/>
            <h1>Favoritos</h1>

            <div className="contItens">
                <ul>
                    {loversRedux.length === 0 ?
                    <>
                        <strong>Não há favoritos :(</strong>
                    </>
                    :
                    <>
                        {loversRedux.map(cada=>{
                            return(
                                <li key={cada.id}>
                                    <img src={cada.image} alt={`imagem do ${cada.name}`}/>
                                    <div className="desc">
                                        <strong>{cada.name}</strong>
                                        <span>R$ {cada.price}</span>
                                        <div>
                                            <button onClick={()=>addCart(cada)}><RiShoppingCart2Fill size="16px"/></button>
                                            <button onClick={()=>RemoveCart(cada)}><FaTrashAlt/> </button>
                                        </div>
                                        
                                    </div>
                                </li>
                            )
                        })
                    }
                    </>

                    }
                   
                </ul>
                
                
            </div>


            </Container>
        </>
    )
}