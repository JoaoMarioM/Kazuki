import React, {useState} from 'react';

import { useHistory } from 'react-router-dom'

import './styles.css'
import '../../../Assets/Css/global.css'

import api from '../../../services/api'


import SnackSuccess from '../../snackBar/success'

export default function AlertDialogDelete(props) {
    
  const [isOpenS, setIsOpenS] = useState(false)
  const [onclose, setOnclose] = useState(false)

  async function handleDeleteContract(id, onclose){
    try {
      await api.delete(props.route) 

      setOnclose(onclose)

      setIsOpenS(true)

    } catch (err) {
      alert('Não foi possivel deletar!')
    }
  }

    let dialog = (
        <div className="dialogC">
            <h1>Deseja realmente deletar ?</h1>

            <p>{props.subTitle}</p>
            <div className="btn">
                <button onClick={() => handleDeleteContract(props.delete, props.onclose)}>Sim</button> 
                <button onClick={props.onclose}>Não</button>
            </div>
            
        </div>
    )


  return (
    <div className="dialogP">
      {dialog}

      {
      isOpenS ? <SnackSuccess 
      onclose={() => setIsOpenS(false)} 
      title="Contrato deletado com sucesso!"
      /> : null
      }
    </div>
  );
}

