import React from 'react';

import { Dash, Main } from '../../Components/dash'
import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

import TableFinancial from '../../Components/tableFin'

export default function FinanceiroSale() {


 return (
   <Main>
       <Menu />

       <Dash>
        <div className="financialSale"> 
          <TableFinancial />
        </div>
       </Dash>
   </Main>
  );
}