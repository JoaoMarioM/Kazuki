import React, {useEffect} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import './styles.css'
import '../../../Assets/Css/global.css'

export default function SnackSuccess(props) {
    
  useEffect(() => {
        const timer = setTimeout(() => {
          // console.log('This will run after 1 second!')
          return props.onclose(true)
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    let success= (
        <div className="snackS">
       
        <p> <FontAwesomeIcon icon={faCheckCircle} size="lg" style={{marginRight:5}}/>{props.title}</p>

        {/* {timer} */}
        </div>
    )


  return (
    <div className="snackP">
      {success}
    </div>
  );
}



