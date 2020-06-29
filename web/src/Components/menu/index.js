import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserCircle, faUser, faUsers, faDollarSign, faCalendarAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import '../../Assets/Css/global.css'

import AlertDialog from '../dialog/dialogLogout'

export default function Menu(){

    const nameFunc = localStorage.getItem('nameFunc')

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="menu">
        <nav>
            <button className="logout" onClick={() => setIsOpen(true)}>
                <FontAwesomeIcon className="iconLogout" icon={faSignOutAlt} size="lg" color="#fff"/>
            </button>

            <FontAwesomeIcon className="iconUser" icon={faUserCircle} size="5x" color="#2741ff"/>
            
            <h1>{nameFunc}</h1>

            <Link to="/clientes" className="txtMenu"><p><FontAwesomeIcon className="iconMenu" icon={faUser} color="#2741FF" />Clientes</p></Link>
            <Link to="/funcionarioList" className="txtMenu"><p><FontAwesomeIcon className="iconMenu" icon={faUsers} color="#2741FF" />Funcionarios</p></Link>
            <Link to="/financeiro" className="txtMenu"><p><FontAwesomeIcon className="iconMenu" icon={faDollarSign} color="#2741FF" />Financeiro </p></Link>
            <Link to="/agenda" className="txtMenu"><p><FontAwesomeIcon className="iconMenu" icon={faCalendarAlt} color="#2741FF" />Agenda </p></Link>
        </nav>

        {
            isOpen ? <AlertDialog 
            onclose={() => setIsOpen(false)} /> : null
        }
    </div> 
    )
}