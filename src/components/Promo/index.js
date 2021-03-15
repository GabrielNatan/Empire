import React from 'react'
import { FaGift,FaTruckMoving } from 'react-icons/fa'
import { IoMdPricetags } from 'react-icons/io'
import { Container } from './styled'

export default function Promo(){
    return(
        <>
            <Container>
                <div className="container flex">
                    <div className="card">
                        <span>
                            <FaTruckMoving/>
                        </span>
                        <strong>
                            Entrega rapida
                        </strong>
                    </div>

                    <div className="card">
                        <span>
                            <IoMdPricetags/>
                        </span>
                        <strong>
                            Toda Loja com 10% OFF
                        </strong>
                    </div>

                    <div className="card">
                        <span>
                            <FaGift/>
                        </span>
                        <strong>
                            Brinde exclusivo
                        </strong>
                    </div>
                </div>
            </Container>
        </>
    )
}