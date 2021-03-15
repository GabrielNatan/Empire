import React,{ useEffect, useState } from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaHeart} from 'react-icons/fa'

import { useDispatch, useSelector } from 'react-redux'
 
export default function Card({id,name, image,numeric,desc, price}){
    const dispatch = useDispatch()
    const [cart,setCart] = useState([])
    const [lovers, setLovers] = useState(false)
    const value = useSelector(state=> state.clickState.newValue)
    const cartRedux = useSelector(state=> state.addCart.cart)
    const loversRedux = useSelector(state=> state.addLovers.cart)

        useEffect(()=>{
            let loversVerify = loversRedux.filter((item)=> {return item.id === id })
            console.log("ccc")

            if(loversRedux.length === 0 || loversVerify.length  === 0 ){
                    console.log("aaaaa")
                    setLovers(false)
                }else if(loversVerify.length  > 0){
                    console.log("bbbb")
                    setLovers(true)
                }
        },[loversRedux])

   

     const addCart = (e)=>{
        e.preventDefault()
        let cartAdd = []
        let quant = 1;
        cartAdd.push({id,name,price,image,numeric,quant})
        dispatch({
             type:'ADD_CART',
             payload:{cart:cartAdd}
         })
         dispatch({type:'NOTIFICATION_OPEN',payload:{message:"Item adicionado ao carrinho."}})
        setTimeout(()=>{
            dispatch({type:'NOTIFICATION_CLOSE'})   
        },1000)
     }

    const addLovers = (e,id,name,price,image)=>{
        e.preventDefault()
        let cartAdd = []
        setLovers(!lovers)

        if(!lovers){
            cartAdd.push({id,name,price,image,numeric})
            dispatch({
                type:'ADD_LOVERS',
                payload:{cart:cartAdd}

            })
            dispatch({type:'NOTIFICATION_OPEN',payload:{message:"Item adicionado aos favoritos."}})
        setTimeout(()=>{
            dispatch({type:'NOTIFICATION_CLOSE'})   
        },1000)
        }else{
            cartAdd.push({id})
            dispatch({
                type:'REMOVE_LOVERS',
                payload:{cart:cartAdd} 
            })
            dispatch({type:'NOTIFICATION_OPEN',payload:{message:"Item removido dos favoritos."}})
            setTimeout(()=>{
                dispatch({type:'NOTIFICATION_CLOSE'})   
            },1000)
        }
     }
    
    return(
        <Container to={`/produto/${id}`}>
            <div className="image">
                <img src={image} alt="image of product"/>
            </div>
            <div className="description">
                <h1>{name} </h1>
                <p>{desc}</p>
                <div className="price">
                    <strong>R$ {price}</strong>
                    {lovers ?  <FaHeart onClick={(e)=>addLovers(e,id,name,price,image)} color="red"/> : <FaRegHeart onClick={(e)=>addLovers(e,id,name,price,image)} color="red"/>}
                   


                </div>
                <button onClick={(e)=>{addCart(e)}}>Adicionar</button>
            </div>
        </Container>
    )
}