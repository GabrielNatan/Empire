import styled from 'styled-components'

export const Container = styled.div`
    padding:30px;
    width:100%;
    max-width:500px;
    height:100vh;
    transition:300ms;
    position: fixed;
    top:0;
    right:${props=> props.cart  ? "0" : "-500px"};
    background: #FFF;
    z-index:100;
    display:flex;
    flex-direction:column;
    .close{
        position:absolute;
        right:30px;
        cursor: pointer;
    }
    h1{
        margin:20px 0;
        border-bottom:1px solid #C0C0C0;
    }
    .contItens{
        width:100%;
        display:flex;
        flex-direction:column;        
        ul{
            list-style:none;
            overflow: auto;
            max-height:300px;
            li{
                width:100%;
                margin-bottom:10px;
                display:flex;
                padding:10px;
                background: #FAFAFA;
               
                img{
                    width:50px;
                }

                span{
                    margin:3px 0;
                }
                .desc{
                    flex:1;
                    display:flex;
                    flex-direction:column;
                    padding:0 10px ;

                    div{
                        width:100%;
                        display:flex;

                        span{
                            width:30px;
                            text-align:center;
                        }
                        button{
                            border: none;
                            width:30px;
                            display:flex;
                            justify-content:center;
                            align-items: center;
                        }
                    }
                }
            }
        }

        .total{
            width:100%;
            background:#525252;
            color:#FFF;
            display:flex;
            flex-direction:column;
            padding:20px;10px;
            strong{
                margin:5px 0;
            }
            span{
                font-weight:400;
            }

            a{
                width:100%;
                padding:10px;
                font-size:1rem;
                background: #C0F0C0;
                color: #000;
                text-align:center;
                text-decoration: none;
            }
        }
    }

`