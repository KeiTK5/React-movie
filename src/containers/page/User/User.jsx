import React from 'react';
import './user.css';
import { useAuth } from '../../../context/AuthorProvider'
import { upStatus } from '../../../redux/action/statusAction';
import { connect } from 'react-redux';
import { useState } from 'react';

function User(props) {
    const { user } = useAuth()

    const [input, setInput] = useState('')

    const listStatus = []

    const handleChange = e => {
        console.log(e.target.value);
        setInput(e.target.value)
    }

    const submit = () => {
        props.statusDispatch({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('')
        console.log(props.status);
    }

    return (
        <div className="main-center">
            <div className="container">
                <div className="user-main-banner">
                    <div className="user-image-banner">
                        <div className="user-avatar">
                            <h3 className="sword">K</h3>
                        </div>
                        <div className="user-name">Kei</div>
                        <img src="https://i.vdicdn.com/vg/2020/08/15/9246d609a0bbf192_ec13d044d2705996_685916159750169031.jpg" alt="" />
                    </div>
                    <div className="user-home">
                        <h4 className="user-title">Nhà</h4>
                        <h4 className="user-title">Hình</h4>
                        <h4 className="user-title">Video</h4>
                    </div>
                </div>
                <div className="status">
                    <div className="row">
                        <div className="col-8">
                            <div className="input-status">
                                <div className="avatar-square">K</div>
                                <div className="avatar-input">
                                    <input type="text" placeholder="Hãy chia sẽ điều gì đó !!" value={input} onChange={handleChange} />
                                </div>
                                <div className="btn-share" onClick={submit}>Chia sẻ</div>
                            </div>

                            {props.status.map(item => (
                                <>
                                    <div className="status-wrapper">
                                        <div className="input-status sub">
                                            <div className="avatar-square">K</div>
                                            <div className="avatar-name-user">
                                                Kei
                                            </div>
                                        </div>
                                        <div className="content-status">
                                            {item.text}
                                        </div>
                                    </div>
                                </>
                            ))}

                        </div>
                        <div className="col-4">
                            <div className="user-card">
                                <div className="user-padding">
                                    <div className="user-card-control">
                                        <div className="user-card-title">Username: </div>
                                        <div className="user-card-name">Kei</div>
                                    </div>
                                    <div className="user-card-control">
                                        <div className="user-card-title">Email: </div>
                                        <div className="user-card-name">{user ? JSON.stringify(user.email) : null}</div>
                                    </div>
                                    <div className="user-card-control">
                                        <div className="user-card-title">Giới tính: </div>
                                        <div className="user-card-name">Nam</div>
                                    </div>
                                    <div className="user-card-control">
                                        <div className="user-card-title">Thành viên: </div>
                                        <div className="user-card-name">Member</div>
                                    </div>
                                    <div className="user-card-control">
                                        <div className="user-card-title">KGEM: </div>
                                        <div className="user-card-name">0</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapState = (state) => {
    return { status: state.status }
}

const mapDispatch = (dispatch) => {
    return {
        statusDispatch: (data) => {
            dispatch(upStatus(data))
        }
    }
}


export default connect(mapState, mapDispatch)(User);