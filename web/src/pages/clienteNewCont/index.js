import React, {useState, Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle, faTrash, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

import SnackSuccess from '../../Components/snackBar/success'
import SnackAttention from '../../Components/snackBar/attention'

import api from '../../services/api'

import { useHistory} from 'react-router-dom'

export default function ClientNewCont(props) {

  const [isOpenS, setIsOpenS] = useState(false)
  const [isOpenA, setIsOpenA] = useState(false)  

  const history = useHistory()

  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [serviceMethodS, setServiceMethodS] = useState([])
  const [pestFoundS, setPestsFoundS] = useState([])
  const [characteristics, setCharacteristics] = useState()
  const [startDate, setStartDate] = useState('')
  const [warrant, setWarrant] = useState('')
  const [hour, setHour] = useState('')
  const [budgetTechnician, setBudgetTechnician] = useState('')
  const [responsibleTechnician, setResponsibleTechnician] = useState('')
  const [assistantTechnician, setAssistantTechnician] = useState('')
  const [payment, setPayment] = useState('')
  const [value, setValue] = useState('')

  const [counterM, setCounterM] = useState(0)
  const [counterP, setCounterP] = useState(0)


  const serviceMethod = JSON.stringify(serviceMethodS)
  const pestFound = JSON.stringify(pestFoundS)

  const idClient = props.history.location.state.idClient

  async function registerContract(e){
    e.preventDefault()

    // serviceMethod.toString()

    const data = {
      address,
      number,
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
      await api.post('contratos', data, {
        headers:{
          Authorization: idClient,
        }
        
      })
      setIsOpenS(true)
    } catch (error) {
      
    }
  }

  function AddM(e){
    e.preventDefault()

      setCounterM(counterM + 1)
  }

  function AddP(e){
    e.preventDefault()

    setCounterP(counterP + 1)
  }

  function RemoveM(e){
    e.preventDefault()

    setCounterM(counterM - 1)
  }
  function RemoveP(e){
    e.preventDefault()

    setCounterP(counterP - 1)
  }

  const contArrayService = (index) => (e) =>{
    const newValues = serviceMethodS
    newValues[index] = e.target.value

    setServiceMethodS(newValues)
  }

  const contArrayFound = (index) => (e) =>{
    const newValues2 = pestFoundS
    newValues2[index] = e.target.value

    setPestsFoundS(newValues2)
  }

  function handleBack(id){
    history.push('/clienteCont', {idC: id})
  
  }

  const [checkTest, setCheckTest] = useState(false)


 return (
  <div className="main">
  <Menu />
  <div className="dash">
    <div className="clientCont">

    <button className="back" onClick={() => handleBack(idClient)}>
      <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#1C1C2D"/>
    </button>

      <h1>Cadastrar Contrato</h1>

      <form onSubmit={registerContract}>
        
        <h3>Método de serviço</h3>
        
        <div className="serviceMethod">
            
            {new Array(counterM).fill('').map((_,index) =>(
              <select  className="selectNew" 
              // value={serviceMethod}
              onChange={contArrayService(index)}
              key={index}
              >
                <option >--</option>
                <option >Descupinização</option>
                <option >Esgotamento</option>
                <option >Desinsetização</option>
                <option >Desentupimento</option>
                <option >Desratização</option>
                <option >Limpeza de reservatório</option>
                <option >Limpeza caixa D`Agua</option>
                <option >Desinfecção</option>
              </select>
            ))}

            <button className="add" onClick={AddM}>
              <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#333" style={{marginLeft:10}}/>
            </button>
            
            <button className={ counterM >= 1 && "trash" || 'removeM' } onClick={RemoveM}>
                <FontAwesomeIcon icon={faTrash} size="lg" color="#333" style={{marginLeft:10}}/>
            </button>
      
           
        </div>
          
        <h3>Pragas encontradas</h3>

        <div className="pestsFound">

         {new Array(counterP).fill('').map((_,index) =>(
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
         ))}

           <button className="add" onClick={AddP}>
              <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#333" style={{marginLeft:10}}/>
           </button>
           <button className={ counterP >= 1 && "trash" || 'removeP' } onClick={RemoveP}>
              <FontAwesomeIcon icon={faTrash} size="lg" color="#333" style={{marginLeft:10}}/>
            </button>

        </div>
      <h3>Caracteristicas do local</h3>
         <textarea className="characteristics" 
          value={characteristics}
          onChange={e => setCharacteristics(e.target.value)}
         />
          <div className="conj1">
            <input className="startDate" 
              type="date" 
              placeholder="Data de inicio"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />
            <input className="warranty" 
              type="text" 
              placeholder="Garantia"
              value={warrant}
              onChange={e => setWarrant(e.target.value)}
            />
            <input className="hour" 
              type="time" 
              placeholder="Horario"
              value={hour}
              onChange={e => setHour(e.target.value)}
            /> 
          </div>
          <div className="conj2">
            <select className="budgetTechnician"
             onChange={e => setBudgetTechnician(e.target.value)}
            >
              <option >--</option>
              <option >Sergio Esteves</option>
              <option >Gerson Vieira</option>
            </select> 
            
            <select className="responsibleTechnician" 
             onChange={e => setResponsibleTechnician(e.target.value)}
            >
              <option >--</option>
              <option >Sergio Esteves</option>
              <option >Gerson Vieira</option>
            </select>
            <select className="AssistantTechnician"
             onChange={e => setAssistantTechnician(e.target.value)}
            >
              <option >--</option>
              <option >Gabriel Mourão</option>
            </select>
          </div>
          <div className="conj3">
            <input className="payment" 
            type="text" 
            placeholder="Condição de pagamento"
            value={payment}
            onChange={e => setPayment(e.target.value)}
            />
            <input className="value" 
            type="text" 
            placeholder="Valor"
            onKeyUp="maskIt(this,event,'###.###.###,##',true,{pre:'R$'})"
            value={value}
            onChange={e => setValue(e.target.value)}
            />
          </div>

          <div className="btnCad">
            <button type="submit" className="btnSave">Salvar</button>
          </div>

      </form>

        {
        isOpenS ? <SnackSuccess 
        onclose={() => setIsOpenS(false)} title="Contrato cadastrado com sucesso!"/> : null
        }

        {
        isOpenA ? <SnackAttention
        onclose={() => setIsOpenA(false)} title="Certifique-se de preencher todos os campos!"/> : null
        }
          
    </div>
      
  </div>
  

</div>
  );
}