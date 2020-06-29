import React from 'react';

import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

import TableC from '../../Components/table'


export default function Clientes() {
 return (
    <div className="main">
        <Menu />
        <div className="dash">
            <input className="inputP" type="text" placeholder="Digite o nome do cliente"/>

            <div className="table">
                <TableC />
            </div>
        </div>
        

    </div>
  );
}