import styled from 'styled-components'


export const Container = styled.div`
    width:300px;
    padding:15px;
    background: #A0E3A0;
    position:fixed;
    bottom:30px;
    left:${props=> props.open ? "10px": "-310px"};
    border-radius:15px;
    border:5px solid #A0E3A0;
    text-align:center;
    transition:300ms;

`