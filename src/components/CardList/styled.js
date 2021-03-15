import styled from 'styled-components'

export const Container = styled.ul`

    width:90%;
    max-width:500px;
    
    li{
        display:flex;
        margin-bottom:10px;
        background: #F3F3FF;
        border:1px solid #CCC;
        a{
            display:flex;
            text-decoration: none;
            width:100%;
            color: #000;
        }
        img{
            width:80px;
            height:80px;
        }
    
        div{
            flex:2;
            display:flex;
            flex-direction:column;
            padding:10px;
            &:nth-child(3){
                display:flex;
                justify-content:center;
                align-items:center;
            }

            
        
            button{
                border: none;
                width:30px;
                height:30px;
                display:flex;
                justify-content:center;
                align-items:center;
                background: #C3F7C3;
                color: #93B093;
            }
            
            &:nth-child(3){
                flex:1;
                display:flex;
                flex-direction:row;
                justify-content:space-between;
            }
        }
    }
    


`