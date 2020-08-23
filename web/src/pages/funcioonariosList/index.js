import React from 'react';

import TableFunc from '../../Components/tableFunc'

import { Dash, Main } from '../../Components/dash'
import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

export default function FuncionarioList() {
 return (

  <Main>
  <Menu />
  <Dash>
      <TableFunc />
  </Dash>
</Main>
  );
}