import React from 'react'

import {Main, Dash} from '../../Components/dash'
import {DashItens, Item1, Item2, Item3, Item4, DashI} from './styles'

import '../../Assets/Css/global.css'
import Menu from '../../Components/menu'

export default function dash(){
    return(
        <Main>
           <Menu />
            <Dash>
                
                <DashItens>
                   <Item1>
                    
                    </Item1>
                    <DashI>
                        <Item2>
                        
                        </Item2>
                        <Item3>
                            
                        </Item3>
                        <Item4>
                        
                        </Item4> 
                    </DashI>
                    
                </DashItens>
                
            </Dash>
        </Main>
    )
}