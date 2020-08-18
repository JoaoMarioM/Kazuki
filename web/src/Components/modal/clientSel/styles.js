import styled from 'styled-components'

export const ModalClientView = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 850px;
    height: 450px; 
    margin-left: 200px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.377);
    border-radius: 5px;
    text-align: center;
    flex-direction: column;
`
export const ModalClientSe = styled.div`

`
export const Form = styled.form`
    width: 100%;
`
export const ButtonContract = styled.button`
    margin: 30px auto;
    width: 100px;
    height: 45px;
    border-radius: 10px;
    background-color: #1C1C2D;
    cursor: pointer;
    transition: all .4s;
    display: ${props => props.visible === 'none' ? 'none' : 'block'};

    p{
        color: #fff;
    }

    &:hover{
        background-color: #272763 ;
    }
`
