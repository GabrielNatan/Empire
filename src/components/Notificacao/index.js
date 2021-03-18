import React from 'react'
import { Container } from './styled'
import { useDispatch, useSelector} from 'react-redux'


export default function Notification(){
    const dispatch = useDispatch()
        const cart = useSelector(state => state.notification.open)
        const message = useSelector(state => state.notification.message)
        
    return(
        <Container open={cart} >
            <p>{message}</p>
        </Container>
    )
}