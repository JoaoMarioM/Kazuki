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

import SnackSuccess from '../../Components/snackBar/success'
import SnackAttention from '../../Components/snackBar/attention'

import { useHistory} from 'react-router-dom'
import api from '../../services/api'


export default function ClientContV(props) {
  
const idCo =  props.history.location.state.idCo

const serviceMethodB = JSON.parse(idCo.serviceMethod)
const pestFoundB = JSON.parse(idCo.pestFound)

const history = useHistory()

function handleBack(id){
  history.push('/clienteCont', {idC: id})

}

const [isOpenS, setIsOpenS] = useState(false)
const [isOpenA, setIsOpenA] = useState(false)

const [update, setUpdate] = useState(false)
const [service, setService] = useState(serviceMethodB)
const [pest, setPest] = useState(pestFoundB)

const [pestFoundS, setPestsFoundS] = useState([])
const [serviceMethodS, setServiceMethodS] = useState([])
const [characteristics, setCharacteristics] = useState(idCo.characteristics)
const [startDate, setStartDate] = useState(idCo.startDate)
const [warrant, setWarrant] = useState(idCo.warrant)
const [hour, setHour] = useState(idCo.hour)
const [budgetTechnician, setBudgetTechnician] = useState(idCo.budgetTechnician)
const [responsibleTechnician, setResponsibleTechnician] = useState(idCo.responsibleTechnician)
const [assistantTechnician, setAssistantTechnician] = useState(idCo.assistantTechnician)
const [payment, setPayment] = useState(idCo.payment)
const [value, setValue] = useState(idCo.value)

  const serviceMethod = JSON.stringify(service)
  const pestFound = JSON.stringify(pest)

async function handleupdate(e) {
  e.preventDefault()

  const id = idCo.id
  const payload = {
    serviceMethod,
    pestFound,
    characteristics,
    startDate,
    warrant,
    hour,
    budgetTechnician,
    responsibleTechnician,
    assistantTechnician,
    payment,
    value
  }
  try {
    api.put(`contratos/${id}`, payload)
    setIsOpenS(true)
    setUpdate(false)
  } catch (error) {
    alert('Não foi possivel atualizar o cliente!')
  }
}


function AddM(e){
  e.preventDefault()

  const serviceAdd = [...service]
  serviceAdd.push('--')

  setService(serviceAdd)

}

function AddP(e){
  e.preventDefault()

  const pestAdd = [...pest]
  pestAdd.push('--')
  setPest(pestAdd)
}

const contArrayService = (index) => (e) => {
  const newValues = serviceMethodS
  newValues[index] = e.target.value

  setServiceMethodS(newValues)

  const serviceOnChange = [...service]
  serviceOnChange.pop()
  serviceOnChange.push(newValues[0])

  setService(serviceOnChange)
}

const contArrayFound = (index) => (e) =>{
  const newValues2 = pestFoundS
  newValues2[index] = e.target.value

  setPestsFoundS(newValues2)

  const pestOnChange = [...pest]
  pestOnChange.pop()
  pestOnChange.push(newValues2[0])

  setPest(pestOnChange)
}

function RemoveM(e){
  e.preventDefault()
  
if(service.length > 0){
    const serviceM = [...service]
    serviceM.pop()
    setService(serviceM)
  }

}
function RemoveP(e){
  e.preventDefault()
  
if(pest.length > 0){
    const pestF = [...pest]
    pestF.pop()
    setPest(pestF)
  }

}

console.log(serviceMethodB)
console.log(pestFoundB)

console.log(service)
console.log(pest)

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

      <Form onSubmit={handleupdate}>
        
        <Description>Método de serviço</Description>
        <ServiceMethod>   
          {
            new Array(service).fill('').map((_,index) =>(
              service.map(value => 
              <SelectNew
              disabled={update ? null : 'disabled'}
              onChange={contArrayService(index)}
              key={value}>
                <option selected >{value}</option>
                <option >Descupinização</option>
                <option >Esgotamento</option>
                <option >Desinsetização</option>
                <option >Desentupimento</option>
                <option >Desratização</option>
                <option >Limpeza de reservatório</option>
                <option >Limpeza caixa D`Agua</option>
                <option >Desinfecção</option>
              </SelectNew>
            )))
           }

            <ButtonAdd onClick={AddM}
              visible={update ? 'block' : 'none'}
            >
              <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#333" style={{marginLeft:10}}/>
            </ButtonAdd>

            <ButtonRemove onClick={RemoveM}
              visible={update ? 'block' : 'none'}
            >
              <FontAwesomeIcon icon={faTrash} size="lg" color="#333" style={{marginLeft:10}}/>
            </ButtonRemove>
           
        </ServiceMethod>
          
        <Description>Pragas encontradas</Description>

        <PestsFound>
 
           { 
              new Array(pest).fill('').map((_,index) =>(
                pest.map(value =>
                <SelectNew
                disabled={update ? null : 'disabled'}
                onChange={contArrayFound(index)}
                key={index}>
                  <option >{value}</option>
                  <option >Cupim subterrâneo</option>
                  <option >Cupim madeira seca</option>
                  <option >Brocas</option>
                  <option >Pulgas</option>
                  <option >Baratas</option>
                  <option >Carrapatos</option>
                  <option >Formigas</option>
                  <option >Ratos</option>
                </SelectNew>
             )))
              
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
        </PestsFound>

          

      <Description>Caracteristicas do local</Description>
         <Characteristics className="characteristics" 
          value={characteristics}
          disabled={update ? null : 'disabled'}
          onChange={e => setCharacteristics(e.target.value)}
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
                value={startDate}
                disabled={update ? null : 'disabled'}
                onChange={e => setStartDate(e.target.value)}
              />
              <Input
                width="25%"
                margin="20px 10px 0 10px"
                height="25px"
                type="text"
                placeholder="Garantia"
                value={warrant}
                disabled={update ? null : 'disabled'}
                onChange={e => setWarrant(e.target.value)}
              />
              <Input
                width="25%"
                margin="20px 10px 0 10px"
                height="25px"
                type="time"
                placeholder="Horario"
                value={hour}
                disabled={update ? null : 'disabled'}
                onChange={e => setHour(e.target.value)}
              />
            </Conj>
            <Conj
              justify="space-between"
            >
              <Select
                onChange={e => setBudgetTechnician(e.target.value)}
                disabled={update ? null : 'disabled'}
              >
              <option >{budgetTechnician}</option>

              </Select>

              <Select
                onChange={e => setResponsibleTechnician(e.target.value)}
                disabled={update ? null : 'disabled'}
              >
              <option >{responsibleTechnician}</option>
              </Select>
              <Select
              disabled={update ? null : 'disabled'}
                onChange={e => setAssistantTechnician(e.target.value)}
              >
              <option >{assistantTechnician}</option>
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
                value={payment}
                disabled={update ? null : 'disabled'}
                onChange={e => setPayment(e.target.value)}
              />
              <Input
                width="150px"
                margin="20px 10px 0 10px"
                height="25px"
                type="text"
                placeholder="Valor"
                value={value}
                disabled={update ? null : 'disabled'}
                onChange={e => setValue(e.target.value)}
              />
            </Conj>

            <ButtonSave
            // onClick={handleupdate}
            type="submit"
            visible={update ? null : 'none' }
            >
              <p>Salvar</p>
            </ButtonSave>

      </Form>

        {
        isOpenS ? <SnackSuccess 
        onclose={() => setIsOpenS(false)} title="Contrato atualizado com sucesso!"/> : null
        }

        {
        isOpenA ? <SnackAttention
        onclose={() => setIsOpenA(false)} title="Certifique-se de preencher todos os campos!"/> : null
        }
          
    </ClientCont>
      
  </Dash>
  

</Main>
  );
}