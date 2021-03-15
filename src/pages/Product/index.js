import React,{ useState, useEffect } from 'react'
import { Container } from './styled'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import Notification from '../../components/Notificacao'

export default function ProducetScreeen(){
    const dispatch = useDispatch();
    const productList = useSelector(state=> state.products.cart)
    const {id} = useParams()
        const [product,setProduct] = useState()

    useEffect(()=>{
        const  productFinal = productList.filter((item)=>{return item.id == id && item})
        setProduct(productFinal[0])
    },[])

    const handleAdd = (id,name,price,numeric,image)=>{
        let cartAdd = []
        let quant = 1;
        cartAdd.push({id,name,price,numeric,image,quant})
        dispatch({
             type:'ADD_CART',
             payload:{cart:cartAdd}
         })

         dispatch({type:'NOTIFICATION_OPEN',payload:{message:"Item adicionado ao carrinho."}})
        setTimeout(()=>{
            dispatch({type:'NOTIFICATION_CLOSE'})   
        },1000)
    }
    return(
        <>
            <header>
                <Navbar/>    
            </header>    
            <Container className="product">
                    {!product ?
                        <>
                            <h1>Carregando</h1>
                        </>
                        :
                        <>
                        <div className="image-product">
                            <img src={product.image} alt={`Foto do produto ${product.name}`} />
                        </div>
                        <div className="description-product">
                            <h1>{product.name}</h1>

                            <p>{product.desc} E mais alguma coisa para ver como fica.</p>
                           
                            <strong>R$ {product.price}</strong>
                            <button onClick={()=>handleAdd(product.id,product.name,product.price,product.numeric,product.image)}>Adicionar</button>
                        </div>
                        </>

                    }       
                    <Notification/>         
            </Container>
        </>)
}

/*


 */