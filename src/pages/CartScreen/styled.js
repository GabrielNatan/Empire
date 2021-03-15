import styled, { keyframes } from 'styled-components'

const spinnerAnimation = keyframes`
from { 
    transform: rotate(0deg); 
} to { 
    transform: rotate(360deg); 
}

`

export const ContainerFora = styled.div`
    width:100%;
    display:flex;
    padding:40px 0;
    flex-direction:column;
    align-items:center;
    heiht:50vh;
    a.back{
        text-decoration:none;
        position:absolute;
        top:60px;
    }
    .cont{
        flex:1;
        width:80%;
        max-height:350px;
        margin-bottom:10px;
        display:flex;
        justify-content:center;
        overflow:auto;

        ul{
            list-style:none;
             width:100%;
            li{
                width:100%;
                display:flex;
                background: #FAFAFA;
                margin-bottom:5px;
                padding:5px;
                img{
                    width:50px;
                    height:50px;
                    display:none;
                }
                .numeric{
                    flex:1;
                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                    
                    select{
                        border: 1px solid #CCC;
                        padding:5px;
                    }
                }

                .desc{
                    flex:2;
                    display:flex;
                    flex-direction:column;

                    strong{
                        font-size:.8rem;
                    }
                }

                .quant{
                    flex:1;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    
                    span{
                        width:25px;
                        height:25px;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        
                    }
                    button{
                        width:25px;
                        height:25px;
                        border:none;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:1.2rem;        
                    }
                }
            }
        }
        

       

    }

    .price{
        width:80%;
        padding:10px;
        background: #F0F0F0;
        display:flex;
        flex-direction:column;
        justify-content:space-between;        
    
        button{
            width:100%;
            padding:10px;
            background:#C0F0C0;
            text-decoration:none;
            text-align:center;
            margin:10px 0 0 0;
            color:#222;
            border:none;
            cursor:pointer;
        }
    }

    @media(min-width: 764px) {
        width:100%;
        min-height:80vh;
        display:flex;
        padding:40px ;
        flex-direction:row;
        flex-wrap:wrap;
        h1{
            width:100%;
            display:block;
        }
        
        .cont{
            flex:2;
            min-height:50vh;
            padding: 0 60px 0 0;

            ul{
                li{
                    img{
                        display:block;
                    }

                    
                }
            }
        }

        .price{
            flex:1;
            min-height:50vh;
            padding:60px;
        
        }
    }

    @media(min-width: 1024px) {
        
    }

`


export const ContPedido = styled.div`

    min-width:100%;
    height:100vh;
    padding:40px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: rgba(0,0,0,.7);
    position:fixed;
    left:0px;
    top:0;
    z-index:900;

    .box{
        width:100%;
        max-width:400px;
        min-height:300px;
        padding:40px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background: #FFF;

        .spinner{
            animation:${spinnerAnimation} 1s linear infinite ;
            margin-bottom: 15px;
        }
        strong{
            margin:10px 0;
        }
        button{
            margin:10px 0;
            width:100%;
            padding:10px;
            background: #C0F3C0;
            border: none;
            cursor:pointer;
            font-size:1.1rem;
            font-weight:bold;
        }

        

    }
`