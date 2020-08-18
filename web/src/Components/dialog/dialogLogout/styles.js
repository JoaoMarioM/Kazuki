import styled from 'styled-components'

export const DialogP = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DialogC = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    position: fixed;
    flex-direction: column;
    background-color: #fff;
    width: 450px;
    height: 200px; 
    border-radius: 5px;
    box-shadow: 5px 5px 5px #000;
`
export const Title = styled.h1`
    margin-top: 10px;
    font-size: 25px;
`
export const SubTitle = styled.p`
    margin-top: 25px;
`
export const ButtonContainer = styled.div``
export const ButtonY = styled.button`
    margin-top: 30px;
    width: 75px;
    height: 35px;
    margin-right: 20px;
    cursor: pointer;
    background-color: #028B1E;
    border-radius: 5px;
    color: #fff;
    transition: all .4s;

    &:hover{
        background-color: #007417;
    }
`
export const ButtonN = styled.button`
    margin-top: 30px;
    width: 75px;
    height: 35px;
    margin-right: 20px;
    cursor: pointer;
    background-color: #F6030F;
    border-radius: 5px;
    color: #fff;
    transition: all .4s;

    &:hover{
        background-color: #B5010A;
    }
`