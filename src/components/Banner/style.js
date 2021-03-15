import styled from 'styled-components'


export const Container =  styled.div`
    .container{

        width:100%;
        background: #C3F3E5;
        padding:0 40px;
        display:flex;
        flex-direction:column;
    }

    .title{
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:center;
        opacity:0;
        animation: right 300ms linear forwards;
        padding:30px 0;
        z-index:0;


        h2{
            font-size:.8rem;
        }

        h1{
            margin-bottom:5px;
            font-size:4.7rem;
            font-size:1.5rem;

        }

        p{
            font-size:1.3rem;
            font-size:1rem;
            line-height:20px;
            width:100%;
            max-width:580px;

        }

        a{
            text-decoration:none;
            margin-top:10px;
            color: orange;
            


          
        }
    }
    .image{
        flex:1; 
        opacity:0;
        animation: left 300ms linear forwards;
        
        img{
            width:80%;
            height:100%;
        }
    }

      @media(min-width: 720px) {
          .container{
            height:80vh;
            flex-direction:row;
            container: red;
            
            .title{
                padding: 0;
                h1{
                    font-size:2.5rem;
                }
                h2{
                    font-size:1.2rem;
                }
            a{
                width:300px;
                font-size:1.3rem;
               

            }
        }
        
        .image{

            img{
                height:80vh;
            }
        }
        }
    }

      @media(min-width: 1024px) {
         .container{
            .title{
                margin-left:100px;
              h1{
                  font-size:3.1rem;
  
              }
              p{
                  font-size:1.3rem;
              }
              
          }
  
          .image{
               display:flex;
              justify-content:center;
              align-items:flex-end;
              img{
                  object-fit:
              }
          }
         }
      }

      @media(min-width: 1024px) {
        .container{
           .title{
               margin-left:100px;
             h1{
                 font-size:4.3rem;
 
             }
             p{
                 font-size:1.3rem;
             }
             
         }
 
         .image{
              display:flex;
             justify-content:center;
             align-items:flex-end;
             img{
                 
             }
         }
        }
     }
`
