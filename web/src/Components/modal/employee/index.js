import React, { useState } from 'react';

import { Input } from '../../input'
import { ModalP, Conj, Title, ButtonSave } from '../styleGlobal/modalP'
import { Close, Form, ModalV, ModalView } from '../styleGlobal/modalView'
// import './styles.css'
import '../../../Assets/Css/global.css'

import SnackSuccess from '../../snackBar/success'
import SnackAttention from '../../snackBar/attention'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import api from '../../../services/api'

export default function ModalEmployee(props) {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
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
  const [accessType, setAccessType] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const [isOpenS, setIsOpenS] = useState(false)
  const [isOpenA, setIsOpenA] = useState(false)
  const [isOpenE, setIsOpenE] = useState(false)

  async function registerEmployee(e) {
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
      cpf,
      rg,
      company,
      sector,
      occupation,
      admissionDate,
      resignationDate,
      workload,
      salary,
      accessType,
      user,
      password
    }

    if (name === '' || address === "") {
      setIsOpenA(true)
      return false
    } else if (cep === '' || neighborhood === "") {
      setIsOpenA(true)
      return false
    } else if (city === '' || state === "") {
      setIsOpenA(true)
      return false
    } else if (phone === '' || cellPhone === "") {
      setIsOpenA(true)
      return false
    } else if (email === '' || cpf === "") {
      setIsOpenA(true)
      return false
    } else if (rg === '' || company === "") {
      setIsOpenA(true)
      return false
    } else if (sector === '' || occupation === "") {
      setIsOpenA(true)
      return false
    } else if (admissionDate === '' || workload === '') {
      setIsOpenA(true)
      return false
    } else if (salary === "" || accessType === '') {
      setIsOpenA(true)
      return false
    } else if (user === '' || password === "") {
      setIsOpenA(true)
      return false
    }
    try {
      await api.post('funcionario', data)

      setIsOpenS(true)

      setName('')
      setAddress('')
      setNumber('')
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
      setAccessType('')
      setUser('')
      setPassword('')

    } catch (err) {
      alert('Erro ao cadastrar o cliente!')
    }

  }

  let modal = (
    <ModalView height='520px'>

      <ModalV>

        <Close onClick={props.onclose}>
          <FontAwesomeIcon icon={faTimesCircle} color="#1C1C2D" size="lg" />
        </Close>

        <Title>Cadastrar funcionario</Title>

        <Form onSubmit={registerEmployee}>

          <Input
            height="25px"
            width="800px"
            margin="10px 10px auto"
            type="text"
            placeholder="Nome:"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Conj justify="center">
            <Input
              height="25px"
              width="565px"
              margin="10px 10px auto"
              type="text"
              placeholder="Endereço:"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <Input
              height="25px"
              width="50px"
              margin="10px 10px auto"
              type="text"
              placeholder="Nº"
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
            <Input
              height="25px"
              width="145px"
              margin="10px 10px auto"
              type="text"
              placeholder="CEP:"
              value={cep}
              onChange={e => setCep(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="330px"
              margin="10px 10px auto"
              type="text"
              placeholder="Bairo:"
              value={neighborhood}
              onChange={e => setNeighborhood(e.target.value)}
            />
            <Input
              height="25px"
              width="330px"
              margin="10px 10px auto"
              type="text"
              placeholder="Cidade:"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <Input
              height="25px"
              width="100px"
              margin="10px 10px auto"
              type="text"
              placeholder="Estado:"
              value={state}
              onChange={e => setState(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="200px"
              margin="10px 10px auto"
              type="text"
              placeholder="Fone:"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <Input
              height="25px"
              width="200px"
              margin="10px 10px auto"
              type="tel"
              placeholder="Celular:"
              value={cellPhone}
              onChange={e => setCellPhone(e.target.value)}
            />
            <Input
              height="25px"
              width="360px"
              margin="10px 10px auto"
              type="text"
              placeholder="Email:"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="250px"
              margin="10px 10px auto"
              type="text"
              placeholder="CPF:"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />
            <Input
              height="25px"
              width="250px"
              margin="10px 10px auto"
              type="text"
              placeholder="RG:"
              value={rg}
              onChange={e => setRg(e.target.value)}
            />
          </Conj>

          <div className="line"></div>


          <Conj justify="center">
            <Input
              height="25px"
              width="480px"
              margin="10px 10px auto"
              type="text"
              placeholder="Empresa:"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
            <Input
              height="25px"
              width="300px"
              margin="10px 10px auto"
              type="text"
              placeholder="Setor:"
              value={sector}
              onChange={e => setSector(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="460px"
              margin="10px 10px auto"
              type="text"
              placeholder="Função:"
              value={occupation}
              onChange={e => setOccupation(e.target.value)}
            />
            <Input
              height="25px"
              margin="10px 10px auto"
              type="date"
              placeholder="Data de admissão:"
              value={admissionDate}
              onChange={e => setAdmissionDate(e.target.value)}
            />
            <Input
              height="25px"
              margin="10px 10px auto"
              type="date"
              placeholder="Data de demissão:"
              value={resignationDate}
              onChange={e => setResignationDate(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="300px"
              margin="10px 10px auto"
              type="text"
              placeholder="Carga horaria:"
              value={workload}
              onChange={e => setWorkload(e.target.value)}
            />
            <Input
              height="25px"
              width="170px"
              margin="10px 10px auto"
              type="text"
              placeholder="Salario:"
              value={salary}
              onChange={e => setSalary(e.target.value)}
            />
            <Input
              height="25px"
              width="285px"
              margin="10px 10px auto"
              type="text"
              placeholder="Tipo de acesso:"
              value={accessType}
              onChange={e => setAccessType(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="390px"
              margin="10px 10px auto"
              type="text"
              placeholder="Usuario:"
              value={user}
              onChange={e => setUser(e.target.value)}
            />
            <Input
              height="25px"
              width="385px"
              margin="10px 10px auto"
              type="text"
              placeholder="Senha:"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Conj>


          <ButtonSave type="submit"><p>Salvar</p></ButtonSave>


        </Form>

        {
          isOpenS ? <SnackSuccess
            onclose={() => setIsOpenS(false)} title="Funcionario cadastrado com sucesso!" /> : null
        }

        {
          isOpenA ? <SnackAttention
            onclose={() => setIsOpenA(false)} title="Certifique-se de preencher todos os campos!" /> : null
        }

      </ModalV>

    </ModalView>

  )

  return (
    <ModalP>
      {modal}
    </ModalP>
  );
}

