import React, { useState } from 'react';
import './form.css'
import { useAuth } from '../../context/AuthorProvider';
import { useHistory } from 'react-router';
function Form(props) {
    const { login } = useAuth()
    const { active, handleActive } = props

    const history = useHistory()

    const [input, setInput] = useState('')
    const [pass, setPass] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    async function handleSubmit(e) {
        try {
            await login(input, pass)
            history.push('/')
            handleActive()
        } catch {
            console.log('error');
        }
    }


    return (
        <div className={`form ${active ? "active" : null}`}>
            <div className="form-control">
                <i className='bx bx-x icon-x' onClick={handleActive}></i>
                <h3 className="welcome">Welcome</h3>
            </div>
            <div className="form-control main-form">
                <div className="login active">
                    <span>Sign in</span>
                </div>
                <div className="login">
                    <span>Register</span>
                </div>
            </div>

            <div className="form-control form-lock form-mg">
                <span className="user-name-input">User Name</span>
                <div className="input">
                    {input ? null : <span><i className='bx bx-user icon-lock'></i></span>}
                    <input type="text" className="txt" value={input} onChange={handleChange} />
                </div>
            </div>
            <div className="form-control form-lock">
                <span className="user-name-input">Password</span>
                <div className="input">
                    {input ? null : <span><i className='bx bx-lock icon-lock'></i></span>}
                    <input type="password" className="txt" value={pass} onChange={handlePass} />
                </div>
            </div>
            <div className="form-control form-lock form-forget">
                <div className="remember">
                    <input type="checkbox" />
                    <span className="check">Remember me</span>
                </div>
                <div className="forget">
                    <span className="forget-pass">Forget Password</span>
                </div>
            </div>
            <div className="form-control submit">
                <span className="btn-submit" onClick={handleSubmit}>Submit</span>
            </div>
        </div>
    );
}

export default Form;