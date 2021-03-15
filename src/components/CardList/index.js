import React,{ useState, useEffect } from 'react'
import { FaPlus, FaHeart, FaRegHeart } from 'react-icons/fa'
import { Container } from './styled'
import { Link } from 'react-router-dom'

import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
export default function CardList(){
    const [products, setProducts ] = useState([]);
    const [lovers, setLovers] = useState(false)
    const dispatch = useDispatch();
    const productList = useSelector(state=> state.products.cart)
    const loversRedux = useSelector(state=> state.addLovers.cart)
    
    useEffect(()=>{
        
        products.map(cada=>{

            let loversVerify = loversRedux.filter((item)=> {return item.id === cada.id })
            console.log("ccc")
    
            if(loversRedux.length === 0 || loversVerify.length  === 0 ){
                    console.log("aaaaa")
                    setLovers(false)
                }else if(loversVerify.length  > 0){
                    console.log("bbbb")
                    setLovers(true)
                }
        })
        
    },[loversRedux])
    
    const handleAdd = (e,cada)=>{
        e.preventDefault()
        let cartAdd = []
        let quant = 1;
        cartAdd.push({id:cada.id,name:cada.name,price:cada.price,numeric:cada.numeric,image:cada.image,quant})
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
            cartAdd.push({id,name,price,image})
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
    

    useEffect(()=>{
        axios.get('http://localhost:3333/products')
        .then(res => setProducts(res.data))
    },[])
    return(
        <>
            <Container>
                {productList.length > 0 ? productList.map(cada=>{
                    return(
                        <li>
                            <Link to={`/produto/${cada.id}`}>
                                <img src={cada.image} alt={`Image do produto ${cada.name}`}/>
                                <div>
                                    <span>{cada.name}</span>
                                    <strong>R${cada.price}</strong>
                                </div>
                                <div>
                                    <button onClick={(e)=>handleAdd(e,cada)} ><FaPlus/></button>
                                    {loversRedux.filter(item => { if(item.id === cada.id){return item}}).length > 0 ?
                                         <FaHeart onClick={(e)=>addLovers(e,cada.id,cada.name,cada.price,cada.image)} color="red"/>
                                         
                                         
                                         :
                                         
                                        <FaRegHeart onClick={(e)=>addLovers(e,cada.id,cada.name,cada.price,cada.image)} color="red"/>
                                    }

                                </div>
                            </Link>
                        </li>
                    )
                })
                :
                <h1>Carregando</h1>
                }
            </Container>
        </>
    )
}