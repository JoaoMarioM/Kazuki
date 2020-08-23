import React, { useState } from 'react';

import { Form, ModalV, ModalView } from '../styleGlobal/modalView'
import { ButtonContract } from './styles.js'
import { ModalP, Conj, Title, ButtonSave } from '../styleGlobal/modalP'
import { Input } from '../../input'

import '../../../Assets/Css/global.css'

import SnackSuccess from '../../snackBar/success'
import SnackAttention from '../../snackBar/attention'
import ModalHeader from '../styleGlobal/modalHeader'

import api from '../../../services/api'

import { Link, useHistory } from 'react-router-dom'

export default function ModalClientSel(props) {

  const [isOpenS, setIsOpenS] = useState(false)

  const idClient = props.data.id

  const history = useHistory()

  const openContractList = (id) => {
    history.push('/clienteCont', { idC: id })

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

  async function handleupdate(e) {
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
    <ModalView height='450px'>

      <ModalV>

        <ModalHeader
          onclose={props.onclose}
          click={() => setUpdate(true)}
        />

          <Title>Clientes</Title>


        <Form onSubmit={handleupdate}>
          <Input
            height="25px"
            width="802px"
            margin="10px 10px auto"
            type="text"
            placeholder="Nome"
            value={name}
            disabled={update ? null : 'disabled'}
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
              disabled={update ? null : 'disabled'}
              onChange={e => setAddress(e.target.value)}
            />
            <Input
              height="25px"
              width="50px"
              margin="10px 10px auto"
              type="text"
              placeholder="Nº"
              value={number}
              disabled={update ? null : 'disabled'}
              onChange={e => setNumber(e.target.value)}
            />
            <Input
              height="25px"
              width="145px"
              margin="10px 10px auto"
              type="text"
              placeholder="Cep"
              value={cep}
              disabled={update ? null : 'disabled'}
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
              disabled={update ? null : 'disabled'}
              onChange={e => setNeighborhood(e.target.value)}
            />
            <Input
              height="25px"
              width="330px"
              margin="10px 10px auto"
              type="text"
              placeholder="Cidade"
              value={city}
              disabled={update ? null : 'disabled'}
              onChange={e => setCity(e.target.value)}
            />
            <Input
              height="25px"
              width="100px"
              margin="10px 10px auto"
              type="text"
              placeholder="Estado"
              value={state}
              disabled={update ? null : 'disabled'}
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
              disabled={update ? null : 'disabled'}
              onChange={e => setPhone(e.target.value)}
            />
            <Input
              height="25px"
              width="200px"
              margin="10px 10px auto"
              type="text"
              placeholder="Celular"
              value={cellPhone}
              disabled={update ? null : 'disabled'}
              onChange={e => setCellphone(e.target.value)}
            />
            <Input
              height="25px"
              width="360px"
              margin="10px 10px auto"
              type="text"
              placeholder="Email"
              value={email}
              disabled={update ? null : 'disabled'}
              onChange={e => setEmail(e.target.value)}
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
            placeholder="CPF"
            value={cpf}
            disabled={update ? null : 'disabled'}
            onChange={e => setCpf(e.target.value)}
          />
          </Conj>

            <ButtonContract onClick={() => openContractList(props.data.id)}
              visible={update ? 'none' : null}
            >
              <p>Contratos</p>
            </ButtonContract>

            <ButtonSave type="submit"
              visible={update ? null : 'none' }
            >
              <p>Salvar</p>
            </ButtonSave>


        </Form>

        {
          isOpenS ? <SnackSuccess
            onclose={() => setIsOpenS(false)} title="Cliente atualizado com sucesso!" /> : null
        }

        {/* {
      isOpenA ? <SnackAttention
      onclose={() => setIsOpenA(false)} title="Certifique-se de preencher todos os campos!"/> : null
      } */}

      </ModalV>

    </ModalView>

  )

  return (
    <ModalP>
      {modal}
    </ModalP>
  );
}


