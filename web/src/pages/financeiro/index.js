import React from 'react';

import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

import { useHistory } from 'react-router-dom'


export default function Financeiro() {

  const history = useHistory()

  function handleSale(){
    history.push('/financeiroSale')
  }
 return (
   <div className="main">
       <Menu />

       <div className="dash">
        <div className="fin">
          <div className="btnFin">
            <button className="sale" onClick={handleSale}>
              <p>20.000,00</p>
              <p>Vendas mensal</p>
            </button>
            <button className="receive">
              <p>20.000,00</p>
              <p>Vendas mensal</p>
            </button>
            <button className="pay">
              <p>20.000,00</p>
              <p>Vendas mensal</p>
            </button>
          </div>
          

        </div>
       </div>
   </div>
  );
}