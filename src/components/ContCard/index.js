import React,{ useState,useEffect } from 'react'
import { Container } from './styled'
import { FaList, FaSearch } from 'react-icons/fa'
import { HiViewGrid } from 'react-icons/hi'
import CardProduct from '../CardProduct'
import CardList from '../CardList'
import axios from 'axios'
import { useSelector } from 'react-redux'
export default function ContCard(){
    const [list, setList] = useState(true)
    const [items,setItems] = useState([])
    const um = [{name:"nike maneiro",price:"199,99",image:"https://images.lojanike.com.br/500x500/produto/218059_2063437_20200414182813.jpg"}, {name:"Olympcus maneiro",price:"135,99",image:"https://i.zst.com.br/images/tenis-olympikus-masculino-academia-perfect-photo124798405-12-d-16.jpg"}, {name:"Adidas preto",price:"175,99",image:"https://assets.adidas.com/images/w_600,f_auto,q_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Tenis_Gazelle_Preto_BB5476_01_standard.jpg"}]
    const products = useSelector(state=> state.products.cart)
    
    useEffect(()=>{
        async function chamada(){
            axios.get("http://localhost:3333/products")
        .then(res => setItems(res.data))
        }

        chamada()
    },[])
    return(
        <Container>
            <div className="header">
                <h1>Produtos</h1>
                <div className="icons">
                    
                    <HiViewGrid className="min-icon" onClick={()=>{setList(true)}}/>
                    <FaList className="min-icon" onClick={()=>{setList(false)}}/>
                </div>
            </div>
            {list ? products.map((cada,index)=>{return(<CardProduct id={cada.id} name={cada.name} numeric={cada.numeric} desc={cada.desc} image={cada.image} price={cada.price}/>)}) : <CardList/> }
            
        </Container>
    )
}