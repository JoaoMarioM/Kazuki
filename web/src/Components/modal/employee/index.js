import React, {useState} from 'react';

import './styles.css'
import '../../../Assets/Css/global.css'

import SnackSuccess from '../../snackBar/success'
import SnackAttention from '../../snackBar/attention'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import api from '../../../services/api'


export default function ModalEmployee({ onclose = () => {} }) {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [cep, setCep] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [phone, setPhone] = useState('')
  const [cellPhone, setCellPhone] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [rg, setRg] = useState('')
  const [company, setCompany] = useState('')
  const [sector, setSector] = useState('')
  const [occupation, setOccupation] = useState('')
  const [admissionDate, setAdmissionDate] = useState('')
  const [resignationDate, setResignationDate] = useState('')
  const [workload, setWorkload] = useState('')
  const [salary, setSalary] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const [isOpenS, setIsOpenS] = useState(false)
  const [isOpenA, setIsOpenA] = useState(false)  
  const [isOpenE, setIsOpenE] = useState(false)

  async function registerEmployee(e){
    e.preventDefault()

    const data = {
      name,
      address,
      cep,
      neighborhood,
      city,
      state,
      phone,
      cellPhone,
      email,
      cpf,
      rg,
      company,
      sector,
      occupation,
      admissionDate,
      resignationDate,
      workload,
      salary,
      user,
      password
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
    }else if(rg === '' || company === ""){
      setIsOpenA(true)
      return false
    }else if(sector === '' || occupation === ""){
      setIsOpenA(true)
      return false
    }else if(admissionDate === '' || resignationDate === ""){
      setIsOpenA(true)
      return false
    }else if(workload === '' || salary === ""){
      setIsOpenA(true)
      return false
    }else if(user === '' || password === ""){
      setIsOpenA(true)
      return false
    }
      try{      
        await api.post('funcionario', data)

          setIsOpenS(true)
  
          setName('')
          setAddress('')
          setCep('')
          setNeighborhood('')
          setCity('')
          setState('')
          setPhone('')
          setCellPhone('')
          setEmail('')
          setCpf('')
          setRg('')
          setCompany('')
          setSector('')
          setOccupation('')
          setAdmissionDate('')
          setResignationDate('')
          setWorkload('')
          setSalary('')
          setUser('')
          setPassword('')
       
      }catch(err){
        alert('Erro ao cadastrar o cliente!')
      }
      
    }

    let modal = (
        <div className="modal">
          
        <div className="modalF">
        
        <button  className="close" onClick={onclose}>
        <FontAwesomeIcon icon={faTimesCircle} color="#1C1C2D" size="lg" />
        </button>

        <h1>Cadastrar funcionario</h1>

        <form onSubmit={registerEmployee}>
         
        <input className="name" 
          type="text" 
          placeholder="Nome:"
          value={name}
          onChange={e => setName(e.target.value)}
          />

         <div className="conj1">
           <input className="endereço" 
            type="text" 
            placeholder="Endereço:"
             vlue={address}
              onChange={e => setAddress(e.target.value)}
            />
           <input className="cep" 
            type="text" 
            placeholder="CEP:"
             vlue={cep}
              onChange={e => setCep(e.target.value)}
            />
         </div>
         
         <div className="conj2">
          <input className="bairro" 
            type="text" 
            placeholder="Bairo:"
             vlue={neighborhood}
              onChange={e => setNeighborhood(e.target.value)}
            />
          <input className="cidade" 
            type="text" 
            placeholder="Cidade:"
             vlue={city}
              onChange={e => setCity(e.target.value)}
            />
          <input className="estado" 
            type="text" 
            placeholder="Estado:"
             vlue={state}
              onChange={e => setState(e.target.value)}
            />
         </div>
         
         <div className="conj3">
           <input className="fone" 
            type="text" 
            placeholder="Fone:"
             vlue={phone}
              onChange={e => setPhone(e.target.value)}
            />
           <input className="celular" 
            type="text" 
            placeholder="Celular:"
             vlue={cellPhone}
              onChange={e => setCellPhone(e.target.value)}
            />
           <input className="email" 
            type="text" 
            placeholder="Email:"
             vlue={email}
              onChange={e => setEmail(e.target.value)}
            />
         </div>
         
          <div className="conj4">
            <input className="cpf" 
              type="text" 
              placeholder="CPF:"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
              />
            <input className="rg" 
              type="text" 
              placeholder="RG:"
              value={rg}
              onChange={e => setRg(e.target.value)}
              />
          </div>

        <div className="line"></div>


          <div className="conj5">
            <input className="empresa" 
              type="text" 
              placeholder="Empresa:"
              value={company}
              onChange={e => setCompany(e.target.value)}
              />
            <input className="setor" 
              type="text" 
              placeholder="Setor:"
              value={sector}
              onChange={e => setSector(e.target.value)}
              />
          </div>
          
          <div className="conj6">
            <input className="funcao" 
              type="text" 
              placeholder="Função:"
              value={occupation}
              onChange={e => setOccupation(e.target.value)}
              />
            <input className="dtAdmi" 
              type="text" 
              placeholder="Data de admissão:"
              value={admissionDate}
              onChange={e => setAdmissionDate(e.target.value)}
              />
            <input className="dtDem" 
              type="text" 
              placeholder="Data de demissão:"
              value={resignationDate}
              onChange={e => setResignationDate(e.target.value)}
              />
          </div>
         
          <div className="conj7">
            <input className="cargaH" 
              type="text" 
              placeholder="Carga horaria:"
              value={workload}
              onChange={e => setWorkload(e.target.value)}
              />
            <input className="salario" 
              type="text" 
              placeholder="Salario:"
              value={salary}
              onChange={e => setSalary(e.target.value)}
              />
          </div>
          
          <div className="conj8">
            <input className="user" 
              type="text" 
              placeholder="Usuario:"
              value={user}
              onChange={e => setUser(e.target.value)}
            />
            <input className="password" 
              type="text" 
              placeholder="Senha:"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="btnCad">
            <button type="submit" className="btnSave">Salvar</button>
          </div>

        </form>

      {
      isOpenS ? <SnackSuccess 
      onclose={() => setIsOpenS(false)} title="Funcionario cadastrado com sucesso!"/> : null
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

