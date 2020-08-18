import React, {useState} from 'react';

import {Main, Dash} from '../../Components/dash'
import {Input} from '../../Components/input'
import {Table} from './styles'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

import TableC from '../../Components/table'


export default function Clientes() {

    const [search, setSearch] = useState('')

 return (
    <Main>
        <Menu />
        <Dash>
            <Input 
            height="30px"
            width="100%"
            margin="10px auto"
            type="text" 
            placeholder="Digite o nome do cliente"
            value={search}
            onChange={e => setSearch(e.target.value)}
            />

            <Table>
                <TableC  search={search}/>
            </Table>
        </Dash>
        

    </Main>
  );
}