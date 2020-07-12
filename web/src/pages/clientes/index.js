import React, {useState} from 'react';

import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

import TableC from '../../Components/table'


export default function Clientes() {

    const [search, setSearch] = useState('')

 return (
    <div className="main">
        <Menu />
        <div className="dash">
            <input className="inputP" 
            type="text" 
            placeholder="Digite o nome do cliente"
            value={search}
            onChange={e => setSearch(e.target.value)}
            />

            <div className="table">
                <TableC  search={search}/>
            </div>
        </div>
        

    </div>
  );
}