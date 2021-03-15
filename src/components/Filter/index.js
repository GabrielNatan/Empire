import React from 'react'
import { Container } from './styled'


export default function Filter(){
    return(
        <>
            <Container>
                <h3>Filtros</h3>
                <ul>
                    <li>Masculino</li>
                    <li>Feminino</li>
                    <li>Camiseta</li>
                    <li>Calças</li>
                    <li>Sapatos</li>
                    <li>Acessotios</li>
                </ul>
            </Container>
        </>
    )
}