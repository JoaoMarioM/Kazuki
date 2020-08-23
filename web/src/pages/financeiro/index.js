import React, {useState }from 'react';

import { Dash, Main } from '../../Components/dash'
import { BtnFinancialContainer, Financial, BtnFinancial, Balance, BalanceTitle, BalanceValue, BtnEye, TableEmployee, ArrowContainer, TitleContainer, TitleTable, ItemContainer, NameEmployee, BalanceEmployee, Itens, PageNumber, FooterTable, Details, TitleBtn, FinancialValue, SubTitleBtn, BtnArrow} from './styles'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

import { useHistory } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye } from '@fortawesome/free-regular-svg-icons'
import {faEyeSlash, faEye, faChevronLeft, faChevronRight, faAngleDoubleLeft, faAngleDoubleRight, faHandHoldingUsd, faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'

export default function Financeiro() {

  const [eye, setEye] = useState(true)

  const history = useHistory()

  function Eye(){
    eye ? setEye(false) : setEye(true)
  }

  function handleSale() {
    history.push('/financeiroSale')
  }

  function createData(id, name, balance){
    return{id, name, balance}
  }

  const data = [
    createData(1, 'João Mario', 5000),
    createData(2, 'João Mario', 5000),
    createData(3, 'João Mario', 5000),
    createData(4, 'João Mario', 5000),
    createData(5, 'João Mario', 5000),
    createData(6, 'João Mario', 5000),
    createData(7, 'João Mario', 5000),
    createData(8, 'João Mario', 5000),
    createData(9, 'João Mario', 5000),
    createData(10, 'João Mario', 5000),

  ]
  return (
    <Main>
      <Menu />

      <Dash>

        <Balance>
          <BalanceTitle>Saldo atual:</BalanceTitle>

          <BalanceValue 
          eye={eye}>
            R$ 25.000,00
          </BalanceValue>

          <BtnEye onClick={Eye}>
            <FontAwesomeIcon icon={eye ? faEye : faEyeSlash} color={'#fff'} style={{paddingLeft: 10}} size="lg" />
          </BtnEye>
          
        </Balance>

        <Financial>

          <BtnFinancialContainer>
            <BtnFinancial onClick={handleSale}
              background='#0192FF'>
              <TitleBtn>
                <FinancialValue>20.000,00</FinancialValue>
                <SubTitleBtn>Vendas mensal</SubTitleBtn>
              </TitleBtn>
              <FontAwesomeIcon icon={faHandHoldingUsd} size="8x" color="#05416E"/>
            </BtnFinancial>

            <BtnFinancial
              background='#27DA00'>
              <TitleBtn>
                <FinancialValue>20.000,00</FinancialValue>
                <SubTitleBtn>Receber(Mês)</SubTitleBtn>
              </TitleBtn>
              <FontAwesomeIcon icon={faThumbsUp} size="8x" color="#24850F"/>
            </BtnFinancial>

            <BtnFinancial
              background='#FF0101'>
              <TitleBtn>
                <FinancialValue>20.000,00</FinancialValue>
                <SubTitleBtn>Pagar(Mês)</SubTitleBtn> 
              </TitleBtn>
              <FontAwesomeIcon icon={faThumbsDown} size="8x" color="#830101"/>
            </BtnFinancial>

          </BtnFinancialContainer>

          <TableEmployee>
            <TitleContainer>
                <TitleTable>Funcionario</TitleTable>
                <TitleTable>Salario</TitleTable>
            </TitleContainer>
           
            <ItemContainer > 
                 {data.map((row) => (
                  <Itens>
                    <NameEmployee>{row.name}</NameEmployee>
                    <BalanceEmployee>{Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(row.balance)}</BalanceEmployee>
                  </Itens>
                    ))}
               
            </ItemContainer>
            
            <FooterTable>
              <PageNumber>Pag. 1 - 6</PageNumber>

              <ArrowContainer>

                <BtnArrow>
                  <FontAwesomeIcon icon={faAngleDoubleLeft} style={{margin: 8}}/>
                </BtnArrow>
                <BtnArrow>
                  <FontAwesomeIcon icon={faChevronLeft} style={{margin: 8}} />                  
                </BtnArrow>
                <BtnArrow>
                  <FontAwesomeIcon icon={faChevronRight} style={{margin: 8}} />
                </BtnArrow>
                <BtnArrow>
                  <FontAwesomeIcon icon={faAngleDoubleRight} style={{margin: 8}} />
                </BtnArrow>
                           
              </ArrowContainer> 
              
              <Details>Ver detalhes</Details>
            </FooterTable>

          </TableEmployee>


        </Financial>
      </Dash>
    </Main>
  );
}