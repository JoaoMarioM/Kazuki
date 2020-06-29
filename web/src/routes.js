import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login'
import Dash from './pages/dash'
import Clientes from './pages/clientes'
import Financeiro from './pages/financeiro'
import FinanceiroSale from './pages/financeiroSale'
import Agenda from './pages/agenda'
import ClientCont from './pages/clienteCont'
import ClientNewCont from './pages/clienteNewCont'
import FuncionarioList from './pages/funcioonariosList'
import ClientContV from './pages/clienteContV'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dash" component={Dash} />
                <Route path="/clientes" component={Clientes} />
                <Route path="/financeiro" component={Financeiro} />
                <Route path="/financeiroSale" component={FinanceiroSale} />
                <Route path="/agenda" component={Agenda} />
                <Route path="/clienteCont"  component={ClientCont} />
                <Route path="/clienteNewCont" component={ClientNewCont} />
                <Route path="/clienteContV" component={ClientContV} />
                <Route path="/funcionarioList" component={FuncionarioList} />
            </Switch>
        </BrowserRouter>
    )
}