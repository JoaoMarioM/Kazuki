import React from 'react';

import { useHistory } from 'react-router-dom'

import './styles.css'
import '../../../Assets/Css/global.css'


export default function AlertDialog({ onclose = () => {} }) {
    
    const history = useHistory()

    function logout(){
        localStorage.clear()
        history.push('/')
    }

    let dialog = (
        <div className="dialogC">
            <h1>Deseja realmente sair ?</h1>

            <p>Certifique-se de que todas as alterações foram salvas!</p>
            <div className="btn">
                <button onClick={logout}>Sim</button> 
                <button onClick={onclose}>Não</button>
            </div>
            
        </div>
    )

  return (
    <div className="dialogP">
      {dialog}
    </div>
  );
}

