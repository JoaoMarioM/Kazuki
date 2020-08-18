import React from 'react';

import { useHistory } from 'react-router-dom'

import {DialogC, DialogP, Title, SubTitle, ButtonY, ButtonN, ButtonContainer} from './styles'
import '../../../Assets/Css/global.css'


export default function AlertDialog({ onclose = () => {} }) {
    
    const history = useHistory()

    function logout(){
        localStorage.clear()
        history.push('/')
    }

    let dialog = (
        <DialogC>
            <Title>Deseja realmente sair ?</Title>

            <SubTitle>Certifique-se de que todas as alterações foram salvas!</SubTitle>
              <ButtonContainer>
                <ButtonY onClick={logout}>Sim</ButtonY> 
                <ButtonN onClick={onclose}>Não</ButtonN>
              </ButtonContainer>
                
            
        </DialogC>
    )

  return (
    <DialogP>
      {dialog}
    </DialogP>
  );
}

