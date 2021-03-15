import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container =  styled(Link)`
    width:100%;
    max-width:300px;
    text-decoration: none;
    color: #222;
    margin-bottom:20px;
    border:1px solid #CCC;

    .image{
        img{
            width:100%;
            height:250px;
            display:block;
        }
    }    

    .description{
        padding:10px;

        h1{
            font-size:1.4rem;
            text-align:center;
        }
        .price{
            width:100%;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        p{
            margin: 10px 0;
            text-align:center;
        }

        strong{
            font-size:1.4rem;
        }
        button{
            width:100%;
            padding: 10px;
            font-size:1.1rem;
            font-weight:900;
            border:none;
            margin-top:10px;
            background: #C0E3C0;
        }
    }

`