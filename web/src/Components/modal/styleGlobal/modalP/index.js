import styled from 'styled-components'

export const ModalP = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Conj = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justify};
`
export const Title = styled.h1`
     margin-top: 40px ;
     font-size: 25px;
     margin-left: 90px;
`
export const ButtonSave = styled.button`
    margin: 30px auto;
    width: 100px;
    height: 45px;
    /* margin-right: 20px; */
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