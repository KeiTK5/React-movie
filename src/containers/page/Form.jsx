import React, { useState } from 'react';
import './form.css'
import { useAuth } from '../../context/AuthorProvider';
import { useHistory } from 'react-router';
function Form(props) {
    const { login, signUp } = useAuth()
    const { active, handleActive } = props

    const [changeForm, setChangeForm] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const history = useHistory()

    // input login
    const [input, setInput] = useState('')
    const [pass, setPass] = useState('')

    // input register
    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')
    const [confirm, setConfirm] = useState('')

    // handle input login
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    // handle input register
    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handleUserPass = (e) => {
        setUserPass(e.target.value)
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value)
    }

    // submit login
    async function handleSubmit(e) {
        try {
            await login(input, pass)
            history.push('/')
            handleActive()
        } catch {
            console.log('error');
        }
    }

    // submit register
    async function handleSignUp(e) {
        e.preventDefault()

        if (userPass !== confirm) {
            return setError('Password do not match')
        }

        try {
            await signUp(userName, userPass)
            handleActive()
            setUserName('')
            setUserPass('')
            setConfirm('')
            setSuccess('Sign Up Success!')
        }
        catch {
            setError('Failed to create an account')
        }


    }


    return (
        <div className={`form ${active ? "active" : null}`}>
            <div className="form-control">
                <i className='bx bx-x icon-x' onClick={handleActive}></i>
                <h3 className="welcome">{changeForm ? "Register" : "Welcome"}</h3>
            </div>
            <div className="form-control main-form">
                <div className={`login ${changeForm ? null : "active"}`}>
                    <span onClick={() => { setChangeForm(false) }}>Sign in</span>
                </div>
                <div className={`login ${changeForm ? "active" : null}`}>
                    <span onClick={() => { setChangeForm(true) }}>Register</span>
                </div>
            </div>

            {
                // register
                changeForm ?
                    <>
                        {error ?
                            <div class="alert alert-danger" role="alert">
                                {error}
                            </div> :
                            <div class="alert alert-success" role="alert">
                                {success}
                            </div>
                        }
                        <div className="form-control form-lock form-mg">
                            <span className="user-name-input">User Name</span>
                            <div className="input">
                                {userName ? null : <span><i className='bx bx-user icon-lock'></i></span>}
                                <input type="text" className="txt" value={userName} onChange={handleUserName} />
                            </div>
                        </div>
                        <div className="form-control form-lock">
                            <span className="user-name-input">Password</span>
                            <div className="input">
                                {userPass ? null : <span><i className='bx bx-lock icon-lock'></i></span>}
                                <input type="password" className="txt" value={userPass} onChange={handleUserPass} />
                            </div>
                        </div>
                        <div className="form-control form-lock">
                            <span className="user-name-input">Confirm Password</span>
                            <div className="input">
                                {confirm ? null : <span><i className='bx bx-lock icon-lock'></i></span>}
                                <input type="password" className="txt" value={confirm} onChange={handleConfirm} />
                            </div>
                        </div>
                        <div className="form-control submit">
                            <span className="btn-submit" onClick={handleSignUp}>Submit</span>
                        </div>
                    </>
                    :
                    // login
                    <>
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
                                {pass ? null : <span><i className='bx bx-lock icon-lock'></i></span>}
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
                    </>
            }

        </div>
    );
}

export default Form;