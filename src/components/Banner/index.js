import React from 'react'
import { Container } from './style.js'
import { Link } from 'react-router-dom'
import Nike from  './nike90.png'

export default function Banner(){
    return(
        <>
           <Container>
                <div className="container flex">
                    <div className="title">
                        <h2>Nike</h2>
                        <h1>Camiseta Nike Masculino</h1>
                        <p>Camiseta masculina Sportswear. A camiseta Nike Sportswear apresenta um escudo brilhante que celebra a diversidade do esporte.</p>
                        <Link to="/produto/3">Ver produto</Link>
                    </div>
                    <div className="image">
                        <img src={Nike} alt="Camiseta Nike"/>
                    </div>
                </div>
           </Container>
        </>
    )
}