import React, {useState, Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

import SnackSuccess from '../../Components/snackBar/success'
import SnackAttention from '../../Components/snackBar/attention'

import { useHistory} from 'react-router-dom'


import api from '../../services/api'

export default function ClientContV(props) {
  
const idCo =  props.history.location.state.idCo

const serviceMethod = JSON.parse(idCo.serviceMethod)
const pestFound = JSON.parse(idCo.pestFound)

// console.log(serviceMethod)

const history = useHistory()

function handleBack(id){
  history.push('/clienteCont', {idC: id})

}


 return (
  <div className="main">
  <Menu />
  <div className="dash">
    <div className="clientCont">

    <button className="back" onClick={() => handleBack(idCo.cliente_id)}>
      <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#1C1C2D"/>
    </button>
      
 <h1>Contrato Nº {idCo.id}</h1>

      <form >
        
        <h3>Método de serviço</h3>
        <div className="serviceMethod">

          {serviceMethod.map(valor => 
            <input className="selectNew" 
            value={valor}
            key={valor}
          />
          )}      
           
        </div>
          
        <h3>Pragas encontradas</h3>

        <div className="pestsFound">
            
           { pestFound.map(valor => 
              <input className="selectNew" 
              value={valor}
              key={valor}
            />

            )}

        </div>
      <h3>Caracteristicas do local</h3>
         <textarea className="characteristics" 
          value={idCo.characteristics}
          // onChange={e => setCharacteristics(e.target.value)}
         />
          <div className="conj1">
            <input className="startDate" 
              type="date" 
              placeholder="Data de inicio"
              value={idCo.startDate}
              // onChange={e => setStartDate(e.target.value)}
            />
            <input className="warranty" 
              type="text" 
              placeholder="Garantia"
              value={idCo.warrant}
              // onChange={e => setWarrant(e.target.value)}
            />
            <input className="hour" 
              type="time" 
              placeholder="Horario"
              value={idCo.hour}
              // onChange={e => setHour(e.target.value)}
            /> 
          </div>
          <div className="conj2">
            <select className="budgetTechnician"
            //  onChange={e => setBudgetTechnician(e.target.value)}
            >
              <option >{idCo.budgetTechnician}</option>
             
            </select> 
            
            <select className="responsibleTechnician" 
            //  onChange={e => setResponsibleTechnician(e.target.value)}
            >
              <option >{idCo.responsibleTechnician}</option>
              
            </select>
            <select className="AssistantTechnician"
            //  onChange={e => setAssistantTechnician(e.target.value)}
            >
              <option >{idCo.assistantTechnician}</option>
            </select>
          </div>
          <div className="conj3">
            <input className="payment" 
            type="text" 
            placeholder="Condição de pagamento"
            value={idCo.payment}
            // onChange={e => setPayment(e.target.value)}
            />
            <input className="value" 
            type="text" 
            placeholder="Valor"
            // onKeyUp="maskIt(this,event,'###.###.###,##',true,{pre:'R$'})"
            value={Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(idCo.value)}
            // onChange={e => setValue(e.target.value)}
            />
          </div>

          <div className="btnCad">
            <button type="submit" className="btnSave">Salvar</button>
          </div>

      </form>

        {/* {
        isOpenS ? <SnackSuccess 
        onclose={() => setIsOpenS(false)} title="Contrato cadastrado com sucesso!"/> : null
        }

        {
        isOpenA ? <SnackAttention
        onclose={() => setIsOpenA(false)} title="Certifique-se de preencher todos os campos!"/> : null
        } */}
          
    </div>
      
  </div>
  

</div>
  );
}