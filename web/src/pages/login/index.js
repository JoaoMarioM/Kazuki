import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'
import '../../Assets/Css/global.css'

import api from '../../services/api'
import SnackError from '../../Components/snackBar/erro'


export default function Login(){   
    
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const [isOpenE, setIsOpenE] = useState(false)

    const history = useHistory()

    async function login(e){
        e.preventDefault()

        try {
            const response = await api.post('sessions', {user, password})

            localStorage.setItem('nameFunc', response.data.name)

            history.push('/dash')
        } catch (err) {
            setIsOpenE(true)
        }
    }

    return(
        <div className="container">
           <div className="log">
               <form onSubmit={login}>
                <input className="inputLogin" 
                type="text" 
                placeholder="Usuario"
                value={user}
                onChange={e => setUser(e.target.value)}
                />
                <input className="inputLogin" 
                type="password" 
                placeholder="Senha"
                value={password}
                onChange={ e => setPassword(e.target.value)}
                />
                <button>Entar</button>
               </form>
           </div>

           {
            isOpenE ? <SnackError
            onclose={() => setIsOpenE(false)} title="Não foi possivel fazer o login!"/> : null
           }
       
        </div>
    )
}