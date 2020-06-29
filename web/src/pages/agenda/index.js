import React, {useState} from 'react';

// import SnackSuccess from '../../Components/snackBar/success'
import Modal from '../../Components/modal/clientCad'

import './styles.css'
import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

export default function Agenda() {

  const [isOpen, setIsOpen] = useState(false)

 return (
  <div className="main">
  <Menu />
  <div className="dash">

    <button onClick={() => setIsOpen(true)}>teste</button>   


   
      
  </div>

    {
      isOpen ? <Modal 
      onclose={() => setIsOpen(false)} /> : null
    }
     
</div>
  );
}