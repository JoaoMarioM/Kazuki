import React from 'react'

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faUserCircle, faUser, faUsers, faDollarSign, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

export default function dash(){
    return(
        <div className="main">
           <Menu />
            <div className="dash">
                
                <input className="inputP" type="text" placeholder="Digite o nome do cliente"/>
                
                <div className="dashItens">
                   <div className="item1">
                    
                    </div>
                    <div className="dashI">
                        <div className="item2">
                        
                        </div>
                        <div className="item3">
                            
                        </div>
                        <div className="item4">
                        
                        </div> 
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}