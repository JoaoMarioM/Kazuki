import styled from 'styled-components'

export const ModalView = styled.div`
display: flex;
align-items: center;
background-color: #fff;
width: 850px;
height: ${props => props.height}; 
margin-left: 200px;
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.377);
border-radius: 5px;
text-align: center;
flex-direction: column;
`
export const ModalV = styled.div``

export const Close = styled.button`
    width: auto;
    height: auto;
    cursor: pointer;
    background-color: transparent;
    float: right;
    margin: 15px;
`
export const Form = styled.form`
    width: 100%;
`