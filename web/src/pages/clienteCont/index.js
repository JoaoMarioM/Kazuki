import React from 'react';

import TableCont from '../../Components/tableCont'

import {Dash, Main} from '../../Components/dash'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'




export default function ClientCont(props) {

const idC =  props.history.location.state.idC

 return (

 

  <Main>
    <Menu />
    <Dash>
      <TableCont idClient={idC} />   
    </Dash>
    

</Main>
  );
}