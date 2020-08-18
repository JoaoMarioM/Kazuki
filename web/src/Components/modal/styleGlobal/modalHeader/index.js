import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faEdit } from '@fortawesome/free-regular-svg-icons'

import {Header, Title, ButtonClose, ButtonEdit} from './style'


export default function ModalHeader(props){

  const [update, setUpdate] = useState(false)

    return(
        <Header>
          <ButtonClose onClick={props.onclose}>
            <FontAwesomeIcon icon={faTimesCircle} color="#1C1C2D" size="lg" />
          </ButtonClose>

          <ButtonEdit onClick={props.click}>
            <FontAwesomeIcon icon={faEdit} color="#1C1C2D" size="lg" />
          </ButtonEdit>
        </Header>
    )
}