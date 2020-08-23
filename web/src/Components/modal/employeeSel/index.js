import React, { useState } from 'react';

import { Input } from '../../input'
import { ModalP, Conj, Title, ButtonSave } from '../styleGlobal/modalP'
import { Form, ModalV, ModalView } from '../styleGlobal/modalView'
import ModalHeader from '../styleGlobal/modalHeader'

import '../../../Assets/Css/global.css'

import SnackSuccess from '../../snackBar/success'
import SnackAttention from '../../snackBar/attention'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import api from '../../../services/api'


export default function ModalEmployeeSel(props) {

  let modal = (
    <ModalView height='520px'>

      <ModalV>

        <ModalHeader
          onclose={props.onclose}
        />

        <Title>Funcionarios</Title>

        <Form >
          <Input
            height="25px"
            width="800px"
            margin="10px 10px auto"
            type="text"
            placeholder="Nome:"
            value={props.data.name}
          // onChange={e => setName(e.target.value)}
          />

          <Conj justify="center">
            <Input
              height="25px"
              width="565px"
              margin="10px 10px auto"
              type="text"
              placeholder="Endereço:"
              value={props.data.address}
            // onChange={e => setAddress(e.target.value)}
            />
            <Input
              height="25px"
              width="50px"
              margin="10px 10px auto"
              type="text"
              placeholder="Nº:"
              value={props.data.number}
            // onChange={e => setAddress(e.target.value)}
            />
            <Input
              height="25px"
              width="145px"
              margin="10px 10px auto"
              type="text"
              placeholder="CEP:"
              value={props.data.cep}
            // onChange={e => setCep(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="330px"
              margin="10px 10px auto"
              type="text"
              placeholder="Bairo:"
              value={props.data.neighborhood}
            // onChange={e => setNeighborhood(e.target.value)}
            />
            <Input
              height="25px"
              width="330px"
              margin="10px 10px auto"
              type="text"
              placeholder="Cidade:"
              value={props.data.city}
            // onChange={e => setCity(e.target.value)}
            />
            <Input
              height="25px"
              width="100px"
              margin="10px 10px auto"
              type="text"
              placeholder="Estado:"
              value={props.data.state}
            // onChange={e => setState(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="200px"
              margin="10px 10px auto"
              type="text"
              placeholder="Fone:"
              value={props.data.phone}
            // onChange={e => setPhone(e.target.value)}
            />
            <Input
              height="25px"
              width="200px"
              margin="10px 10px auto"
              type="text"
              placeholder="Celular:"
              value={props.data.cellPhone}
            // onChange={e => setCellPhone(e.target.value)}
            />
            <Input
              height="25px"
              width="360px"
              margin="10px 10px auto"
              type="text"
              placeholder="Email:"
              value={props.data.email}
            // onChange={e => setEmail(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="250px"
              margin="10px 10px auto"
              type="text"
              placeholder="CPF:"
              value={props.data.cpf}
            // onChange={e => setCpf(e.target.value)}
            />
            <Input
              height="25px"
              width="250px"
              margin="10px 10px auto"
              type="text"
              placeholder="RG:"
              value={props.data.rg}
            // onChange={e => setRg(e.target.value)}
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
              value={props.data.company}
            // onChange={e => setCompany(e.target.value)}
            />
            <Input
              height="25px"
              width="300px"
              margin="10px 10px auto"
              type="text"
              placeholder="Setor:"
              value={props.data.sector}
            // onChange={e => setSector(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="460px"
              margin="10px 10px auto"
              type="text"
              placeholder="Função:"
              value={props.data.occupation}
            // onChange={e => setOccupation(e.target.value)}
            />
            <Input
              height="25px"
              margin="10px 10px auto"
              type="text"
              placeholder="Data de admissão:"
              value={props.data.admissionDate}
            // onChange={e => setAdmissionDate(e.target.value)}
            />
            <Input
              height="25px"
              margin="10px 10px auto"
              type="text"
              placeholder="Data de demissão:"
              value={props.data.resignationDate}
            // onChange={e => setResignationDate(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="300px"
              margin="10px 10px auto"
              type="text"
              placeholder="Carga horaria:"
              value={props.data.workload}
            // onChange={e => setWorkload(e.target.value)}
            />
            <Input
              height="25px"
              width="170px"
              margin="10px 10px auto"
              type="text"
              placeholder="Salario:"
              value={Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.data.salary)}
            // onChange={e => setSalary(e.target.value)}
            />
            <Input
              height="25px"
              width="285px"
              margin="10px 10px auto"
              type="text"
              placeholder="Tipo de acesso:"
              value={props.data.accessType}
            // onChange={e => setAccessType(e.target.value)}
            />
          </Conj>

          <Conj justify="center">
            <Input
              height="25px"
              width="390px"
              margin="10px 10px auto"
              type="text"
              placeholder="Usuario:"
              value={props.data.user}
            // onChange={e => setUser(e.target.value)}
            />
            <Input
              height="25px"
              width="385px"
              margin="10px 10px auto"
              type="password"
              placeholder="Senha:"
              value='***'
            // onChange={e => setPassword(e.target.value)}
            />
          </Conj>

          {/* <div className="btnCad">
            <button type="submit" className="btnSave">Salvar</button>
          </div> */}

        </Form>

        {/* {
      isOpenS ? <SnackSuccess 
      onclose={() => setIsOpenS(false)} title="Funcionario cadastrado com sucesso!"/> : null
      }

      {
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

