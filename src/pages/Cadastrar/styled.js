import styled from 'styled-components'

export const Container = styled.div`
    padding:0 40px;
    text-align:center;
    width:100%;
    height:100vh;
    background: #C3F3E5;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    p{
        margin-bottom:10px;
       
    }
    .cont{
        width:100%;
        max-width:400px;
        padding:20px;
        display:flex;
        flex-direction:column;
        background: #FFF;
        text-align:center;
        
        .iconArrow{
            position: absolute;
        }
        
        input{
            margin:10px 0;
            padding:10px;
            border:none;
            border-bottom:2px solid #CCC;    
        }

        button{
            margin:10px 0;
            padding:10px;
            border: none;
            font-size:1.3rem;
            background: #C0F3C0;
        }

        a{
            text-decoration: none; 
            color #222;
            font-size:0.8rem;
        }
    }
`