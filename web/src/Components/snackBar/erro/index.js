import React, {useEffect} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import '../../../Assets/Css/global.css'

export default function SnackError(props) {
    
  useEffect(() => {
        const timer = setTimeout(() => {
          // console.log('This will run after 1 second!')
          return props.onclose(true)
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    let erro= (
        <div className="snackE">
       
        <p> <FontAwesomeIcon icon={faTimes} size="lg" style={{marginRight:5}}/>{props.title}</p>

        {/* {timer} */}
        </div>
    )


  return (
    <div className="snackP">
      {erro}
    </div>
  );
}



