import React from 'react';

import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

import TableFinancial from '../../Components/tableFin'

export default function FinanceiroSale() {


 return (
   <div className="main">
       <Menu />

       <div className="dash">
        <div className="financialSale"> 
          <TableFinancial />
        </div>
       </div>
   </div>
  );
}