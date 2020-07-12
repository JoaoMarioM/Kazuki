import React, {useState} from 'react';

import './styles.css'
import '../../../Assets/Css/global.css'

import SnackSuccess from '../../snackBar/success'
import SnackAttention from '../../snackBar/attention'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import api from '../../../services/api'


export default function ModalEmployeeSel(props) {

 

    let modal = (
        <div className="modal">
          
        <div className="modalF">
        
        <button  className="close" onClick={props.onclose}>
        <FontAwesomeIcon icon={faTimesCircle} color="#1C1C2D" size="lg" />
        </button>

        <h1>Funcionarios</h1>

        <form >
         <label htmlFor="name">Nome</label>
        <input className="name" 
          type="text" 
          placeholder="Nome:"
          value={props.data.name}
          // onChange={e => setName(e.target.value)}
          />

         <div className="conj1">
           <input className="address" 
            type="text" 
            placeholder="Endereço:"
             value={props.data.address}
              // onChange={e => setAddress(e.target.value)}
            />
            <input className="number" 
            type="text" 
            placeholder="Nº:"
             value={props.data.number}
              // onChange={e => setAddress(e.target.value)}
            />
           <input className="cep" 
            type="text" 
            placeholder="CEP:"
             value={props.data.cep}
              // onChange={e => setCep(e.target.value)}
            />
         </div>
         
         <div className="conj2">
          <input className="neighborhood" 
            type="text" 
            placeholder="Bairo:"
             value={props.data.neighborhood}
              // onChange={e => setNeighborhood(e.target.value)}
            />
          <input className="city" 
            type="text" 
            placeholder="Cidade:"
             value={props.data.city}
              // onChange={e => setCity(e.target.value)}
            />
          <input className="state" 
            type="text" 
            placeholder="Estado:"
             value={props.data.state}
              // onChange={e => setState(e.target.value)}
            />
         </div>
         
         <div className="conj3">
           <input className="phone" 
            type="text" 
            placeholder="Fone:"
             value={props.data.phone}
              // onChange={e => setPhone(e.target.value)}
            />
           <input className="cellPhone" 
            type="text" 
            placeholder="Celular:"
             value={props.data.cellPhone}
              // onChange={e => setCellPhone(e.target.value)}
            />
           <input className="email" 
            type="text" 
            placeholder="Email:"
             value={props.data.email}
              // onChange={e => setEmail(e.target.value)}
            />
         </div>
         
          <div className="conj4">
            <input className="cpf" 
              type="text" 
              placeholder="CPF:"
              value={props.data.cpf}
              // onChange={e => setCpf(e.target.value)}
              />
            <input className="rg" 
              type="text" 
              placeholder="RG:"
              value={props.data.rg}
              // onChange={e => setRg(e.target.value)}
              />
          </div>

        <div className="line"></div>


          <div className="conj5">
            <input className="company" 
              type="text" 
              placeholder="Empresa:"
              value={props.data.company}
              // onChange={e => setCompany(e.target.value)}
              />
            <input className="sector" 
              type="text" 
              placeholder="Setor:"
              value={props.data.sector}
              // onChange={e => setSector(e.target.value)}
              />
          </div>
          
          <div className="conj6">
            <input className="occupation" 
              type="text" 
              placeholder="Função:"
              value={props.data.occupation}
              // onChange={e => setOccupation(e.target.value)}
              />
            <input className="dtAdmi" 
              type="text" 
              placeholder="Data de admissão:"
              value={props.data.admissionDate}
              // onChange={e => setAdmissionDate(e.target.value)}
              />
            <input className="dtDem" 
              type="text" 
              placeholder="Data de demissão:"
              value={props.data.resignationDate}
              // onChange={e => setResignationDate(e.target.value)}
              />
          </div>
         
          <div className="conj7">
            <input className="workload" 
              type="text" 
              placeholder="Carga horaria:"
              value={props.data.workload}
              // onChange={e => setWorkload(e.target.value)}
              />
            <input className="salary" 
              type="text" 
              placeholder="Salario:"
              value={Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(props.data.salary)}
              // onChange={e => setSalary(e.target.value)}
              />
          </div>
          
          <div className="conj8">
            <input className="user" 
              type="text" 
              placeholder="Usuario:"
              value={props.data.user}
              // onChange={e => setUser(e.target.value)}
            />
            <input className="password" 
              type="text" 
              placeholder="Senha:"
              value={props.data.password}
              // onChange={e => setPassword(e.target.value)}
            />
          </div>

          {/* <div className="btnCad">
            <button type="submit" className="btnSave">Salvar</button>
          </div> */}

        </form>

      {/* {
      isOpenS ? <SnackSuccess 
      onclose={() => setIsOpenS(false)} title="Funcionario cadastrado com sucesso!"/> : null
      }

      {
      isOpenA ? <SnackAttention
      onclose={() => setIsOpenA(false)} title="Certifique-se de preencher todos os campos!"/> : null
      } */}
            
        </div>

        </div>
       
    )

  return (
    <div className="modalP">
      {modal}
    </div>
  );
}

