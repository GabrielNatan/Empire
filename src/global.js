import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    .container{
        width:100%;
        max-width:1700px;
        margin:0 auto;
    }
    .flex{
        align-items:center;
        display:flex;
    }

    @keyframes left{
        from{
            transform: translateX(20px);
            opacity:0;
        }
        to{
            transform: translateX(0px);
            opacity:1;
        }
    }

    @keyframes right{
        from{
            transform: translateX(-20px);
            opacity:0;
        }
        to{
            transform: translateX(0px);
            opacity:1;
        }
    }
`
export default GlobalStyle;