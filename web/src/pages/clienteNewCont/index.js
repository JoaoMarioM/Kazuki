import React, { useState, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons'


import { Dash, Main } from '../../Components/dash'
import { ClientCont, Title, ButtonBack, Form, Description, ServiceMethod, PestsFound, SelectNew, ButtonAdd, ButtonRemove, Characteristics, Select } from './styles'
import { Input } from '../../Components/input'
import { Conj, ButtonSave } from '../../Components/modal/styleGlobal/modalP'

import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

import SnackSuccess from '../../Components/snackBar/success'
import SnackAttention from '../../Components/snackBar/attention'
import SnackError from '../../Components/snackBar/erro'

import api from '../../services/api'

import { useHistory } from 'react-router-dom'

export default function ClientNewCont(props) {

  const [isOpenS, setIsOpenS] = useState(false)
  const [isOpenA, setIsOpenA] = useState(false)
  const [isOpenE, setIsOpenE] = useState(false)

  const history = useHistory()

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

  async function registerContract(e) {
    e.preventDefault()

    const data = {
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

    if( responsibleTechnician === '' || assistantTechnician === ''){
      setIsOpenA(true)
      return false
    }

    try {
      await api.post('contratos', data, {
        headers: {
          Authorization: idClient,
        }

      })
      setIsOpenS(true)
    } catch (err) {
      setIsOpenE(true)
      return false
    }
  }

  function AddM(e) {
    e.preventDefault()

    setCounterM(counterM + 1)
  }

  function AddP(e) {
    e.preventDefault()

    setCounterP(counterP + 1)
  }

  function RemoveM(e) {
    e.preventDefault()

    setCounterM(counterM - 1)
  }
  function RemoveP(e) {
    e.preventDefault()

    setCounterP(counterP - 1)
  }

  const contArrayService = (index) => (e) => {
    const newValues = serviceMethodS
    newValues[index] = e.target.value

    setServiceMethodS(newValues)
  }

  const contArrayFound = (index) => (e) => {
    const newValues2 = pestFoundS
    newValues2[index] = e.target.value

    setPestsFoundS(newValues2)
  }

  function handleBack(id) {
    history.push('/clienteCont', { idC: id })

  }

  console.log(serviceMethodS)

  return (
    <Main>
      <Menu />
      <Dash>
        <ClientCont>

          <ButtonBack onClick={() => handleBack(idClient)}>
            <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#1C1C2D" />
          </ButtonBack>

          <Title>Cadastrar Contrato</Title>

          <Form onSubmit={registerContract}>

            <Description>Método de serviço</Description>

            <ServiceMethod>

              {new Array(counterM).fill('').map((_, index) => (
                <SelectNew
                  onChange={contArrayService(index)}
                  key={index}
                >
                  <option value=''>--</option>
                  <option >Descupinização</option>
                  <option >Esgotamento</option>
                  <option >Desinsetização</option>
                  <option >Desentupimento</option>
                  <option >Desratização</option>
                  <option >Limpeza de reservatório</option>
                  <option >Limpeza caixa D`Agua</option>
                  <option >Desinfecção</option>
                </SelectNew>
              ))}

              <ButtonAdd onClick={AddM}>
                <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#333" style={{ marginLeft: 10 }} />
              </ButtonAdd>

              <ButtonRemove onClick={RemoveM}
                visible={counterM > 0 ? 'block' : 'none'}
              >
                <FontAwesomeIcon icon={faTrash} size="lg" color="#333" style={{ marginLeft: 10 }} />
              </ButtonRemove>


            </ServiceMethod>

            <Description>Pragas encontradas</Description>

            <PestsFound>

              {new Array(counterP).fill('').map((_, index) => (
                <SelectNew
                  onChange={contArrayFound(index)}
                  key={index}>
                  <option value=''>--</option>
                  <option >Cupim subterrâneo</option>
                  <option >Cupim madeira seca</option>
                  <option >Brocas</option>
                  <option >Pulgas</option>
                  <option >Baratas</option>
                  <option >Carrapatos</option>
                  <option >Formigas</option>
                  <option >Ratos</option>
                </SelectNew>
              ))}

              <ButtonAdd onClick={AddP}>
                <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#333" style={{ marginLeft: 10 }} />
              </ButtonAdd>
              <ButtonRemove onClick={RemoveP}
                visible={counterP > 0 ? 'block' : 'none'}
              >
                <FontAwesomeIcon icon={faTrash} size="lg" color="#333" style={{ marginLeft: 10 }} />
              </ButtonRemove >

            </PestsFound>

            <Description>Caracteristicas do local</Description>
            <Characteristics
              value={characteristics}
              onChange={e => setCharacteristics(e.target.value)}
            />
            <Conj
              justify="space-between"
            >
              <Input
                width="25%"
                margin="20px 10px 0 10px"
                height="25px"
                type="date"
                placeholder="Data de inicio"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
              <Input
                width="25%"
                margin="20px 10px 0 10px"
                height="25px"
                type="text"
                placeholder="Garantia"
                value={warrant}
                onChange={e => setWarrant(e.target.value)}
              />
              <Input
                width="25%"
                margin="20px 10px 0 10px"
                height="25px"
                type="time"
                placeholder="Horario"
                value={hour}
                onChange={e => setHour(e.target.value)}
              />
            </Conj>
            <Conj
              justify="space-between"
            >
              <Select
                onChange={e => setBudgetTechnician(e.target.value)}
              >
                <option value=''>Técnico orçamentista</option>
                <option >Sergio Esteves</option>
                <option >Gerson Vieira</option>
              </Select>

              <Select
                onChange={e => setResponsibleTechnician(e.target.value)}
              >
                <option value=''>Técnico responsavel</option>
                <option >Sergio Esteves</option>
                <option >Gerson Vieira</option>
              </Select>
              <Select
                onChange={e => setAssistantTechnician(e.target.value)}
              >
                <option value=''>Técnico auxiliar</option>
                <option >Gabriel Mourão</option>
              </Select>
            </Conj>
            <Conj
              justify="center"
            >
              <Input
                width="180px"
                margin="20px 10px 0 10px"
                height="25px"
                type="text"
                placeholder="Condição de pagamento"
                value={payment}
                onChange={e => setPayment(e.target.value)}
              />
              <Input
                width="150px"
                margin="20px 10px 0 10px"
                height="25px"
                type="text"
                placeholder="Valor"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </Conj>


              <ButtonSave type="submit" ><p>Salvar</p></ButtonSave>


          </Form>

          {
            isOpenS ? <SnackSuccess
              onclose={() => setIsOpenS(false)} title="Contrato cadastrado com sucesso!" /> : null
          }

          {
            isOpenA ? <SnackAttention
              onclose={() => setIsOpenA(false)} title="Preencha todos os campos corretamente!" /> : null
          }

        </ClientCont>

      </Dash>


    </Main>
  );
}