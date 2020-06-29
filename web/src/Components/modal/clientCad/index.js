import React, {useState} from 'react';

import './styles.css'
import '../../../Assets/Css/global.css'

import SnackSuccess from '../../snackBar/success'
import SnackAttention from '../../snackBar/attention'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import api from '../../../services/api'


export default function Modal({ onclose = () => {} }) {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [cep, setCep] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phone, setPhone] = useState('')
    const [cellPhone, setCellphone] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
  
    const [isOpenS, setIsOpenS] = useState(false)
    const [isOpenA, setIsOpenA] = useState(false)  
    const [isOpenE, setIsOpenE] = useState(false)
  
    async function registerClient(e){
      e.preventDefault()
  
      const data = {
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
  
      
      if(name === '' || address === ""){
        setIsOpenA(true)
        return false
      }else if( cep === '' || neighborhood === ""){
        setIsOpenA(true)
        return false
      }else if( city === '' || state === ""){
        setIsOpenA(true)
        return false
      }else if(phone === '' || cellPhone === ""){
        setIsOpenA(true)
        return false
      }else if(email === '' || cpf === ""){
        setIsOpenA(true)
        return false
      }
  
      try{      
           await api.post('clientes', data)
  
          setIsOpenS(true)
  
          setName('')
          setAddress('')
          setNumber('')
          setCep('')
          setNeighborhood('')
          setCity('')
          setState('')
          setPhone('')
          setCellphone('')
          setEmail('')
          setCpf('')
       
      }catch(err){
        alert('Erro ao cadastrar o cliente!')
      }
      
    }

    let modal = (
        <div className="modalClientCad">
          
           <div className="modalC">
        
        <button  className="close" onClick={onclose}>
        <FontAwesomeIcon icon={faTimesCircle} color="#1C1C2D" size="lg" />
        </button>

        <h1>Cadastrar cliente</h1>

        <form onSubmit={registerClient}>
         <input className="name" 
          id="inputE"
          type="text" 
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
         />
          <div className="conj1">
          <input className="address" 
            id="inputE"
            type="text" 
            placeholder="Endereço"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <input className="number" 
            id="inputE"
            type="text" 
            placeholder="Nº"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <input className="cep" 
            id="inputE"
            type="text" 
            placeholder="Cep"
            value={cep}
            onChange={e => setCep(e.target.value)}
          /> 
          </div>
          <div className="conj2">
          <input className="neighborhood" 
           id="inputE"
            type="text" 
            placeholder="Bairro"
            value={neighborhood}
            onChange={e => setNeighborhood(e.target.value)}
          />
          <input className="city" 
            id="inputE"
            type="text" 
            placeholder="Cidade"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <input className="state" 
            id="inputE"
            type="text" 
            placeholder="Estado"
            value={state}
            onChange={e => setState(e.target.value)}
          />
          </div>
          <div className="conj3">
            <input className="phone" 
            id="inputE"
            type="text" 
            placeholder="Fone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            />
            <input className="cellPhone" 
            id="inputE"
            type="text" 
            placeholder="Celular"
            value={cellPhone}
            onChange={e => setCellphone(e.target.value)}
            />
            <input className="email" 
            id="inputE"
            type="text" 
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
          </div>
          <input className="cpf" 
            id="inputE"
            type="text" 
            placeholder="CPF"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            />

          <div className="btnCad">
            <button type="submit" className="btnSave">Salvar</button>
          </div>
        </form>

      {
      isOpenS ? <SnackSuccess 
      onclose={() => setIsOpenS(false)} title="Cliente cadastrado com sucesso!"/> : null
      }

      {
      isOpenA ? <SnackAttention
      onclose={() => setIsOpenA(false)} title="Certifique-se de preencher todos os campos!"/> : null
      }
            
        </div>

        </div>
       
    )

  return (
    <div className="modalP">
      {modal}
    </div>
  );
}

