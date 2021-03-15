import styled from 'styled-components'


export const Container =  styled.div`

.flex{
    flex-direction:column;
}

@media(min-width: 1024px) {
    padding:0 40px ;
        .container{
            flex-direction: row;
            align-items:flex-start;
        }
        
    }

`