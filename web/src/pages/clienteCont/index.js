import React from 'react';

import TableCont from '../../Components/tableCont'

import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'




export default function ClientCont(props) {

const idC =  props.history.location.state.idC

 return (

 

  <div className="main">
  <Menu />
  <div className="dash">
      <div className="client">
          <TableCont idClient={idC}/>
      </div>
    
      
  </div>
  

</div>
  );
}