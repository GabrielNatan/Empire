import styled from 'styled-components'


export  const Container =  styled.aside`
    width: 100%;
    height:150px;
    flex-direction:column;

    h3{
        margin:15px 0 0 0;
        text-align:center;
    }
    

    ul{
        display:flex;
        flex-wrap:wrap;
        list-style:none;
        
        li{
            margin:10px;
        }
    }

    @media(min-width: 764px) {
        ul{
            display:flex;
            justify-content:center;
        }
    }

    @media(min-width: 1024px) {
        width:20%;
        margin-right:20px;
        margin-bottom:20px;
        box-shadow: 5px 5px 5px #EEE;
        height: 100vh;
        ul{
            flex-direction:column;
        }
    }


`