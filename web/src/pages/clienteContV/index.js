import React, {useState, Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle, faTrash, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'


import { Dash, Main } from '../../Components/dash'
import { ClientCont, Title, ButtonBack, ButtonEdit, Form, Description, ServiceMethod, PestsFound, SelectNew, ButtonAdd, ButtonRemove, Characteristics, Select } from './styles'
import { Input } from '../../Components/input'
import { Conj, ButtonSave } from '../../Components/modal/styleGlobal/modalP'

import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

// import SnackSuccess from '../../Components/snackBar/success'
// import SnackAttention from '../../Components/snackBar/attention'

import { useHistory} from 'react-router-dom'


// import api from '../../services/api'

export default function ClientContV(props) {
  
const idCo =  props.history.location.state.idCo

const serviceMethod = JSON.parse(idCo.serviceMethod)
const pestFound = JSON.parse(idCo.pestFound)

// console.log(serviceMethod)

const history = useHistory()

const [test, setTest] = useState(serviceMethod)

function handleBack(id){
  history.push('/clienteCont', {idC: id})

}

const [update, setUpdate] = useState(false)

const [pestFoundS, setPestsFoundS] = useState([])
const [serviceMethodS, setServiceMethodS] = useState([])

const [counterP, setCounterP] = useState(0)

function AddP(e){
  e.preventDefault()

  setCounterP(counterP + 1)
}

const contArrayService = (index) => (e) => {
  const newValues = serviceMethodS
  newValues[index] = e.target.value

  setServiceMethodS(newValues)
}
const contArrayFound = (index) => (e) =>{
  const newValues2 = pestFoundS
  newValues2[index] = e.target.value

  setPestsFoundS(newValues2)
}

const pestFoundL = (pestFound.length)
// const pestFoundLR = (pestFoundL - 1)

// console.log(pestFound)


function RemoveP(e){
  e.preventDefault()
  
  // if(counterP > 0){
  //   setCounterP(counterP - 1)

  // }else if(test.length > 0){
    
    test.pop()
    
    console.log(test)
  // }

}



 return (
  <Main>
  <Menu />
  <Dash>
    <ClientCont>

      <ButtonBack onClick={() => handleBack(idCo.cliente_id)}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#1C1C2D"/> 
      </ButtonBack>
      <ButtonEdit onClick={() => setUpdate(true)}>
          <FontAwesomeIcon icon={faEdit} color="#1C1C2D" size="lg" />
      </ButtonEdit>
      
      <Title>Contrato Nº {idCo.id}</Title>

      <Form >
        
        <Description>Método de serviço</Description>
        <ServiceMethod>   

          {
            test.map(value => 
              <SelectNew
              disabled={update ? null : 'disabled'}
              // onChange={e => setTest(e.target.value)}
              >

                  <option selected>{value}</option>
                  <option >Descupinização</option>
                  <option >Esgotamento</option>
                  <option >Desinsetização</option>
                  <option >Desentupimento</option>
                  <option >Desratização</option>
                  <option >Limpeza de reservatório</option>
                  <option >Limpeza caixa D`Agua</option>
                  <option >Desinfecção</option>
                
            </SelectNew>

            
            ) 
          }  

          { 
              update ? 
              new Array(counterP).fill('').map((_,index) =>(
                // serviceMethod.map(value => 
                <SelectNew
                // value={pestFound} 
                onChange={contArrayService(index)}
                key={index}>
                  <option selected >--</option>
                  <option >Descupinização</option>
                  <option >Esgotamento</option>
                  <option >Desinsetização</option>
                  <option >Desentupimento</option>
                  <option >Desratização</option>
                  <option >Limpeza de reservatório</option>
                  <option >Limpeza caixa D`Agua</option>
                  <option >Desinfecção</option>
                </SelectNew>
             ))
              :
              null
              
           }

            <ButtonAdd onClick={AddP}
              visible={update ? 'block' : 'none'}
            >
              <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#333" style={{marginLeft:10}}/>
            </ButtonAdd>
            <ButtonRemove onClick={RemoveP}
              visible={update ? 'block' : 'none'}
            >
              <FontAwesomeIcon icon={faTrash} size="lg" color="#333" style={{marginLeft:10}}/>
            </ButtonRemove>
           
        </ServiceMethod>
          
        <Description>Pragas encontradas</Description>

        <PestsFound>

        {pestFound.map(value => 
                <SelectNew
                disabled={update ? null : 'disabled'}
                >
                  <option>{value}</option>
                  <option >Cupim subterrâneo</option>
                  <option >Cupim madeira seca</option>
                  <option >Brocas</option>
                  <option >Pulgas</option>
                  <option >Baratas</option>
                  <option >Carrapatos</option>
                  <option >Formigas</option>
                  <option >Ratos</option>
                </SelectNew>
              )}
{/*             
           { 
              update ? 
              new Array(counterP).fill('').map((_,index) =>(
                <select  className="selectNew"
                // value={pestFound} 
                onChange={contArrayFound(index)}
                key={index}>
                  <option >--</option>
                  <option >Cupim subterrâneo</option>
                  <option >Cupim madeira seca</option>
                  <option >Brocas</option>
                  <option >Pulgas</option>
                  <option >Baratas</option>
                  <option >Carrapatos</option>
                  <option >Formigas</option>
                  <option >Ratos</option>
                </select>
             ))
              :
              null
              
           }
            <button className={update? "add" : "addI"} onClick={AddP}>
              <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#333" style={{marginLeft:10}}/>
            </button>
            <button className={ counterP >= 1 && "trash" || 'removeP' } onClick={RemoveP}>
              <FontAwesomeIcon icon={faTrash} size="lg" color="#333" style={{marginLeft:10}}/>
            </button> */}
        </PestsFound>

          

      <Description>Caracteristicas do local</Description>
         <Characteristics className="characteristics" 
          value={idCo.characteristics}
          disabled={update ? null : 'disabled'}
          // onChange={e => setCharacteristics(e.target.value)}
         />

            <Conj
              justify="space-between"
            >
              <Input
                width="25%"
                margin="20px 10px 0 10px"
                height="25px"
                type="date"
                placeholder="Data de inicio"
                value={idCo.startDate}
                disabled={update ? null : 'disabled'}
                // onChange={e => setStartDate(e.target.value)}
              />
              <Input
                width="25%"
                margin="20px 10px 0 10px"
                height="25px"
                type="text"
                placeholder="Garantia"
                value={idCo.warrant}
                disabled={update ? null : 'disabled'}
                // onChange={e => setWarrant(e.target.value)}
              />
              <Input
                width="25%"
                margin="20px 10px 0 10px"
                height="25px"
                type="time"
                placeholder="Horario"
                value={idCo.hour}
                disabled={update ? null : 'disabled'}
                // onChange={e => setHour(e.target.value)}
              />
            </Conj>
            <Conj
              justify="space-between"
            >
              <Select
                // onChange={e => setBudgetTechnician(e.target.value)}
                disabled={update ? null : 'disabled'}
              >
              <option >{idCo.budgetTechnician}</option>

              </Select>

              <Select
                // onChange={e => setResponsibleTechnician(e.target.value)}
                disabled={update ? null : 'disabled'}
              >
              <option >{idCo.responsibleTechnician}</option>
              </Select>
              <Select
              disabled={update ? null : 'disabled'}
                // onChange={e => setAssistantTechnician(e.target.value)}
              >
              <option >{idCo.assistantTechnician}</option>
              </Select>
            </Conj>
            <Conj
              justify="center"
            >
              <Input
                width="180px"
                margin="20px 10px 0 10px"
                height="25px"
                type="text"
                placeholder="Condição de pagamento"
                value={idCo.payment}
                disabled={update ? null : 'disabled'}
                // onChange={e => setPayment(e.target.value)}
              />
              <Input
                width="150px"
                margin="20px 10px 0 10px"
                height="25px"
                type="text"
                placeholder="Valor"
                value={idCo.value}
                disabled={update ? null : 'disabled'}
                // onChange={e => setValue(e.target.value)}
              />
            </Conj>

            <ButtonSave
            visible={update ? null : 'none' }
            >
              <p>Salvar</p>
            </ButtonSave>

      </Form>

        {/* {
        isOpenS ? <SnackSuccess 
        onclose={() => setIsOpenS(false)} title="Contrato cadastrado com sucesso!"/> : null
        }

        {
        isOpenA ? <SnackAttention
        onclose={() => setIsOpenA(false)} title="Certifique-se de preencher todos os campos!"/> : null
        } */}
          
    </ClientCont>
      
  </Dash>
  

</Main>
  );
}