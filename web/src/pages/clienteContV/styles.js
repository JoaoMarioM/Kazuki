import styled from 'styled-components'

export const ClientCont = styled.div`
    margin-top: 20px;
    background-color: #fff;
    border-radius: 10px;
    height: 93vh;
    width: 82vw;
    position: absolute;
    overflow: auto;
    /* display: flex;
    justify-content: center; */
`
export const Title =  styled.h1`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
`
export const ButtonBack = styled.button`
    float: right;
    margin: 20px;
    height: auto;
    width: auto;
    background-color: transparent;
`
export const ButtonEdit = styled.button`
    float: right;
    margin: 20px;
    height: auto;
    width: auto;
    background-color: transparent;
`
export const Form = styled.form``

export const Description = styled.h3`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
export const SelectNew = styled.select`
    margin-right: 5px;
    height: 25px;
    font-size: 13px;
    border-radius: 10px;
    border-color: #2741ff;
    color: ${props => props.disabled === 'disabled' && '#000'};

`
export const ServiceMethod = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`
 
export const PestsFound = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`
export const ButtonAdd = styled.button`
    width: auto;
    height: auto;
    background-color: transparent;
    display: ${props => props.visible};
`
export const ButtonRemove = styled.button`
    width: auto;
    height: auto;
    background-color: transparent;
    display: ${props => props.visible};
`
export const Characteristics = styled.textarea`
     width: 98%;
     display: flex;
     margin: 10px auto;
     height: 200px;
     border-radius: 5px;
     border: 1px solid #3333;
     font-size: 14px;

    :focus{
        border-color: #2741ff;
    }
 `
 
 export const Select = styled.select`
     border-radius: 10px;
     height: 25px;
     margin: 20px 10px 0 10PX;
     width: 25%;
     border-color: #3333;
     color: ${props => props.disabled === 'disabled' && '#000'}
 `




/* // .clientCont{
//     margin-top: 20px;
//     background-color: #fff;
//     border-radius: 10px;
//     height: 93vh;
//     width: 82vw;
//     position: absolute;
//     overflow: auto;
//     align-items: center;
// }
// .clientCont h1{
//     margin-top: 20px;
//     display: flex;
//     justify-content: center;
// }
// .clientCont form h3{
//     display: flex;
//     justify-content: center;
//     margin-top: 20px;
// }
// .selectNew{
    
//     /* margin: 10px; */
//     /* margin-top: 8px; */
//     margin-right: 5px;
//     height: 25px;
//     font-size: 13px;
//     border-radius: 10px;
//     border-color: #2741ff;
// }
// .clientCont .serviceMethod{
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     margin-top: 10px;
// } 
// .clientCont .pestsFound{
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     margin-top: 10px;
// }
// .clientCont .characteristics{
//     width: 98%;
//     display: flex;
//     margin: 10px auto;
//     height: 200px;
//     border-radius: 5px;
//     border: 1px solid #3333;
//     font-size: 14px;
//     padding-block-start: 10px;
//     padding-inline-start: 10px;
// }
// .clientCont input{
//     height: 25px;
//     margin: 20px 10px 0 10px;
//     border-radius: 20px;
//     border: 1px solid #3333;
//     text-align: center;
// }
// .clientCont .startDate{
//     width: 25%;
// }
// .clientCont .warranty{
//     width: 25%;
// }
// .clientCont .hour{
//     width: 25%;
// }

// .clientCont .conj2{
//     display: flex;
//     justify-content: space-between;
// }
// .clientCont .conj2 select{
//     border-radius: 10px;
//     height: 25px;
//     margin: 20px 10px 0 10PX;
//     width: 25%;
//     border-color: #3333;
// }
// .clientCont .conj3{
//     margin-bottom: 20px;
// }
// .clientCont .btnCad{
//     margin-bottom: 20px;
// }
// .clientCont .add{
//     width: auto;
//     height: auto;
//     background-color: transparent;
// }
// .clientCont .addI{
//     display: none;
// }
// .clientCont .removeM{
//     width: auto;
//     height: auto;
//     background-color: transparent;
//     display: none;
// }
// .clientCont .removeP{
//     width: auto;
//     height: auto;
//     background-color: transparent;
//     display: none;
// }
// .clientCont .edit{
//     /* margin: 0 auto; */
//     width: auto;
//     height: auto;
//     cursor: pointer;
//     background-color: transparent;
//     right: 15px;
//     position: absolute;
//     justify-content: center;

// }
// .trash{
//     width: auto;
//     height: auto;
//     background-color: transparent;
//     display: block;
// }
// .back{
//     float: right;
//     margin: 20px;
//     height: auto;
//     width: auto;
//     background-color: transparent;
// } */
