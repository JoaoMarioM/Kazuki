import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

import '../../Assets/Css/global.css'

import {Container, BoxCenter, Form, Button} from './styles'
import {Input} from '../../Components/input'
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
            localStorage.setItem('accessFunc', response.data.accessType)

            console.log(response.data.accessType)

            history.push('/dash')
        } catch (err) {
            setIsOpenE(true)
        }
    }

    return(
        <Container>
           <BoxCenter>
               <Form onSubmit={login}>
                <Input 
                width="80%"
                height="30px"
                margin="10px auto"
                type="text" 
                placeholder="Usuario"
                value={user}
                onChange={e => setUser(e.target.value)}
                />
                <Input 
                width="80%"
                height="30px"
                margin="10px auto"
                type="password" 
                placeholder="Senha"
                value={password}
                onChange={ e => setPassword(e.target.value)}
                />
                <Button>Entar</Button>
               </Form>
           </BoxCenter>

           {
            isOpenE ? <SnackError
            onclose={() => setIsOpenE(false)} title="Não foi possivel fazer o login!"/> : null
           }
       
        </Container>
    )
}