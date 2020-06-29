import React, {useState} from 'react';

import './styles.css'
import '../../../Assets/Css/global.css'

import SnackSuccess from '../../snackBar/success'
import SnackAttention from '../../snackBar/attention'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import api from '../../../services/api'

import { Link, useHistory } from 'react-router-dom'

export default function ModalClientSel(props) {

  const idClient = props.data.id

   const history = useHistory()

   const openContractList = (id) => {
    history.push('/clienteCont', {idC: id})
    

   }

  //  console.log(idClient)
    
    let modal = (
        <div className="modalClientView">
          
           <div className="modalClientSel">
        
        <button  className="close" onClick={props.onclose}>
        <FontAwesomeIcon icon={faTimesCircle} color="#1C1C2D" size="lg" />
        </button>

        <h1>Cliente</h1>

        <form >
         <input className="name"
          type="text" 
          placeholder="Nome"
          value={props.data.name}
          // onChange={e => setName(e.target.value)}
         />
          <div className="conj1">
          <input className="address" 
            type="text" 
            placeholder="Endereço"
            value={props.data.address}
            // onChange={e => setAddress(e.target.value)}
          />
          <input className="cep" 
            type="text" 
            placeholder="Cep"
            value={props.data.cep}
            // onChange={e => setCep(e.target.value)}
          /> 
          </div>
          <div className="conj2">
          <input className="neighborhood" 
            type="text" 
            placeholder="Bairro"
            value={props.data.neighborhood}
            // onChange={e => setNeighborhood(e.target.value)}
          />
          <input className="city" 
            type="text" 
            placeholder="Cidade"
            value={props.data.city}
            // onChange={e => setCity(e.target.value)}
          />
          <input className="state" 
            type="text" 
            placeholder="Estado"
            value={props.data.state}
            // onChange={e => setState(e.target.value)}
          />
          </div>
          <div className="conj3">
            <input className="phone" 
            type="text" 
            placeholder="Fone"
            value={props.data.phone}
            // onChange={e => setPhone(e.target.value)}
            />
            <input className="cellPhone" 
            type="text" 
            placeholder="Celular"
            value={props.data.cellPhone}
            // onChange={e => setCellphone(e.target.value)}
            />
            <input className="email" 
            type="text" 
            placeholder="Email"
            value={props.data.email}
            // onChange={e => setEmail(e.target.value)}
            />
          </div>
          <input className="cpf" 
            type="text" 
            placeholder="CPF"
            value={props.data.cpf}
            // onChange={e => setCpf(e.target.value)}
            />
          
          <div className="btnCad">
          
              <button className="btnCont" onClick={() => openContractList(props.data.id)}>
                <p>Contratos</p>
                {/* <h1>2</h1> */}
              </button>
  
            
          </div>
        </form>

      {/* {
      isOpenS ? <SnackSuccess 
      onclose={() => setIsOpenS(false)} title="Cliente cadastrado com sucesso!"/> : null
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


