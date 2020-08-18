import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserCircle, faUser, faUsers, faDollarSign, faCalendarAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import {MenuContainer, Nav, BtnLogout, IconUser, NameFunc, LinkItem} from './styles'
import '../../Assets/Css/global.css'

import AlertDialog from '../dialog/dialogLogout'

import SnackError from '../snackBar/erro'

export default function Menu(){

    const nameFunc = localStorage.getItem('nameFunc')
    const accessFunc = localStorage.getItem('accessFunc')

    console.log(accessFunc)


    const [isOpen, setIsOpen] = useState(false)

    const [isOpenE, setIsOpenE] = useState(false)

    const history = useHistory()

    function handleLock(){
        if(accessFunc === 'Admin'){
            history.push('/financeiro')
        }else(
            setIsOpenE(true)
        )
       
    }


    return(
        <MenuContainer>
        <Nav>
            <BtnLogout className="logout" onClick={() => setIsOpen(true)}>
                <FontAwesomeIcon icon={faSignOutAlt} size="lg" color="#fff"/>
            </BtnLogout>

            <IconUser>
                <FontAwesomeIcon icon={faUserCircle} size="5x" color="#2741ff" />
            </IconUser>
            
            <NameFunc>{nameFunc}</NameFunc>

            <LinkItem>
            
            <Link to="/clientes" className="txtMenu" >
                <p><FontAwesomeIcon className="iconMenu" icon={faUser} color="#2741FF" />Clientes</p>
            </Link>
            <Link to="/funcionarioList" className="txtMenu">
                <p><FontAwesomeIcon className="iconMenu" icon={faUsers} color="#2741FF" />Funcionarios</p>
            </Link>
            <button onClick={handleLock} className="txtMenu">
                <p><FontAwesomeIcon className="iconMenu" icon={faDollarSign} color="#2741FF" />Financeiro </p>
            </button>
            <Link to="/agenda" className="txtMenu">
                <p><FontAwesomeIcon className="iconMenu" icon={faCalendarAlt} color="#2741FF" />Agenda </p>
            </Link>
            
            </LinkItem>
            


        </Nav>

        {
            isOpen ? <AlertDialog 
            onclose={() => setIsOpen(false)} /> : null
        }

        {
            isOpenE ? <SnackError
            onclose={() => setIsOpenE(false)} title="Acesso negado!"/> : null
        }
    </MenuContainer> 
    )
}