import styled from 'styled-components'


export const Container =  styled.section`
    background: #222;
    padding:0 40px;
    .container{
        align-items:center;
        flex-direction:column;
        .card{
            width:100%;
            max-width:320px;
            height:150px;
            margin-bottom:10px;
            background: #FFF;
            transform: translateY(-45px);
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            padding:10px;
            text-align:center;
        
            span{
                background: #50CF80;
                display:flex;
                justify-content:center;
                align-items:center;
                width:70px;
                height:70px;
                border-radius:50%;
                font-size:2.2rem;
            }

            strong{
                font-size:1.5rem;
            }
        }
    }

    @media(min-width: 768px) {
        .container{
            flex-direction:row;
            justify-content:space-between;

            .card{
                width:220px;
            }
        }
    }
    
    @media(min-width: 1024px) {
        .container{
            .card{
                width:300px;
                max-width:900px;
            }
        }
    }

    @media(min-width: 1440px) {
        .container{
            .card{
                width:440px;
                max-width:900px;
            }
        }
    }
`