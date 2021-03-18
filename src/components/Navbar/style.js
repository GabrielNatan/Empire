import styled,{keyframes} from 'styled-components'




export const Container =  styled.div`
    width:100%;
    height:70px;    
    padding: 0 40px;
    display:flex;
    background: #FFF;


    .logo{
        flex:1;
        a{
            text-decoration: none;
            color: #222;
        }
        h1{
            font-size:1.4rem;
            font-family: 'Kaushan Script', cursive;
            opacity:0;
            animation: right 300ms linear forwards;
        }
    }

    nav{
        flex:1;
        display:flex;
        justify-content:flex-end;
        position: relative;
        opacity:0;
        animation: left 300ms linear forwards;
        
        a{
            padding:10px 5px;
            font-size:.9rem;
            text-decoration:none;
            color:#222;
        }
    
        .list{
            position:absolute;
            border-radius:5px;
            background: red;
            top:45px;
            visibility: ${props => props.hover ? 'initial': 'hidden'};
            &::before{
                content:"";
                display:block;
                background: red;
                width:10px;
                height:10px;
                position: absolute;
                right:17px;
                top:-5px;
                transform: rotate(45deg);
            }

            button{
                background: blue;
                width:100%;
                padding:5px;
            }
        }
        span{
            padding: 10px 8px 0 ;
            cursor:pointer;
            text-decoration: none;

            :nth-child(4) {
                display:none;
                
            }
        }
        .quant{
            width:16px;
            height:15px;
            top:8px;
            right:${props=> props.logado ? '118px': '32px'};
            display:flex;
            justify-content:center;
            color:#FFF;
            align-items:center;
            background:red;
            position:absolute;
            padding:0px;
            border-radius:50%;
            font-size:.6rem;
            font-weight:bold;
        }
    }
    
    @media(min-width: 764px) {
        .logo{
            
            h1{
                font-size:2rem;
         
            }
        }
    }

`