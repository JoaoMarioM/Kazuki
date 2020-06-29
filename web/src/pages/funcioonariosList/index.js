import React from 'react';

import TableFunc from '../../Components/tableFunc'

import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

export default function FuncionarioList() {
 return (
  <div className="main">
  <Menu />
  <div className="dash">
    
    <div className="funcionario">
      <TableFunc />
    </div>
    
      
  </div>
  

</div>
  );
}