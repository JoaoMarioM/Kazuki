import React, {useState} from 'react';

import './styles.css'
import '../../../Assets/Css/global.css'

import SnackSuccess from '../../snackBar/success'
import SnackAttention from '../../snackBar/attention'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faEdit } from '@fortawesome/free-regular-svg-icons'

import api from '../../../services/api'

import { Link, useHistory } from 'react-router-dom'

export default function ModalClientSel(props) {

  const [isOpenS, setIsOpenS] = useState(false)

  const idClient = props.data.id

   const history = useHistory()

   const openContractList = (id) => {
    history.push('/clienteCont', {idC: id})
    
   }

   const [update, setUpdate] = useState(false)

   const [name, setName] = useState(props.data.name)
   const [address, setAddress] = useState(props.data.address)
   const [number, setNumber] = useState(props.data.number)
   const [cep, setCep] = useState(props.data.cep)
   const [neighborhood, setNeighborhood] = useState(props.data.neighborhood)
   const [city, setCity] = useState(props.data.city)
   const [state, setState] = useState(props.data.state)
   const [phone, setPhone] = useState(props.data.phone)
   const [cellPhone, setCellphone] = useState(props.data.cellPhone)
   const [email, setEmail] = useState(props.data.email)
   const [cpf, setCpf] = useState(props.data.cpf)

   async function handleupdate(e){
    e.preventDefault()
    const id = props.data.id
    const payload = {
        name,
        address,
        number,
        cep,
        neighborhood,
        city,
        state,
        phone,
        cellPhone,
        email,
        cpf
    }
    try {
      api.put(`clientes/${id}`, payload)
      setIsOpenS(true)
      setUpdate(false)
    } catch (error) {
      alert('Não foi possivel atualizar o cliente!')
    }
   }
    
    let modal = (
        <div className="modalClientView">
          
           <div className="modalClientSel">
        
        <button  className="close" onClick={props.onclose}>
        <FontAwesomeIcon icon={faTimesCircle} color="#1C1C2D" size="lg" />
        </button>

        <div>
        <h1>Clientes</h1>

          <button  className="edit" onClick={() => setUpdate(true)}>
          <FontAwesomeIcon icon={faEdit} color="#1C1C2D" size="lg" />
          </button>
        </div>

        <form onSubmit={handleupdate}>
         <input className="name"
          type="text" 
          placeholder="Nome"
          value={name}
          disabled={update? null : 'disabled'}
          onChange={e => setName(e.target.value)}
         />
          <div className="conj1">
          <input className="address" 
            type="text" 
            placeholder="Endereço"
            value={address}
            disabled={update? null : 'disabled'}
            onChange={e => setAddress(e.target.value)}
          />
          <input className="number" 
          type="text" 
          placeholder="Nº"
          value={number}
          disabled={update? null : 'disabled'}
          onChange={e => setNumber(e.target.value)}
        />
          <input className="cep" 
            type="text" 
            placeholder="Cep"
            value={props.data.cep}
            disabled={update? null : 'disabled'}
            onChange={e => setCep(e.target.value)}
          /> 
          </div>
          <div className="conj2">
          <input className="neighborhood" 
            type="text" 
            placeholder="Bairro"
            value={props.data.neighborhood}
            disabled={update? null : 'disabled'}
            onChange={e => setNeighborhood(e.target.value)}
          />
          <input className="city" 
            type="text" 
            placeholder="Cidade"
            value={props.data.city}
            disabled={update? null : 'disabled'}
            onChange={e => setCity(e.target.value)}
          />
          <input className="state" 
            type="text" 
            placeholder="Estado"
            value={props.data.state}
            disabled={update? null : 'disabled'}
            onChange={e => setState(e.target.value)}
          />
          </div>
          <div className="conj3">
            <input className="phone" 
            type="text" 
            placeholder="Fone"
            value={props.data.phone}
            disabled={update? null : 'disabled'}
            onChange={e => setPhone(e.target.value)}
            />
            <input className="cellPhone" 
            type="text" 
            placeholder="Celular"
            value={props.data.cellPhone}
            disabled={update? null : 'disabled'}
            onChange={e => setCellphone(e.target.value)}
            />
            <input className="email" 
            type="text" 
            placeholder="Email"
            value={props.data.email}
            disabled={update? null : 'disabled'}
            onChange={e => setEmail(e.target.value)}
            />
          </div>
          <input className="cpf" 
            type="text" 
            placeholder="CPF"
            value={props.data.cpf}
            disabled={update? null : 'disabled'}
            onChange={e => setCpf(e.target.value)}
            />
          
          <div className="btnCad">
          
            <button className={update? "btnCont" : null} onClick={() => openContractList(props.data.id)}>
              <p>Contratos</p>
            </button>

            <button type="submit" className={update? null: "btnSaveE"} >
              <p>Salvar</p>
            </button>
    
          </div>
        </form>

      {
      isOpenS ? <SnackSuccess 
      onclose={() => setIsOpenS(false)} title="Cliente atualizado com sucesso!"/> : null
      }

      {/* {
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


