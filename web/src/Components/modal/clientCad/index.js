import React, { useState } from 'react';

import { ModalP, Conj, Title, ButtonSave } from '../styleGlobal/modalP'
import { Input } from '../../input'
import { ModalClientView, ModalClient, Close, Form } from './styles'
import '../../../Assets/Css/global.css'

import SnackSuccess from '../../snackBar/success'
import SnackAttention from '../../snackBar/attention'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import api from '../../../services/api'


export default function Modal({ onclose = () => { } }) {

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

  async function registerClient(e) {
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


    if (name === '' || address === '') {
      setIsOpenA(true)
      return false
    } else if (cep === '' || neighborhood === '') {
      setIsOpenA(true)
      return false
    } else if (city === '' || state === '') {
      setIsOpenA(true)
      return false
    } else if (phone === '' || cellPhone === '') {
      setIsOpenA(true)
      return false
    } else if (email === '' || cpf === '') {
      setIsOpenA(true)
      return false
    }

    try {
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

    } catch (err) {
      alert('Erro ao cadastrar o cliente!')
    }

  }

  let modal = (
    <ModalClientView>

      <ModalClient>

        <Close onClick={onclose}>
          <FontAwesomeIcon icon={faTimesCircle} color="#1C1C2D" size="lg" />
        </Close>

        <Title>Cadastrar cliente</Title>

        <Form onSubmit={registerClient}>
          <Input
            height="25px"
            width="802px"
            margin="10px 10px auto"
            type="text"
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Conj
            justify="center"
          >
            <Input
              height="25px"
              width="565px"
              margin="10px 10px auto"
              type="text"
              placeholder="Endereço"
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
              placeholder="Cep"
              value={cep}
              onChange={e => setCep(e.target.value)}
            />
          </Conj>
          <Conj
            justify="center"
          >
            <Input
              height="25px"
              width="330px"
              margin="10px 10px auto"
              type="text"
              placeholder="Bairro"
              value={neighborhood}
              onChange={e => setNeighborhood(e.target.value)}
            />
            <Input
              height="25px"
              width="330px"
              margin="10px 10px auto"
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <Input
              height="25px"
              width="100px"
              margin="10px 10px auto"
              type="text"
              placeholder="Estado"
              value={state}
              onChange={e => setState(e.target.value)}
            />
          </Conj>
          <Conj
            justify="center"
          >
            <Input
              height="25px"
              width="200px"
              margin="10px 10px auto"
              type="text"
              placeholder="Fone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <Input
              height="25px"
              width="200px"
              margin="10px 10px auto"
              type="text"
              placeholder="Celular"
              value={cellPhone}
              onChange={e => setCellphone(e.target.value)}
            />
            <Input
              height="25px"
              width="360px"
              margin="10px 10px auto"
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Conj>
          <Input
            height="25px"
            width="200px"
            margin="10px 10px auto"
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />

          <ButtonSave type="submit">
            <p>Salvar</p>
          </ButtonSave>
        </Form>

        {
          isOpenS ? <SnackSuccess
            onclose={() => setIsOpenS(false)} title="Cliente cadastrado com sucesso!" /> : null
        }

        {
          isOpenA ? <SnackAttention
            onclose={() => setIsOpenA(false)} title="Certifique-se de preencher todos os campos!" /> : null
        }

      </ModalClient>

    </ModalClientView>

  )

  return (
    <ModalP>
      {modal}
    </ModalP>
  );
}

