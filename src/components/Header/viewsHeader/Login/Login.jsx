import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { hideModal } from '../../../../store/redux/modalReducer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './login.css'

library.add(fas);

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div className="login">
            
            <i title="Close" 
            className="fas fa-window-close" 
            onClick={()=> dispatch(hideModal())} 
            />
         
            <div className="login-data">
                <form action="#" className="login__form">
                    <input type="email" placeholder="E-mail" className="email" />
                    <input type="password" placeholder="Password" className="password" />
                    <button className="login-btn">LOG IN</button>
                </form>

                <div className="login__help">
                    <a href="#" className="help-a">HELP</a>
                </div>
            </div>
        </div>
    )
}

export const LoginScreen = memo(Login)
