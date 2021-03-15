import styled from 'styled-components'


export const Container = styled.section`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    background: #C0EFE3;
    padding: 40px;
    .image-product{
        width:100%;
        max-width:500px;
        padding:5px;
        background: #FFF;
        
        img{
            width:100%;
        }
    }

    .description-product{
        background: #FFF;
        padding:5px;
        display:flex;
        flex-direction:column;
        text-align:center;
        width:100%;
        max-width:500px;
        h1{
            font-size:1.3rem;
            margin-bottom:5px;
        }

        p{
            font-size:.8rem;
            margin-bottom:5px;

        }

        .numericCont{
            display:flex;
            width:80%;
            height:50px;
            margin:0 auto;
            .numeric{
                flex:1;
                background:#F0FCF0;
                display:flex;
                justify-content:center;
                align-items:center;

                :hover{
                    background:#E0F7E0;
                }
                .active{
                    border:2px solid red;
                }
            }
        }


        strong{
            font-size:1.5rem;
            margin:10px 0;
        }

        button{
            border:none;
            background: #C0EFE3;
            padding:10px;
            font-weight:900;
        }

    }

    @media(min-width: 764px) {
        flex-direction:row;
        height:90vh;
        margin:0 auto;
        justify-content:center;
        .image-product{
            height:400px;
            display:flex;
            justify-content:center;
            align-items:center;
            img{
                width:100%;
                height:100%;
            }
        }
        .description-product{
            height:400px;
            display:flex;
            justify-content:center;
            align-items:center;

            h1{
                font-size:1.9rem;
            }

            p{
                font-size:1rem;
                width:300px;
            }
            strong{
                font-size:2.3rem;
            }
            button{
                width:100%;
            }
        }
    }

    @media(min-width: 1440px) {
        
        .image-product{
            height:550px;
            max-width:600px;
        }

        .description-product{
            max-width:600px;
            height:550px;
            padding:0 30px;
            
            h1{
                font-size:3.1rem;
            }

            

            p{
                width:500px;
            }

            strong{
                font-size:3.2rem;
            }
            button{
                max-width:500px;
                font-size:1.7rem;
            }
        }
    }
`