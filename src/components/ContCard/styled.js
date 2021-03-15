import styled from 'styled-components'


export const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:50px 0;
    min-height:100vh;
    .header{
        width:100%;
        padding:20px;
        text-align:center;
    
        .icons{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:flex-end;
            margin:20px 0;
            .min-icon{
                font-size:1.8rem;
                padding:5px;
            }
            input{
                width:100%;
                max-width:300px;
                border:none;
                border-bottom: 2px solid #CCC;
                padding:5px;
            }

            button{
                font-size:1.3rem;
                border: none;
                background: transparent;
                
            }
        }
    }
    @media(min-width: 764px) {
        align-items: flex-start;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media(min-width: 1024px) {
        justify-content:space-around;
        
    }
    

`