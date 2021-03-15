import React from 'react'
import { Container } from './styled'
import CardProduct from '../CardProduct'
import { useSelector } from 'react-redux'
export default function ContCard(){
    const products = useSelector(state=> state.products.cart)
    
 
    return(
        <Container>
            <div className="header">
                <h1>Produtos</h1>
                
            </div>
            { products.map((cada,index)=>{return(<CardProduct id={cada.id} name={cada.name} numeric={cada.numeric} desc={cada.desc} image={cada.image} price={cada.price}/>)})  }
            
        </Container>
    )
}