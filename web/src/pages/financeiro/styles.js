import styled from 'styled-components'

export const Financial = styled.div`
    margin-top: 20px;
`
export const BtnFinancialContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const BtnFinancial = styled.button`
    width: 32%;
    height: 150px;
    border-radius: 10px;
    background-color: ${props => props.background};
    box-shadow: 2px 2px 2px #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    padding-left: 20px;
`
export const TitleBtn = styled.div``
export const FinancialValue = styled.p`
    color: #fff;
    font-size: 25px;
`
export const SubTitleBtn = styled.p`
    margin-top: 8px;
    color: #fff;
    font-size: 15px;
`
export const Balance = styled.div`
    width: 110%;
    height: 55px;
    margin-left: -25px;
    background-color: #10101D;
    display: flex;
    align-items: center;
    flex-direction: row;
`
export const BalanceTitle = styled.h2`
    color: #fff;
    padding-left: 15px;
`
export const BalanceValue = styled.h2`
    background-image: ${props => props.eye ? 'linear-gradient(to right, #0192FF , #005B9F)' : 'transparent'};
    color: ${props => props.eye ? 'transparent' : '#fff'};
    /* padding-left: 15px; */
    border-radius: 7px;
    margin-left: 10px;
`
export const BtnEye = styled.button`
    height: auto;
    width: auto;
    background-color: transparent;
`
export const TableEmployee = styled.div`
    margin-top: 20px;
    width: 360px;
    height: 420px;
    background-color: #fff;
    box-shadow: 4px 4px 4px #333;
    border-radius: 7px;
`
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 3px 3px 3px #333;
    border-radius: 7px;
    background-color: #1C1C2D;
    color: #fff;
`
export const TitleTable = styled.p`
    margin: 10px;
`
export const ItemContainer = styled.div`
    height: 353px;

`
export const Itens = styled.div`
    display: flex;
    justify-content: space-between;
`
export const NameEmployee = styled.p`
    margin: 10px;
`
export const BalanceEmployee = styled.p`
    margin: 10px;
`
export const FooterTable = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid #1c1c2d;
    padding-right: 7px;
    padding-left: 7px;

`
export const PageNumber = styled.p``
export const Details = styled.button`
    background-color: transparent;

    &:hover{
        color:#005B9F;
    }
`
export const ArrowContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const BtnArrow = styled.button`
    background-color: transparent;

    &:hover{
        color:#005B9F;
    }
`
